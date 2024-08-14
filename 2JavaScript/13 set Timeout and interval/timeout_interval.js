(()=>{
    let counter =0;
  let increment=(head) =>console.log(head,++counter);

  console.log('Start');
  increment('first');

  let timerId=setTimeout(()=>increment('timer'),5000);
  console.log('timerId:',timerId);
  setTimeout(()=>{clearTimeout(timerId)},1000);

  let intervalId=setInterval(()=>increment('interval'),10000);
  setTimeout(()=>{clearInterval(timerId)},10000);

  console.log('End');
})();

