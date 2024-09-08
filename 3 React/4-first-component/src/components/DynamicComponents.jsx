const DynamicComponent =() => {
   const studentName = 'shyam';
   const marks =[23,27,89,67,86];
   
   const calPercentage = () => {
      let sum=0;
      for(let i=0;i<marks.length;i++){
       sum+= marks[i];

      }
      return sum/marks.length;
   }
   return <p>{studentName} scored {calPercentage()}% marks in exam.</p>
}

export default DynamicComponent;