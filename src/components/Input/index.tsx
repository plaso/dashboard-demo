import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string,
  error?: string | false
}

export default function Input({ id, label, type, placeholder, value, onChange, error }: InputProps) {
  const borderClassName = error ? 'bg-red-50 border-red-500' : 'bg-gray-50 border-gray-300'

  return (
    <div className="mb-6">
      <label htmlFor={id}>
        {label}
      </label>

      {type === 'range' ? (
        <input
          type={type}
          id={id}
          className="w-full max-w-sm h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          min={0}
          max={10}
          step={1}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={id}
          className={`${borderClassName} border text-gray-900 text-sm rounded-lg outline-none focus:ring-brand focus:border-brand block w-full p-2.5`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
      )}

      {error ? (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      ) : null}

    </div>
  )
}