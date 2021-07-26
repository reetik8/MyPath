// MyPath
// Reetik Chandra
// USS 2021

function changeColor() {
    if document.getElementById('Favorites').
    $('.bg-dark').each(function(){ 
      $(".bg-dark").toggleClass(' bg-dark bg-alt1');
    })
    $('.bg-light').each(function(){
         $(".bg-light").toggleClass(' bg-light bg-alt2');
    })
}

function resize() {
    if ( $(window).width() < 400) {     
    $("#change").toggleClass('grid-3 grid-2');
    }
    else {
    $("#change").toggleClass('grid-2 grid-3');
    }
}

function reNav() {
    if ( $(window).width() < 992) {     
    $("#NavChange").removeClass('fixed-top');
    }
    else {
    $("#NavChange").addClass('fixed-top');
    }
}

$('.hamburger').on('click', function () {
  $('.menu').addClass('open');
});

$( '.menu a' ).on("click", function(){
  $('.menu').removeClass('open');
});



// $(window).on("resize", resize);
// $(window).on("resize", reNav);

// resize(); // call once initially
// reNav(); // call once initially

