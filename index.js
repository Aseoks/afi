console.log('hello world');


const buttonThree = document.querySelector('.button-three');
const navMenu = document.getElementById('navigation-menu');


buttonThree.addEventListener('click', ()=>{
  
const isOpened = buttonThree.getAttribute('aria-expanded');
    

    if (isOpened === 'false') {
        buttonThree.setAttribute('aria-expanded', 'true')
        buttonThree.style.setProperty('--button-color', 'black');
        navMenu.style.display = 'block';        
    } else{
        buttonThree.setAttribute('aria-expanded', 'false')
        buttonThree.style.setProperty('--button-color', 'white');
        navMenu.style.display = 'none';        
    }
})


$(".list-item").mouseover(function(){
    $("#selected-item").text($(this).text());
});

$(".scroll-down").click(function(){
    $(window).scrollTop($("body").height());
});



    