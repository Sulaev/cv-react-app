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
  const [isPortalVisible, setIsPortalVisible] = useState(false)
  const [cardPositionAndSize, setCardPositionAndSize] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()

      setCardPositionAndSize({
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height,
      })
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
    setTimeout(() => {
      setIsPortalVisible(true)
    }, 0)
  }

  const handleMouseMove = (event) => {
    if (
      portalCardRef.current.contains(event.target) ||
      portalTagListRef.current.contains(event.target)
    ) {
      setIsHovered(true)
      setIsPortalVisible(true)
      return
    }
    setIsPortalVisible(false)
    setTimeout(() => {
      setIsHovered(false)
    }, 300)
  }

  return (
    <>
      <div className="Card" ref={cardRef} onMouseEnter={handleMouseEnter}>
        <div className="Card__content">
          <span className="Text__medium">{label}</span>
          <ArrowIcon />
        </div>
      </div>
      {isHovered &&
        createPortal(
          <div
            className="Portal"
            onMouseMove={handleMouseMove}
            style={{
              opacity: isPortalVisible ? 1 : 0,
            }}
          >
            <div
              className="Card"
              ref={portalCardRef}
              onMouseEnter={handleMouseEnter}
              style={{
                position: "absolute",
                top: cardPositionAndSize.y,
                left: cardPositionAndSize.x,
                width: cardPositionAndSize.width,
                height: cardPositionAndSize.height,
              }}
            >
              <div className="Card__content">
                <span className="Text__medium">{label}</span>
                <ArrowIcon />
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
