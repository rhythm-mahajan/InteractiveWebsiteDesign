const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');

//Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

//Active Menu Full Screen
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const contactMenu = document.querySelector('#Contact');
    const aboutMenu = document.querySelector('#AboutUs');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos >= 0 &&scrollPos < 600) {
      contactMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    }   
    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
    }
};
  
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close Mobile Menu after click
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
};
  
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

function Lays(){
    alert("Lays are Yum!")
  };
  
  function Doritos(){
    alert("Doritos are Yum!")
  };
  
  function Cheetos(){
    alert("Cheetos are Yum!")
  };
  
  function Pringles(){
    alert("Pringles are Yum!")
  };