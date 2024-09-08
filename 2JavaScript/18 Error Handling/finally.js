function jsonStringToJson(str){
    try{
        return JSON.parse(str);
    } catch(error){
      console.log("Error Occured");
      console.log(error.message);
      return {};
    } finally{
      console.log('Finally');
      return {b:1};
    }
 }

 let newObj2= jsonStringToJson("{'A':1}");
 console.log('obj2',newObj2);
    