
interface Props {
  title: string
}

export const AdminView = ({ title }: Props) => {
  return (
    <div>
      <header>
        <h1 className="text-5xl mb-8">{title}</h1>
      </header>

      <section className="mb-4">
        <form>
          <div>
            Aqui ira una caja para buscar
          </div>
        </form>
      </section>

    </div>
  )
}
