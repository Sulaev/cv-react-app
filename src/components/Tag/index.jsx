import "./styles.css"

export const Tag = ({ label, url }) => {
  if (url) {
    const handleButtonClick = () => {
      window.open(url, "_blank")
    }
    return (
      <button key={label} className="Text__regular Tag" onClick={handleButtonClick}>
        {label}
      </button>
    )
  }

  return (
    <button key={label} className="Text__regular Tag">
      {label}
    </button>
  )
}
