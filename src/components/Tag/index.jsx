import "./styles.css"

export const Tag = ({ label, url }) => {
    return <button key={label} className="Text__regular Tag">{label}</button>
}