import { ReactElement } from "react"

export interface ButtonProps {
    children?: ReactElement | ReactElement[] | string
    className?: string
    type?: "primary" | "secondary" | "outline"
    loading?: boolean
    [rest: string]: any
}

export interface LoadingButtonProps extends ButtonProps {
    message?: string
}
