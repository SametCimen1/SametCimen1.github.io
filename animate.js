var animate = document.querySelectorAll(".observe");
const options = {
    root:null,
    rootMargin:'-10px',
    threshold:0.3
};

const observer = new IntersectionObserver((entries, observer)=>{
   entries.forEach(entry =>{
        if(entry.isIntersecting){
            console.log(entry.target)
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