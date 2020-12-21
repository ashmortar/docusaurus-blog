/* eslint-disable no-alert */
import React from 'react';

export const MDXButton = () => {
  const [clicked, setClicked] = React.useState(false);
  const a11yClick = (e) => {
    if (e.type === 'click') {
      setClicked((c) => !c);
      alert('You clicked the MDX Button');
    } else if (e.type === 'keypress') {
      const code = e?.charCode || e?.keyCode;
      if (code === 13 || code === 32) {
        setClicked((c) => !c);
        alert('You key pressed the MDX Button');
      }
    }
  };
  const text = React.useMemo(
    () => (clicked ? '🎊 🤩 You Clicked Me 🤩 🎊' : '🙄 Click Me 🙄'),
    [clicked]
  );

  return (
    <div
      tabIndex={0}
      style={{
        padding: '1rem',
        background: '#81f060',
        color: 'white',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5em',
      }}
      role="button"
      onClick={a11yClick}
      onKeyPress={a11yClick}
    >
      {text}
    </div>
  );
};

export default MDXButton;
