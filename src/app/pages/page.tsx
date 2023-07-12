import Link from "next/link"
import { FC } from "react"
import { client } from "@/libs/client"


type Props = {
  blog?: any[]
}

export const Page: FC<Props> = async () => {
  const data = await getStaticProps()
  console.log(data)
  return (
    <div>
    <ul>
      
      {data && data.map((data) => (
        <li key={data.id}>
          <Link href={`/data/${data.id}`}>{data.title}</Link>
        </li>
      ))}
    </ul>
    かなしい
  </div>
  )
}

const getStaticProps = async () => {
  const data = await client.getList({ 
    endpoint: "blogs" 
  });

  return data.contents
};

export default Page