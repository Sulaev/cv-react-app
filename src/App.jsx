import { Main } from "./Pages/Main"
// import "./styles.css"
import "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation()

  return (
    <div style={{height: "100%"}}>
      {/* {t('test')} */}
      <Main />
    </div>

  )
}

export default App
