type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  // MB to change all the styles using theme UI
  return <div className="container mx-auto px-5">{children}</div>
}

export default Container