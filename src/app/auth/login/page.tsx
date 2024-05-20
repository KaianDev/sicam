// Components
import { AuthCard } from "../_components/auth-card"
import { AuthContainer } from "../_components/auth-container"
import { LoginForm } from "../_components/login-form"

const LoginPage = () => {
  return (
    <AuthContainer>
      <AuthCard
        title="Faça seu Login"
        description="Use suas credenciais e faça o login"
      >
        <LoginForm />
      </AuthCard>
    </AuthContainer>
  )
}

export default LoginPage
