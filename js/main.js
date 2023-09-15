const btn = document.querySelector(".btn");
const wrapper = document.querySelector('.wrapper');


wrapper.addEventListener("click",(e)=>{
    if(!e.target.classList.contains('wrapper')){
        if(e.target.style.backgroundColor == "green"){
            e.target.style.backgroundColor = "red"
        }else{
            e.target.style.backgroundColor = "green"
        }
};
})