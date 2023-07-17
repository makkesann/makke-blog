import { Box } from "@mui/material"
import { FC, ReactNode } from "react"

type Props = {
  direction?: "row" | "column"
  wrap?: "nowrap" | "wrap"
  justify?: "flex-start" | "flex-end" | "center" | "space-between"
  items?: "flex-start" | "flex-end" | "center"
  children?: ReactNode
}

export const Flex: FC<Props> = ({ direction, wrap, justify, items, children }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent: justify,
      alignItems: items,
    }}>
      {children}
    </Box>
  )
}