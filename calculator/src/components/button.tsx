import React from "react"

interface ButtonProps {
  children: React.ReactNode,
  className: string,
  onClick?: () => void
}

export default function Button({children, className, onClick, ...rest}: ButtonProps) {
  return (
    <button
      type="button"
      className={`bg-gray-100 py-3 px-5 rounded-3xl shadow-sm text-gray-600 hover:brightness-95 hover:cursor-pointer active:brightness-90 transition-all duration-300 text-3xl ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}
