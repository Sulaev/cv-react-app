import "./styles.css"

export const Layout = (props, isMobile) => {
  const { children } = props

  if (isMobile) {
    return <div className="MobileLayout">{children}</div>
  }

  return <div className="Layout">{children}</div>
}
