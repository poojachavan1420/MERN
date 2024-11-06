const Socialmedia = ({icon,title,url}) => {
  return <a href={url}>{icon}{title}</a>;
}

export default Socialmedia;