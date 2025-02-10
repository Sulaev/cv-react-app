import "./styles.css"
import { Tag } from "@/components/Tag"
// @ts-ignore
import ArrowIcon from "@/assets/icons/arrow.svg?react"
import { useState } from "react"

export const Card = ({ label, tags, isPortal = false }) => {
  const [isTaglistMounted, setIsTaglistMounted] = useState(false)

  const handleMouseEnter = () => {
    if (!isPortal) {
      return
    }
    setIsTaglistMounted(true)
  }

  const handleMouseLeave = () => {
    if (!isPortal) {
      return
    }
    setIsTaglistMounted(false)
  }

  return (
    <>
      {/* <div className="Card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> */}
      <div className="Card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="Card__content">
          <span className="Text__medium">{label}</span>
          <ArrowIcon />
        </div>
        {isTaglistMounted && (
          <div
            className="Tag__list"
            style={{
              position: "absolute",
              zIndex: 1000,
              left: 0,
            }}
          >
            {tags.map((tag, index) => (
              <Tag key={`${tag.label}-${index}`} label={tag.label} url={tag.url} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
