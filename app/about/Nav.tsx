import Link from "next/link"


function Nav() {
  return (
    <>
    <nav>
        <ul>
            <li> <Link href={"/Admin"}> Admin </Link> </li>
            <li> <Link href={"/blogpage"}> BlogPage</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Nav