const List = ({items}) => {
 return <ul className="list-disc ml-5 text-gray-800s">
    {items.map(item => <li key={items}>{item}</li>)}
 </ul>
}
export default List;