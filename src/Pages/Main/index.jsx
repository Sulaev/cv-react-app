import { Card } from "@/components/Card"
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
      {/* <div className="CardContainer">
        {CARD_CONFIG.map((card) => (
          <Card label={card.label} tags={card.tags} />
        ))}
      </div> */}
    </Layout>
  )
}
