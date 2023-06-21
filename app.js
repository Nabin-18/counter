const endDate = " Aug 9 2023 23:59:59"
document.getElementById("end-Date").innerText = endDate;
const inputs=document.querySelectorAll("input")


const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  console.log(end)
  console.log(now)
 const diff=(end-now)/1000;
 console.log(diff)
 inputs[0].value=(Math.floor(diff/3600/24))
 inputs[1].value=(Math.floor((diff/3600)%24))
 inputs[2].value=(Math.floor((diff/60)%60))
 inputs[3].value=(Math.floor((diff)%60))


 


 
 //1 day=24hr,1hr=60min and 1 min=60sec
};
clock();

setInterval(()=>{
clock()
},1000)
