var animate = document.querySelectorAll(".animate");
const options = {
    root:null,
    threshold:0.5
};

const observer = new IntersectionObserver((entries, observer)=>{
   entries.forEach(entry =>{
        if(entry.isIntersecting){
           
            entry.target.classList.add("animate")
        }
        else{
            // normalButtons.forEach(name =>{
            //     name.style.display = "block"
            // })
            // shopButton.style.display = "none";
            entry.target.classList.remove("animate")
        }

    })
}, options)



animate.forEach(name =>{
    observer.observe(name);
})