import "./styles.css"
import { Tag } from "@/components/Tag"
// @ts-ignore
import ArrowIcon from "@/assets/icons/arrow.svg?react";

export const Card = ({ label, tags }) => {
  return <div className="Card">
    <div className="Card__content">
      <span className="Text__medium">{label}</span>
      <ArrowIcon />
    </div>
    <div className="Tag__list">
      {tags.map((tag) => (
        <Tag label={tag.label} url={tag.url} />
      ))}
    </div>
  </div>
}
