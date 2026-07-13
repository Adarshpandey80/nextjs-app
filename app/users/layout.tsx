
import Nav from "@/app/users/Nav";

type RootLayoutprops = {
    children: React.ReactNode;
}

export default function RootLayout({children}:RootLayoutprops){
    return (
        <html>
            <body>
                <Nav />
                <div> {children} </div>
            </body>
        </html>
    )
}