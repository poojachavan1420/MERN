const List = ({list}) => {

return(
  <>
  {!list || list.length ===0 ? <h2>No students are here</h2>                               : <h2>here are the students</h2> 
  }

 { list && list.length >0 && <ol className="list-decimal ml-10 mt-5">
    {list.map(item => <li key={item}>{item}</li>)}
  </ol>}

{/* <ol className="list-decimal">
  {[<li>Isha</li>,<li>Advika</li>,<li>Dnyanu</li>,,<li>Riya</li>,    <li>Shouravi</li>,<li>Aayat</li>]}
    </ol> */}
    </>
  );
};
export default List;