import Link from "next/link";


export default function Nav(){
    return (
        <div className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">My App</h1>
            <ul className="flex space-x-4 mt-2">
                <li> <Link href={"/JWT"} className="hover:text-amber-200">Home</Link></li>
                <li> <Link href={"/JWT/dashboard"} className="hover:text-amber-200">Dashboard</Link></li>
                <li> <Link href={"/JWT/profile"} className="hover:text-amber-200">Profile</Link></li>
                <li> <Link href={"/JWT/register"} className="hover:text-amber-200">Register</Link></li>
                <li> <Link  href={"/JWT/login"} className="hover:text-amber-200">Login</Link></li>
                
            </ul>
        </div>
    )
}