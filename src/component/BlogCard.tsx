import Link from "next/link"
import { FC } from "react"
import { Blog } from "@/types/microCMS"
import { Card, Typography } from "@mui/material"
import { CategoryButton } from "@/component/CategoryButton"

type Props = {
  blog: Blog
}

export const BlogCard:FC<Props> = ({ blog }) => (
  <Card variant="outlined" className="rounded-xl p-4 mb-4">
    <Link href={{pathname: `/blog/${blog.id}` }} className="hover:underline">
      <Typography variant="h5" className="text-gray-600 mb-4">{blog.title}</Typography>
    </Link>
    {blog.categories.length !== 0 && blog.categories.map((category) => (
      <CategoryButton key={category.id} id={category.id}>{category.name}</CategoryButton>
    ))}
    <Typography className="text-gray-600">{blog.updatedAt}</Typography>
  </Card>
)