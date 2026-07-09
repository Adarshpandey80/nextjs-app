import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';



// const filePath = path.join(process.cwd(), "app","content", 'blog.md');
// const file = fs.readFileSync(filePath, "utf8");
// const { data, content } = matter(file);

const folderPath = path.join(process.cwd() , "app", "content");

const files = fs.readdirSync(folderPath);

console.log(files);

const blogs = files.map((fileName) =>{
   const   filePath = path.join( folderPath , fileName);
   const filecontent  = fs.readFileSync(filePath, "utf8");
   const {data , content} = matter(filecontent);
   return {
      slug : fileName.replace('.md', ''),
      ...data,
      content
   };
})




function Page() {
  return (
    <>
  
    <h1>Content Page</h1>

   {/* <div className='m-4 p-4 border-2 border-blue-950 rounded-lg shadow-md'>
      <h2 className='text-2xl font-semibold mb-2'>{data.title}</h2>
      <h2 className='text-2xl font-semibold mb-2'>{data.author}</h2>
      <p className='text-gray-700 mb-4'>{data.date.toString()}</p>
      <div className='text-gray-800'>
        {content}
      </div>
    </div>   */}


    { blogs.map((blog) => (
      <div key={blog.slug} className='m-4 p-4 border-2 border-blue-950 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-2'>{blog.title}</h2>
        <h2 className='text-2xl font-semibold mb-2'>{blog.author}</h2>
        <p className='text-gray-700 mb-4'>{blog.date}</p>
        <div className='text-gray-800'>
          {blog.content}
        </div>
      </div>
    ))}


    </>
  )
}

export default Page