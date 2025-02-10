import { CARD_CONFIG } from "@/config/card"
import { Card } from "@/components/Card"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import classNames from "classnames"
import "./styles.css"

export const CardContainer = () => {
  const containerRef = useRef(null)
  const [isPortalMounted, setIsPortalMounted] = useState(false)
  const [isPortalVisible, setIsPortalVisible] = useState(false)
  const [containerPositionAndSize, setContainerPositionAndSize] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const updatePosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()

        setContainerPositionAndSize({
          x: rect.left + window.scrollX,
          y: rect.top + window.scrollY,
          width: rect.width,
          height: rect.height,
        })
      }
    }

    window.addEventListener("scroll", updatePosition)
    window.addEventListener("resize", updatePosition)
    updatePosition()

    return () => {
      window.removeEventListener("scroll", updatePosition)
      window.removeEventListener("resize", updatePosition)
    }
  }, [])

  const handleMouseEnter = () => {
    setIsPortalMounted(true)
    setIsPortalVisible(true)
  }

  const handleMouseLeave = () => {
    setIsPortalVisible(false)
    setTimeout(() => {
      setIsPortalMounted(false)
    }, 1000)
  }

  return (
    <>
      <div className="CardContainer" ref={containerRef} onMouseEnter={handleMouseEnter}>
        {CARD_CONFIG.map((card, index) => (
          <Card key={`${card.label}-${index}`} label={card.label} tags={card.tags} />
        ))}
      </div>
      {isPortalMounted &&
        createPortal(
          <div className={classNames("Portal", { Portal__visible: isPortalVisible })}>
            <div
              className="CardContainer__portal"
              style={{
                position: "absolute",
                top: containerPositionAndSize.y,
                left: containerPositionAndSize.x,
                width: containerPositionAndSize.width,
                height: containerPositionAndSize.height,
              }}
              onMouseLeave={handleMouseLeave}
            >
              {CARD_CONFIG.map((card, index) => (
                <Card key={`${card.label}-${index}`} label={card.label} tags={card.tags} />
              ))}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
