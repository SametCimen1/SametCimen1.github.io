var animate = document.querySelectorAll(".observe");
const options = {
    root:null,
    rootMargin:'-10px',
    threshold:0.3
};

const observer = new IntersectionObserver((entries, observer)=>{
   entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("animate")
            stopObserving(entry.target);
        }
 

    })
}, options)

const stopObserving = entry => {
    observer.unobserve(entry)
}

animate.forEach(name =>{
    observer.observe(name);
})

const checkList = async() =>{
    const data = await fetch("http://www.geoplugin.net/json.gp")
    const response = await data.json();
    console.log(response)
} 

console.log("running checkList")
checkList();
console.log("finished")