window.addEventListener('DOMContentLoaded', () => {
    /* 
  slick-slider

  $(document).ready(function() {
    $('.slide').slick({
      speed: 1200,
      adaptiveHight: true,
      prevArrow: '<img src="icons/left.png" class="prev">',
      nextArrow: '<img src="icons/right.png" class="next">',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]
    });
  }); */

  //tiny slider
  const slider = tns({
    container: '.slide',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navPosition: 'bottom'
  });

  function nextPrevSlide(selector) {
    document.querySelector(`.${selector}`).addEventListener('click', () => {
      slider.goTo(selector);
    });
  }
  nextPrevSlide('prev');
  nextPrevSlide('next');


  //tabs
  const menuItem = document.querySelectorAll('.catalog_tabs li');
  const content = document.querySelectorAll('.catalog_content');

  function hide() {
    content.forEach((elem, index) => {
      elem.style.display = 'none';
      menuItem[index].classList.remove('active');
    });
  }

  function show(index = 0) {
    content[index].style.display = 'flex';
    menuItem[index].classList.add('active');
  }

  function trigger() {
    menuItem.forEach((item, index) => {
      item.addEventListener('click', () => {
        hide();
        show(index);
      });
    });
  }

  hide();
  show();
  trigger();

  const link = document.querySelectorAll('.catalog_item_link');

  link.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (index % 2 === 0) {
        link.parentNode.classList.toggle('catalog_item_content_active');
        link.parentElement.nextElementSibling.classList.toggle('catalog_item_info_active');
      } else {
        link.parentNode.classList.toggle('catalog_item_info_active');
        link.parentElement.previousElementSibling.classList.toggle('catalog_item_content_active');
      }
    });
  });

  const overlay = document.querySelector('.overlay');
  const close = document.querySelector('.close');
  const orderTitle = document.querySelectorAll('.catalog_item_subtitle');

  function showModal(dataAttribute, modal) {
    const attribute = `[${dataAttribute}="${modal}"]`;
    const id = `#${modal}`;
    document.querySelectorAll(attribute).forEach((button, index) => {
      button.addEventListener('click', () => {
        if (modal === 'order') {
          document.querySelector('#order').querySelector('.subtitle').textContent = orderTitle[index].textContent;
        }
        overlay.style.cssText = 'display: block; animation: fadeIn 1s;';
        document.querySelector(id).style.display = 'block';
        hideModal(id);
      });
    });
  }

  function hideModal(modal) {
    document.querySelector(modal).querySelector('.close').addEventListener('click', () => {
      document.querySelector(modal).style.display = 'none';
      overlay.style.display = 'none';
    });
  }

  showModal('data-order', 'order');
  showModal('data-modal', 'consultation');
  hideModal('#thanks');

  const setting = {
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: 'required',
      email: {
        required: true,
        email: true
      }
    }, 
    messages: {
      name: {
        required: 'Будьласка введіть своє імя',
        minlength: jQuery.validator.format("Введіть {0} символів")
      },
      email: {
        required: 'Будьласка введість свій email',
        email: 'Ви ввели не вірний адрес пошти'
      }, 
      phone: 'Будьласка, введіть свій номер телефона'
    }
  };

  //validation form

  function validateForm(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: 'required',
        email: {
          required: true,
          email: true
        }
      }, 
      messages: {
        name: {
          required: 'Будьласка введіть своє імя',
          minlength: jQuery.validator.format("Введіть {0} символів")
        },
        email: {
          required: 'Будьласка введість свій email',
          email: 'Ви ввели не вірний адрес пошти'
        }, 
        phone: 'Будьласка, введіть свій номер телефона'
      }
    });
  }

  validateForm('.consultation form');
  validateForm('#consultation form');
  validateForm('#order form');
  $('input[name=phone]').mask('+380 (99) 99-99-999');

  /* MAMP
  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize()
    }).done(function() {
      $(this).find('input').val(''); //очищуєм поля після успішної відправки даних
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset'); //скидуєм форму
    });
    
    return false;
  }); */

  //scroll

  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if(window.scrollY > 1600) {
      document.querySelector('.pageup').style.display = 'block';
    } else {
      document.querySelector('.pageup').style.display = 'none';
    }
  });
  new WOW().init();
});