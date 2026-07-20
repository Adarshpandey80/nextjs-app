import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendResetEmail(
  email: string,
  resetLink: string
) {
  await transporter.sendMail({
    from: `"My App" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Reset Password",

    html: `
      <h2>Reset Your Password</h2>

      <p>Click the button below to reset your password.</p>

      <a href="${resetLink}">
        Reset Password
      </a>

      <p>This link expires in 15 minutes.</p>
    `,
  });
}