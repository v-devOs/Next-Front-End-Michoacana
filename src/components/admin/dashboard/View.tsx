
interface Props {
  title: string
}

export const AdminView = ({ title }: Props) => {
  return (
    <div>
      <header>
        <h1 className="text-5xl mb-8">{title}</h1>
      </header>
    </div>
  )
}
