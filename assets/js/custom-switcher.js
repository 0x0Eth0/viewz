"use strict";
let mainContent;
(function () 
{   
    document.addEventListener('DOMContentLoaded', function () {
    let html = document.querySelector('html');    
    mainContent = document.querySelector('.main-content');
  /*   console.log(mainContent); */

  
    if (html.getAttribute('data-hor-style') === "hor-click") 
    {
        horizontalClickFn();
    }
  
})



})();







function horizontalClickFn() {

    

 /*    document.addEventListener('DOMContentLoaded', function () {
        mainContent = document.querySelector('.main-content'); */
       /*  console.log(mainContent) */

        $('#switchbtn-horizontal').prop('checked', true);
        let html = document.querySelector('html');
        ActiveSubmenu();
        html.setAttribute('data-layout', 'horizontal');
        html.setAttribute('data-hor-style', 'hor-click');
        html.removeAttribute('data-vertical-style');
        if (window.innerWidth >= 992) {
            let li = document.querySelectorAll('.side-menu li')
            li.forEach((e, i) => {
                e.classList.remove('is-expanded')
            })
            var animationSpeed = 300;
            // first level
            var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
            var ul = parent.find('ul:visible').slideUp(animationSpeed);
            ul.removeClass('open');
            var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
            var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
            ul1.removeClass('open');
        }
        document.querySelector(".main-content").classList.add("horizontal-content");
        let mainContainer = document.querySelectorAll(".main-container")
        mainContainer.forEach(e => e.classList.add("container"))
        mainContainer.forEach(e => e.classList.remove("container-fluid"))
        document.querySelector(".main-header").classList.add("hor-header");
        document.querySelector(".app-sidebar").classList.add("horizontal-main");
        document.querySelector(".main-sidemenu").classList.add("container");

        document.querySelector(".main-content").classList.remove("app-content");
        document.querySelector(".main-header").classList.remove("side-header");
        document.body.classList.remove('sidebar-mini');
        document.body.classList.remove('sidenav-toggled');
        setTimeout(() => { checkHoriMenu(); }, 300)
        responsive();  
    
    mainContent.addEventListener('click', slideClick);

  /*   }); */



}










