import { AuthCard } from "../_components/auth-card"
import { AuthContainer } from "../_components/auth-container"
import { SendMailForm } from "../_components/send-mail-form"

const SendMailPage = () => {
  return (
    <AuthContainer>
      <AuthCard title="Enviar e-mail">
        <SendMailForm />
      </AuthCard>
    </AuthContainer>
  )
}

export default SendMailPage
