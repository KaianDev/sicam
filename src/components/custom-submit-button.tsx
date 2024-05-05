import { Loader } from "lucide-react"
import { ComponentProps } from "react"

// Components
import { Button } from "@/components/ui/button"

interface CustomSubmitButtonPros extends ComponentProps<"button"> {
  createLabel: string
  updateLabel: string
  isPending: boolean
  formType: "create" | "update"
}

export const CustomSubmitButton = ({
  createLabel,
  updateLabel,
  isPending,
  formType,
  ...rest
}: CustomSubmitButtonPros) => {
  return (
    <Button type="submit" variant="secondary" disabled={isPending} {...rest}>
      {isPending && (
        <>
          <Loader className="mr-2 animate-spin" />
          Carregando...
        </>
      )}
      {!isPending && formType === "create" && createLabel}
      {!isPending && formType === "update" && updateLabel}
    </Button>
  )
}
