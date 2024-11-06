const List = ({items}) => {
 return <ul className="list-disc ml-5 text-gray-800s">
    {items.map(item => <li className="list-inside">{item}</li>)}
 </ul>
}
export default List;