const StudentList= () => {

    const students =['pooja','Advika','Riya','priyanshi','Rudrakshi','isha','arya']

    return <ol>
        {
            students.map((student,index) => <li key={student}>{student}</li>)
            
        }
    </ol>;

}

export default  StudentList;