import React from "react"

interface Props {
  className?: string
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}: React.PropsWithChildren<Props>) => {
  return <div className={`mx-auto w-full max-w-7xl px-4 ${className ? className : ""}`}>{children}</div>
}

export default Container
