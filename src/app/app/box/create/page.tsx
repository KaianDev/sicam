import { BoxForm } from "@/app/app/box/_components/box-form"

const CreateBoxPage = () => {
  return (
    <main className="mx-auto my-10 min-h-[calc(100vh-200px)] space-y-4 rounded-md bg-white p-4 shadow-md ">
      <h1 className="border-b border-zinc-300 py-4 text-3xl font-semibold">
        Criar nova caixa
      </h1>
      <BoxForm />
    </main>
  )
}

export default CreateBoxPage
