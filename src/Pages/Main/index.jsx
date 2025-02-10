import { Layout } from "@/components/Layout"
import { Banner } from "@/components/Banner"
import "./styles.css"
import { CardContainer } from "@/components/CardContainer"

export const Main = () => {
  return (
    <Layout>
      <div className="ContentContainer">
        <Banner />
      </div>
      <CardContainer />
    </Layout>
  )
}
