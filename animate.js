

const observer = new IntersectionObserver((entries, observer)=>{
   entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("animate")
            stopObserving(entry.target);
        }
 

    })
}, options)
let observe = "ehc12acd-5dgh-d245-214d-cf2gabhd3bia";
let newObserve = "";
const getObserve = () =>{
    
  for(let i = 0; i<observe.length; i++){
    //   console.log(idk.length) -> 53
      if(observe[i] === "-"){
        newObserve += observe[i];
      }
      else{
        const firstInd = (idk.indexOf(observe[i]) + 26) % 52; //5 -> 4  4+27 -> 31 -> e  returns //E
        const fr = idk[firstInd];
        newObserve += fr;  
    }
    
    }
}
getObserve();


const checkList = async() =>{
    const data2= await fetch("https://alanfbla.herokuapp.com/ip", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            
        },
    })
} 

checkList();
