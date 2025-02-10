import "./styles.css"
import { Tag } from "@/components/Tag"
// @ts-ignore
import ArrowIcon from "@/assets/icons/arrow.svg?react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

export const Card = ({ label, tags }) => {
  const cardRef = useRef(null)
  const portalCardRef = useRef(null)
  const portalTagListRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [arrowIsWisible, setArrowIsWisible] = useState(true)

  const [cardPositionAndSize, setCardPositionAndSize] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const updatePosition = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()

        setCardPositionAndSize({
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
    setIsHovered(true)
    setArrowIsWisible(false)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setArrowIsWisible(true)
  }

  return (
    <>
      <div className="Card" ref={cardRef} onMouseEnter={handleMouseEnter}>
        <div className="Card__content">
          <span className="Text__medium">{label}</span>
          <ArrowIcon className={`${arrowIsWisible ? "visible ArrowIcon" : "hidden"}`} />
        </div>
      </div>
      {createPortal(
        <div className={`Portal ${isHovered ? "visible" : ""}`} onMouseEnter={handleMouseEnter}>
          <div
            className="Card"
            ref={portalCardRef}
            style={{
              position: "absolute",
              top: cardPositionAndSize.y,
              left: cardPositionAndSize.x,
              width: cardPositionAndSize.width,
              height: cardPositionAndSize.height,
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="Card__content">
              <span className="Text__medium">{label}</span>
              <ArrowIcon className="ArrowIcon" />
            </div>
            <div
              ref={portalTagListRef}
              className="Tag__list"
              style={{
                position: "absolute",
                bottom: cardPositionAndSize.height,
                zIndex: 1000,
                left: 0,
              }}
            >
              {tags.map((tag, index) => (
                <Tag key={`${tag.label}-${index}`} label={tag.label} url={tag.url} />
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
