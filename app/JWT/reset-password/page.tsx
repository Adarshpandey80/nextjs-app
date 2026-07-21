"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ResetPassword() {
  const router = useRouter();

  // Read the token from the URL
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  // Form state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        token,
        password,
      }),
    });

    const data = await res.json();

    alert(data.message);

    if (res.ok) {
      router.push("/JWT/login");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Reset Password
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-96"
      >
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          className="border p-2 rounded"
        />

        <button
          className="bg-blue-500 text-white p-2 rounded"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}