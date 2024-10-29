import Image from "next/image"


interface Props {
  children: React.ReactNode
  img: string
}

export const Modal = ({ children, img }: Props) => {
  return (
    <div className="bg-gray-100 rounded-md flex items-center justify-center">
      <div>
        {children}
      </div>

      <div>
        <Image className="rounded-sm" src={img} alt="Imagen paleteria" height={500} width={400} />
      </div>
    </div>
  )
}
