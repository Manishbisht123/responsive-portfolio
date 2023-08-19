function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  //typed js

  var typed = new Typed('#element', {
    strings: ['Web Developer', 'Web Designer', 'Ui/Ux Designer', 'Graphic Designer'],
    typeSpeed: 50,
    loop: true
  });


  // preloader //

setTimeout(function(){
  $('.loader-bg').fadeToggle();
},3000);
