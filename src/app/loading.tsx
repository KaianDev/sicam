import { LoaderCircleIcon } from "lucide-react"

const Loading = () => {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-green-700">
      <div className="flex flex-col items-center justify-center gap-4">
        <LoaderCircleIcon className="size-10 animate-spin text-white" />
        <p className="text-4xl text-white">Carregando...</p>
      </div>
    </div>
  )
}

export default Loading
