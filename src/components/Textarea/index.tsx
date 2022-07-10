import { TextareaHTMLAttributes } from 'react'

type TextareatProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string | false
}

export default function Textarea({ id, label, placeholder, value, onChange, error }: TextareatProps) {
  const borderClassName = error ? 'bg-red-50 border-red-500' : 'bg-gray-50 border-gray-300'

  return (
    <div className="mb-6">
      <label htmlFor={id}>
        {label}
      </label>

      <textarea
        id={id}
        rows={4}
        className={`${borderClassName} border outline-none text-gray-900 text-sm rounded-lg focus:ring-brand focus:border-brand block w-full p-2.5`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />

      {error ? (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      ) : null}
    </div>
  )
}