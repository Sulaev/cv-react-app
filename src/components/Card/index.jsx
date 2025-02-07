import "./styles.css"
import ArrowIcon from "@/assets/icons/arrow.svg?react";

export const Card = ({ label, tags }) => {
  return <div className="Card">
    <div className="Card__content">
      <span className="Text__medium">{label}</span>
      <ArrowIcon />
    </div>
  </div>
}
