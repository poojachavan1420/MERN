const List = ({list}) => {
  return(
    <>
   

<ol className="list-decimal">
    {list.map(item => <li>{item}</li>)}
</ol>

{/* <ol className="list-decimal">
  {[<li>Isha</li>,<li>Advika</li>,<li>Dnyanu</li>,,<li>Riya</li>,    <li>Shouravi</li>,<li>Aayat</li>]}
    </ol> */}
    </>
  );
};
export default List;