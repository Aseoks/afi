console.log('hello world');

$("#menu-show").click(function(){
    $("#navigation-menu").fadeToggle('slow');   

});

$(".list-item").mouseover(function(){
    $("#selected-item").text($(this).text());
});

$(".scroll-down").click(function(){
    $(window).scrollTop($("body").height());
});

// $(window).scroll(function(){
//     $(window).scrollTop(0);
// });
    

    