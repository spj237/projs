var swiper = new Swiper(".mySwiper.swip1", {
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay :{
        delay:6000
    }
  });

  var swiper2 = new Swiper(".mySwiper.swip2", {
    spaceBetween: 30,
    slidesPerView: 2,
    speed:2000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    autoplay :{
        delay:3000
    }
    
  });

  var swiper3 = new Swiper(".mySwiper.swip3", {
    spaceBetween: 30,
    slidesPerView: 3,
    speed:2000,
    loop: true, // Enable looping for infinite autoplay
  allowTouchMove: false, // Disable swipe gestures
  navigation: false, // Disable navigation arrows
  pagination: false, // Disable pagination dots

  autoplay: {
    delay: 2000, // Change slide every 3 seconds
    disableOnInteraction: false, // Prevent stopping autoplay on user interaction
  }

  });

  document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("cursor");
    console.log(cursor); // Should log the element or null
  
    if (!cursor) {
      console.error("The element with id 'cursor' was not found.");
      return;
    }
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = '${e.pageX}px';
      cursor.style.top = '${e.pageY}px';
    });
  });