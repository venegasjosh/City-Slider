    // "use strict";

    var slider = document.querySelector('.nav-slider');
    var cities = document.querySelectorAll('.nav-item');
    
    function handleSlider(el) {
      cities.forEach(function (item) {
        item.classList.remove('is-active');
        item.removeAttribute('style');
      });
      slider.style.width = "".concat(el.offsetWidth, "px");
      slider.style.left = "".concat(el.offsetLeft, "px");
      slider.style.backgroundColor = el.getAttribute('active-color');
      el.classList.add('is-active');
      el.style.color = el.getAttribute('active-color');
    }
    
    cities.forEach(function (item, index) {
      item.addEventListener('click', function (e) {
        handleSlider(e.target);
      });
      item.classList.contains('is-active') && handleSlider(item);
    });
         