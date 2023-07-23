import Link from "next/link"
import { FC } from "react"
import { Button } from "@/component/mui/Button"

type Props = {
  id: string
  children: React.ReactNode
}

export const CategoryButton:FC<Props> = ({ id, children }) => (
  <Link href={{pathname: `/blogs`, query: {category: id} }}>
    <Button>{children}</Button>
  </Link>
)