import "./styles.css"
import { Tag } from "@/components/Tag"
// @ts-ignore
import ArrowIcon from "@/assets/icons/arrow.svg?react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

export const Card = ({ label, tags }) => {
  const cardRef = useRef(null)
  // const portalCardRef = useRef(null)
  // const portalTagListRef = useRef(null)
  // const [isPortalMounted, setIsPortalMounted] = useState(false)
  // const [isPortalVisible, setIsPortalVisible] = useState(false)

  // const [cardPositionAndSize, setCardPositionAndSize] = useState({
  //   x: 0,
  //   y: 0,
  //   width: 0,
  //   height: 0,
  // })

  // const intervalId = useRef(null)
  // const timeoutId = useRef(null)

  // useEffect(() => {
  //   const updatePosition = () => {
  //     if (cardRef.current) {
  //       const rect = cardRef.current.getBoundingClientRect()

  //       setCardPositionAndSize({
  //         x: rect.left + window.scrollX,
  //         y: rect.top + window.scrollY,
  //         width: rect.width,
  //         height: rect.height,
  //       })
  //     }
  //   }

  //   window.addEventListener("scroll", updatePosition)
  //   window.addEventListener("resize", updatePosition)
  //   updatePosition()

  //   return () => {
  //     window.removeEventListener("scroll", updatePosition)
  //     window.removeEventListener("resize", updatePosition)
  //   }
  // }, [])

  // const handleMouseEnter = () => {
  //   console.log("mouse enter")
  //   // console.log("intervalId", intervalId.current)
  //   clearTimeout(intervalId.current)
  //   // setIsPortalMounted(true)
  //   setIsPortalVisible(true)

  //   clearTimeout(timeoutId.current)
  //   // console.log("timeoutId", timeoutId.current)
  // }

  // const handleMouseLeave = () => {
  //   // setIsPortalVisible(false)
  //   // intervalId.current = setTimeout(() => {
  //   //   setIsPortalMounted(false)
  //   // }, 3000)

  //   timeoutId.current = setTimeout(() => {
  //     // console.log("its been 1 second")
  //   }, 1000)
  // }

  return (
    <>
      <div className="Card" ref={cardRef}>
        <div className="Card__content">
          <span className="Text__medium">{label}</span>
          <ArrowIcon />
          {/* <div
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
          </div> */}
        </div>
      </div>
    </>
  )
}
