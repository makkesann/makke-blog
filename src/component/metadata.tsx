import type { Metadata } from 'next'
import Head from 'next/head'
import { FC } from 'react'


type MetadataChild = {
  title: string
  description?: string
}

export const GenerateMetadata: FC<MetadataChild> = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}