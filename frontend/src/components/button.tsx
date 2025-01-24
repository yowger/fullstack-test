import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded cursor-pointer uppercase "
            {...props}
        >
            {children}
        </button>
    )
}
