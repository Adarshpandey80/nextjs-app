
export default function Nav(){
    return(
        <>
            <nav className="bg-gray-800 text-white p-4 flex justify-around px-6"  >
                <div className="container mx-auto">
                    <h1 className="text-xl font-bold">My App</h1>
                </div>
                <ul className="flex space-x-4">
                    <li><a href="/users" className="hover:text-gray-400">ShowData</a></li>
       

                    <li><a href="/users/postdata" className="hover:text-gray-400">PostData</a></li>


                    <li><a href="/search" className="hover:text-gray-400">Search</a></li>
                </ul>
            </nav>
        </>
    )
}