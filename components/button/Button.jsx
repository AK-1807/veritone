const Button = ({buttonText, url, buttonClass}) => {
  return <a href={url} className={`button ${buttonClass}`}>{buttonText}</a>
}

export default Button;
