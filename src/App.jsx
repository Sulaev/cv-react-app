import { Main } from "./Pages/Main"
// import "./styles.css"
import "./i18n"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

function App() {
  const { t } = useTranslation()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (isMobile) {
    return (
      <div>
        <Main />
      </div>
    )
  }
  return (
    <div style={{ height: "100%" }}>
      <Main />
    </div>
  )
}

export default App
