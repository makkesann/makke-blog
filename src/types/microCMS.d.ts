type Eyecatch = {
  url: string
  height: number
  width: number
}

type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}

export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  eyecatch: Eyecatch
  categories: Category[]
}