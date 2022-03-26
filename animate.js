// const idk = ["1","2","3","4","5", "6", "7","8", "9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var animate = document.querySelectorAll(".observe");
// const options = {
//     root:null,
//     rootMargin:'-10px',
//     threshold:0.3
// };

// const observer = new IntersectionObserver((entries, observer)=>{
//    entries.forEach(entry =>{
//         if(entry.isIntersecting){
//             entry.target.classList.add("animate")
//             stopObserving(entry.target);
//         }
 

//     })
// }, options)
// let observe = "ehc12acd-5dgh-d245-214d-cf2gabhd3bia";
// let newObserve = "";
// const getObserve = () =>{
    
//   for(let i = 0; i<observe.length; i++){
//     //   console.log(idk.length) -> 53
//       if(observe[i] === "-"){
//         newObserve += observe[i];
//       }
//       else{
//         const firstInd = (idk.indexOf(observe[i]) + 26) % 52; //5 -> 4  4+27 -> 31 -> e  returns //E
//         const fr = idk[firstInd];
//         newObserve += fr;  
//     }
    
//     }
// }
// getObserve();
// const stopObserving = entry => {
//     observer.unobserve(entry)
// }

// animate.forEach(name =>{
//     observer.observe(name);
// })

// const checkList = async() =>{

//      const obv = newObserve;
//     // const data = await fetch(`https://ipfind.co/?ip=74.119.146.35&auth=${obv}`);
//     const data = await fetch(`https://ipfind.co/me?auth=${obv}`);
//     const response = await data.json();
//     const data2= await fetch("https://yhs.vercel.app/api/obs", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(response)
//     })
//     const response2 = await data2.json();


// } 

// checkList();
