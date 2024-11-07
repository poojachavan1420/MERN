const Socialmedia = ({icon,title,url}) => {
  return <a className="flex mb-2 text-blue-600 hover:text-blue-500" href={url}>
    {icon}
    <span  className="ml-2">{title}</span></a>;
}

export default Socialmedia;