import { FC } from "react"
import { client } from "@/libs/client"
import { Blog } from "@/types/microCMS"
import { BlogCard } from "@/component/BlogCard"
import { Box } from "@mui/material"

const Page: FC = async () => {
  const blogs: Blog[] | null = await getAllBlogs()
  if (!blogs) return<></>
  return (
    <Box className="py-16">
      {blogs.map((blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </Box>
  )
}

const getAllBlogs = async() => {
  const data = await client.getList({ 
    endpoint: "blogs" 
  });
  return data.contents
};

export default Page