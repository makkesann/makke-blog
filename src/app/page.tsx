import Link from "next/link"
import { FC } from "react"
import { client } from "@/libs/client"

type Data = any[]

const Page: FC = async () => {
  const data: Data = await getAllBlogs()
  if (!data) return<></>
  return (
    <>
      {data && data.map((data) => (
        <div key={data.id}>
          <Link href={{pathname: `/blog/${data.id}` }} className="text-blue-600 dark:text-blue-500 hover:underline">{data.title}</Link>
        </div>
      ))}
    </>
  )
}

const getAllBlogs = async() => {
  const data = await client.getList({ 
    endpoint: "blogs" 
  });
  return data.contents
};

export default Page