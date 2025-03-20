import "./styles.css"
import { Avatar } from "@/components/Avatar"

export const MobileBanner = () => {
  return (
    <div className="MobileBanner">
      <div className="MobileTopConteiner">
        <h1 className="Text__Mobile__header">egor sulaev</h1>
        <h1 className="Text__Mobile__header">
          {"<"} your success <br /> is my priority {">"}
        </h1>
      </div>
      <div className="MobileContentContainer">
        <Avatar />
        <h1 className="Text__Mobile__header">frontend developer</h1>
        <p className="MobileHistoryBlock Text__Mobile__medium">
          during the past year, I have gained experience in various companies, where I have
          developed and maintained frontend interfaces for web applications. My expertise includes
          working with HTML, CSS, JavaScript, React.js, TypeScript, and Git, as well as
          participating in projects aimed at improving usability and performance.
        </p>
      </div>
    </div>
  )
}
