import { Layout } from "@/components/Layout"
import { Banner } from "@/components/Banner"
import { MobileBanner } from "@/components/MobileBanner"
import "./styles.css"
import { CardContainer } from "@/components/CardContainer"
import React, { useState, useEffect } from "react"

export const Main = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  console.log(window.innerWidth)
  console.log(isMobile)

  if (isMobile) {
    return (
      <Layout>
        <div className="ContentContainer">
          <MobileBanner />
        </div>
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
