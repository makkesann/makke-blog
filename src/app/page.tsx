import Link from "next/link"
import { FC } from "react"
import { client } from "@/libs/client"

type Data = any[]

const Page: FC = async () => {
  const data: Data = await getAllBlogs()
  if (!data) return<></>
  return (
    <div>
    <ul>
      
      {data && data.map((data) => (
        <li key={data.id}>
          <Link href={{pathname: `/blog/${data.id}` }}>{data.title}</Link>
        </li>
      ))}
    </ul>
    かなしい
  </div>
  )
}

const getAllBlogs = async() => {
  const data = await client.getList({ 
    endpoint: "blogs" 
  });
  return data.contents
};

export default Page