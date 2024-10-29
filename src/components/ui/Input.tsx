import { InputCustom } from "./Form"

interface Props {
  input: InputCustom
}

export const Input = ({ input }: Props) => {

  const { placeHolder, type, value } = input.input

  return (
    <div>
      <label className="block font-semibold">{input.label}</label>
      <input type={type} placeholder={placeHolder} value={value} className={`${'border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md'}`} />
    </div>
  )
}
