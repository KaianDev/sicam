export const AuthContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-200">
      {children}
    </div>
  )
}
