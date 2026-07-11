export default async function BlogPage({
  params,
}: {
  params: { id: string };
}) {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, { cache: "no-store" }
  );

  const data = await res.json();

  const { id } = data;

  return (
    <div>
      <h1>Blog Page {id}</h1>
    </div>
  );
}

