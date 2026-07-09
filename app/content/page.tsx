import matter from 'gray-matter';
import fs from 'fs';


const file = fs.readFileSync("blog.md", "utf8");
const { data, content } = matter(file);

console.log(data);
console.log(content);


import React from 'react'

function page() {
  return (
    <>
  <p>Title: {data.title}</p>

    </>
  )
}

export default page