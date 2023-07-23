import { FC } from "react";
import { Button as MuiButton } from "@mui/material";

type Variant = "text" | "contained" | "outlined"

type Props = {
  variant?: Variant
  children: React.ReactNode
}

export const Button: FC<Props> = ({children, variant})=>(
  <MuiButton variant={variant}>{children}</MuiButton>
)