const getLink = (text) => {
  if (text.includes('info')) {
    return (
      <a href={`mailto:${text}`} key={text}>
        {text}
      </a>
    );
  } else if (text.includes('+')) {
    const noSpecialCharacters = text.replace(/[^a-zA-Z0-9 ]/g, '');
    const noSpaces = noSpecialCharacters.replace(/\s/g, '');
    return (
      <a href={`https://wa.me/${noSpaces}`} key={text} target='__blank'>
        {text}
      </a>
    );
  } else if (text[0] === '@') {
    const noSpecialCharacters = text.replace(/[^a-zA-Z0-9 ]/g, '');
    return (
      <a
        href={`https://www.instagram.com/${noSpecialCharacters}`}
        key={text}
        target='__blank'
      >
        {text}
      </a>
    );
  } else {
    return <p key={text}>{text}</p>;
  }
};

export { getLink };
