import { Input } from "./Input"

export interface InputCustom {
  input: { type: string, placeHolder: string, value?: string }
  label: string
}

interface Props {
  inputs: InputCustom[]
}

export const Form = ({ inputs }: Props) => {
  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray">
      <div className="relative sm:w-96 mx-auto text-center">
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <form action="/" className="px-8 py-6">
            {
              inputs.map(input => (
                <Input key={input.label} input={input} />
              ))
            }
          </form>
        </div>
      </div>
    </div>
  )
}
