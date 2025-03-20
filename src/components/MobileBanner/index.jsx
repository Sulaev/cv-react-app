import "./styles.css"
import { Avatar } from "@/components/Avatar"

export const MobileBanner = () => {
  return (
    <div className="MobileBanner">
      <div className="TopConteiner">
        <h1 className="Text__Mobile__header">egor sulaev</h1>
        <h1 className="Text__Mobile__header">
          {"<"} your success <br /> is my priority {">"}
        </h1>
      </div>
      <div className="ContentContainer">
        <Avatar />
      </div>
      <div className="BottomContainer">
        <h1 className="Text__Mobile__header">frontend developer</h1>
      </div>
    </div>
  )
}
