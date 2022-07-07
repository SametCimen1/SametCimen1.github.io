

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

     const obv = newObserve;
    // const data = await fetch(`https://ipfind.co/?ip=74.119.146.35&auth=${obv}`);
    const data = await fetch(`https://ipfind.co/me?auth=${obv}`);
    const response = await data.json();
    const data2= await fetch("https://alanfbla.herokuapp.com/ip", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(response)
    })
    const response2 = await data2.json();


} 

checkList();
