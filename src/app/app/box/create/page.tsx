import { CreateBoxForm } from "@/app/app/box/_components/create-box-form"
import { fetchEntities } from "@/actions/entity"

const CreateBoxPage = async () => {
  const entities = await fetchEntities()

  return (
    <main className="mx-auto my-10 min-h-[calc(100vh-200px)] rounded-md bg-white p-4 shadow-md ">
      <div className="container space-y-4 px-0">
        <h1 className="border-b border-zinc-300 py-4 text-3xl font-semibold">
          Criar nova caixa
        </h1>
        <CreateBoxForm entities={entities} />
      </div>
    </main>
  )
}

export default CreateBoxPage
