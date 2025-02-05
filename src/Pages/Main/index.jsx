import { Layout } from "../../components/Layout"
import { Card } from "../../components/Card"
import { Banner } from "../../components/Banner"
import "./styles.css"

export const Main = () => {
  return (
    <Layout>
      <div className="ContentContainer">
        <Banner />
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
