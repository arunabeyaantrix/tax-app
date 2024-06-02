type InputProps = {
  label?: string
  value: string | number
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <>
      {label && <label className="block text-gray-500">{label}</label>}
      <input
        type="text"
        className="block my-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  )
}
