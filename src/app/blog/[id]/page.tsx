import { client } from "@/libs/client"
import { FC } from "react"

type Params = {
  id: string
}

type Props = {
  params: Params
};


const BlogId: FC<Props> = async ({ params }) => {
  const blog = await getBlog(params.id)
  if (!blog) return<></>
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
  );
};

export default BlogId

const getBlog = async (id: string) => {
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return data
};
