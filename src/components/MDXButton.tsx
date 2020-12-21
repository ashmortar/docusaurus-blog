import React from 'react'

export const MDXButton = () => {
  const [clicked, setClicked] = React.useState(false);
  const handleClicked = () => {
    setClicked((c) => !c);
    alert('You clicked an MDX Button')
  }
  const text = React.useMemo(() => clicked 
  ? '🎊 🤩 You Clicked Me 🤩 🎊'
  : '🙄 Click Me 🙄', [clicked])

  return (
    <div 
      style={{
        padding: "1rem", 
        background: "#81f060", 
        color: 'white', 
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5em',
      }} 
      role="button" 
      onClick={handleClicked}
    >
      {text}
    </div>
  )
}

export default MDXButton;