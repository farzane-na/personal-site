const switchElement = document.querySelector('.dark-mode-switch');
const body=document.querySelector("body");
const menuItem=document.querySelectorAll(".item")
switchElement.addEventListener('click', function () {
    document.body.classList.toggle("dark");
    if(document.body.className.includes("dark")){
        localStorage.setItem("theme","dark")
        menuItem.forEach(function(item){
            item.style.color="#B19470";
        })
    }else{
        localStorage.setItem("theme","light")
        menuItem.forEach(function(item){
            item.style.color="#000";
        })
    }
})
window.addEventListener("load",function(){
    let localStoragetheme=localStorage.getItem("theme");
    if(localStoragetheme==="dark"){
        document.body.classList.add("dark");
    }
})

const scrollProgress = document.getElementById('scroll-progress');
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});
