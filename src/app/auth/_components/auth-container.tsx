export const AuthContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-zinc-200 py-10">
      {children}
    </div>
  )
}
