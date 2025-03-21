import { Layout } from "@/components/Layout"
import { Banner } from "@/components/Banner"
import { MobileBanner } from "@/components/Mobile-Version/MobileBanner"
import "./styles.css"
import { CardContainer } from "@/components/CardContainer"
import { MobileCardContainer } from "@/components/Mobile-Version/MobileCardContainer"
import { useState, useEffect } from "react"

export const Main = () => {
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
      <Layout isMobile={isMobile}>
        <div className="MobileContentContainer">
          <MobileBanner />
        </div>
        <MobileCardContainer />
      </Layout>
    )
  }
  return (
    <Layout>
      <div className="ContentContainer">
        <Banner />
      </div>
      <CardContainer />
    </Layout>
  )
}
