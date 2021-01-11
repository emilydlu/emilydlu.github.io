function start (){
  
  $('.bar').each(function(i){  
    var $bar = $(this);
    $(this).append('<span class="count"></span>')
    setTimeout(function(){
      $bar.css('width', $bar.attr('data-percent')/400000.0);      
    }, i*100);
  });

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).parent('.bar').attr('data-percent')/1000
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)/1000 + "k");
        }
    });
});
}

console.log("here")

 $('.yellow-monster').hover(
       function(){  
            console.log("here!")
            var $bar = $(this);
            var bubble = document.getElementById( "social" );
            var icon = document.getElementById( "twitter" );
            icon.style.display='block';
         // div.style.color="grey"
       }, 
        function() { 
            var icon = document.getElementById( "twitter" );
            icon.style.display='none';
      });
    

// $('.blue-ghost').hover(
//        function(){  
//             var books = $('.books');
//             for (i=0; i<books.length; i++) { 
//               books[i].style.display='block';
//             }
//          // div.style.color="grey"
//        }, 
//         function() { 
//             var books = $('.books');
//              for (i=0; i<books.length; i++) { 
//               books[i].style.display='none';
//             }
//       });


// $(window).scroll(function() {
//    var hT = $('#animated-graph').offset().top,
//        hH = $('#animated-graph').outerHeight(),
//        wH = $(window).height(),
//        wS = $(this).scrollTop();
//     console.log((hT-wH) , wS);
//    if (wS > (hT+hH-wH)){
//      alert('you have scrolled to the h1!');
//    }
// });

var reached = false
// window.addEventListener('', function(e) { 
//   meh();
// })
// window.addEventListener('scroll', function(e) {

//   var hT = $('#animated-graph').offset().top,
//        hH = $('#animated-graph').outerHeight(),
//        wH = $(window).height(),
//        wS = $(this).scrollTop();
//     // console.log($(reached))
//    if (wS > (hT+hH-wH) && reached == false){
//      start();
//      reached = true
//    }
// });
