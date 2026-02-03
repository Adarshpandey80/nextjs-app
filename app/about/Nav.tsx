import Link from "next/link"


function Nav() {
  return (
    <>
    <nav>
      <div className="flex justify-around p-4 bg-amber-950">
         <div>
            <h2 className="text-2xl font-bold">Logo</h2>
          </div>
           <ul className="flex space-x-4 bg-amber-950 text-shadow-amber-50 gap-7 mr-6" >
         
            <li> <Link href={"/Admin"} className="hover:text-amber-200"> Admin </Link> </li>
            <li> <Link href={"/blogpage"} className="hover:text-amber-200"> BlogPage</Link></li>
            <li> <Link  href={"/about"} className="hover:text-amber-200">about</Link></li>
        </ul>
      </div>
      
       
    </nav>
    </>
  )
}

export default Nav