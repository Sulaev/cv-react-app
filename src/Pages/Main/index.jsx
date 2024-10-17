import { Layout } from "../../components/Layout"
import { Card } from "../../components/Card"
import "./styles.css"

export const Main = () => {
  return (
    <Layout>
      <div className="ContentContainer">
        <Card />
      </div>
      <div className="CardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  )
}
