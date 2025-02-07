import "./styles.css"
import { Avatar } from "@/components/Avatar"

export const Banner = () => {
    return <div className="Banner">
        <div className="TopConteiner">
            <h1 className="Text__header">egor sulaev</h1>
            <h1 className="Text__header">{'<'} your success <br /> is my priority {'>'}</h1>
        </div>
        <div className="ContentContainer">
            <p className="HistoryBlock Text__regular">during the past year, I have gained experience in various companies, where I have developed and maintained frontend interfaces for web applications. My expertise includes working with HTML, CSS, JavaScript, React.js, TypeScript, and Git, as well as participating in projects aimed at improving usability and performance.</p>
            <Avatar />
        </div>
        <div className="BottomContainer">
            <h1 className="Text__header">frontend developer</h1>
        </div>
    </div>
}