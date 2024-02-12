const switchElement = document.querySelector('.dark-mode-switch');
const body=document.querySelector("body");
const menuItem=document.querySelectorAll(".item")
const slider=document.querySelectorAll(".swiper-slide")
const scrollProgress = document.getElementById('scroll-progress');
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
switchElement.addEventListener('click', function () {
    document.body.classList.toggle("dark");
    if(document.body.className.includes("dark")){
        localStorage.setItem("theme","dark")
        menuItem.forEach(function(item){
            item.style.color="#B19470";
        })
        slider.forEach(function(slide){
            slide.style.backgroundColor="#362222"
        })
        scrollProgress.style.backgroundColor="#D1EDA3";
    }else{
        localStorage.setItem("theme","light")
        menuItem.forEach(function(item){
            item.style.color="#000";
        })
        slider.forEach(function(slide){
            slide.style.backgroundColor="#fff"
        })
        scrollProgress.style.backgroundColor="#2d4624";
    }
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

window.addEventListener("load",function(){
    let localStoragetheme=localStorage.getItem("theme");
    if(localStoragetheme==="dark"){
        document.body.classList.add("dark");
    }
})



window.addEventListener('scroll', () => {
  const scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});
