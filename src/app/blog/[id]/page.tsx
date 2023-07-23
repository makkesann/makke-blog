import { client } from "@/libs/client"
import { FC } from "react";
import type { Metadata } from 'next'
import { Typography } from "@mui/material";

type Params = {
  id: string
}

type Props = {
  params: Params
}


const BlogId: FC<Props> = async ({ params }) => {
  const blog = await getBlog(params.id)
  if (!blog) return<></>
  return (
    <main>
      <Typography variant="h4">{blog.title}</Typography>
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

export const generateMetadata = async ({ params }:Props): Promise<Metadata> => {
  const data = await getBlog(params.id)
  return {
    title: data.title,
  }
}