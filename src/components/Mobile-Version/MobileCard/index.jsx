import "./styles.css"
import { Tag } from "@/components/Tag"
// @ts-ignore
import ArrowIcon from "@/assets/icons/arrow.svg?react"

export const MobileCard = ({ label, tags, isPortal = false }) => {
  return (
    <>
      <div className="Cards">
        <div className="Card__content">
          <span className="Text__medium">{label}</span>
          <ArrowIcon className="MobileArrowIcon" />
        </div>
      </div>
      <div className="Mobile__Tag__list">
        {tags.map((tag, index) => (
          <Tag key={`${tag.label}-${index}`} label={tag.label} url={tag.url} />
        ))}
      </div>
    </>
  )
}
