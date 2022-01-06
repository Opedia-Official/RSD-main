jQuery(document).ready(function () {
 

    var swiper = new Swiper(".delivery_slider", {
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1440: {
                slidesPerView: 6,
            },
            1024: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 3,
            },
            425: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        },
      });










$(".header-item-right span").click(function(){
    $(".header-item-right").toggleClass("toggleclass");
    $(".header-bottom").toggleClass("open");
});

  $('.header-menu ul li a').on('click', function(e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp("swing");
      }
      else {
          element.addClass('open');
          element.children('ul').slideDown("swing");
          element.siblings('li').children('ul').slideUp("swing");
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp("swing");
      }
  });



     // Testimonial Carousel
     var swiperTest = new Swiper(".testimonial-swip", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints : {
           // breakpoint from 768 up
           992 : {
            slidesPerView: 3,
          },
          // breakpoint from 0 up
          // breakpoint from 480 up
          768 : {
            slidesPerView: 2,
              
          },
          0 : {
            slidesPerView: 1,
          },
          
         
      }
      });
  
      // counter up js
      
      let num = document.querySelectorAll(".counterup");
      let numArray = Array.from(num)
     
      
      numArray.map((item)=>{
          let count = 0
          function counterup(){
              count++
              item.innerHTML = count
      
              if(count == item.dataset.number){
                  clearInterval(stop)
              }
          }
      
          let stop = setInterval(function(){
              counterup()
          },10)
      })



  

  
      // Calculate cost dropdown
    // In your Javascript (external .js resource or <script> tag)
  $(document).ready(function() {
    $('#c-from').select2();
  });
  $(document).ready(function() {
    $('#c-destination').select2();
  });
  $(document).ready(function() {
    $('#c-service').select2();
  });
  $(document).ready(function() {
    $('#c-location').select2();
  });
  
  
  
});