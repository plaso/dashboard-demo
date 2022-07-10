import { ButtonHTMLAttributes } from 'react'

export default function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="text-white bg-brand font-medium text-sm px-5 py-2.5 rounded-lg"
      {...props}
    >
      {children}
    </button>
  )
}