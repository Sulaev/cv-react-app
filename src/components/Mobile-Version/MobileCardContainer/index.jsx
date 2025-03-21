import { CARD_CONFIG } from "@/config/card"
import { MobileCard } from "@/components/Mobile-Version/MobileCard"
import { useRef } from "react"
import "./styles.css"

export const MobileCardContainer = () => {
  const containerRef = useRef(null)

  return (
    <>
      <div className="MobileCardContainer" ref={containerRef}>
        {CARD_CONFIG.map((card, index) => (
          <MobileCard key={`${card.label}-${index}`} label={card.label} tags={card.tags} />
        ))}
      </div>
    </>
  )
}
