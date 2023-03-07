// scrollnav
window.addEventListener('scroll',function(){
    let navbar= document.querySelector('nav');
    if(window.pageYOffset>30)
    {
      navbar.classList.add('scroll-nav');
    }
    else
    {
      navbar.classList.remove('scroll-nav');
    }
  });
 
  
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".mynav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 
//   testimonial

var swiper = new Swiper(".tetsimonial-slider", {
    slidesPerView: 1,
    speed:2000,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });