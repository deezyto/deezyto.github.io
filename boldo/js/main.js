window.addEventListener('DOMContentLoaded', () => {
  const company = document.querySelectorAll('.cursor');
  const media993 = window.matchMedia('(min-width: 993px)');
  const media992 = window.matchMedia('(min-width: 769px) and (max-width: 992px)');
  const media768 = window.matchMedia('(min-width: 320px) and (max-width: 768px)');
  let elemOnPage;
  let stepSlide;
  let stepNextBlogArticle;

  function checkMedia({media, viewOnPage, hideSlides = 0, stepNext = 0, callback}) {
    if (media.matches) {
      elemOnPage = viewOnPage;
      if (hideSlides) {
        stepSlide = hideSlides;
      } else {
        stepNextBlogArticle = stepNext;
      }
      callback();
    }
  }
  media993.addEventListener('change', (e) => {
    checkMedia({
      media: media993,
      viewOnPage: 3,
      hideSlides: 3,
      callback: slider
    });
    checkMedia({
      media: media993,
      viewOnPage: 3,
      stepNext: 3,
      callback: nextBlogArticle
    });
  });

  checkMedia({
    media: media993,
    viewOnPage: 3,
    hideSlides: 3,
    callback: slider
  });

  checkMedia({
    media: media993,
    viewOnPage: 3,
    stepNext: 3,
    callback: nextBlogArticle
  });

  media992.addEventListener('change', (e) => {
    checkMedia({
      media: media992,
      viewOnPage: 2,
      hideSlides: 2,
      callback: slider
    });
    checkMedia({
      media: media992,
      viewOnPage: 2,
      stepNext: 2,
      callback: nextBlogArticle
    });
  });

  checkMedia({
    media: media992,
    viewOnPage: 2,
    hideSlides: 2,
    callback: slider
  });

  checkMedia({
    media: media992,
    viewOnPage: 2,
    stepNext: 2,
    callback: nextBlogArticle
  });

  media768.addEventListener('change', (e) => {
    checkMedia({
      media: media768,
      viewOnPage: 1,
      hideSlides: 1,
      callback: slider
    });
    checkMedia({
      media: media768,
      viewOnPage: 1,
      stepNext: 2,
      callback: nextBlogArticle
    });
  });

  checkMedia({
    media: media768,
    viewOnPage: 1,
    hideSlides: 1,
    callback: slider
  });

  checkMedia({
    media: media768,
    viewOnPage: 1,
    stepNext: 2,
    callback: nextBlogArticle
  });
  
  company.forEach((cursor, i) => {
    cursor.addEventListener('mouseenter', (e) => {
      e.target.nextSibling.lastChild.classList.add('active');
      e.target.addEventListener('mouseleave', (e) => {
        e.target.nextSibling.lastChild.classList.remove('active');
      }, {once: true});
    });
  });

  const menu = document.querySelector('.mobile-menu');
  const menuTitle = document.querySelectorAll('.mobile-menu span');
  const ul = document.querySelectorAll('.link');
  const link = document.querySelectorAll('.mobile-menu li');

  const openMenu = document.querySelector('.mobile-menu-open');
  const closeMenu = document.querySelector('.mobile-menu-close');

  function removeClass(className, selector) {
    selector.forEach(item => {
      item.classList.remove(className);
    });
  }

  menuTitle.forEach((button, i) => {
    button.addEventListener('click', (e) => {
      if (e.target.nextSibling.classList.contains('show')) {
        e.target.nextSibling.classList.toggle('show');
      } else {
        removeClass('show', ul);
        e.target.nextSibling.classList.toggle('show');
      }
      
    });
  });

  link.forEach(li => {
    li.addEventListener('click', () => {
      menu.classList.toggle('active');
      openMenu.classList.toggle('active');
    });
  });

  [openMenu, closeMenu].forEach(button => {
    button.addEventListener('click', () => {
      menu.classList.toggle('active');
      openMenu.classList.toggle('active');
    });
  });

function setHideClass(className, selector) {
  selector.forEach(elem => {
    elem.classList.add(className);
  });
}

function showNextBlogArticle(selector, viewSlide, stepSlide = 0) {
  for (let i = 0; i < viewSlide; i++) {
    selector[i + stepSlide].classList.remove('hide');
  }
}

function showNextSlide(parent, count) {
  for (let i = 0; i < count; i++) {
    console.log(parent, count)
    const length = parent.childNodes.length;
    parent.insertBefore(parent.childNodes[0], parent.childNodes[length]);
  }
}

function showPreviousSlide(parent, count) {
  for (let i = 0; i < count; i++) {
    const length = parent.childNodes.length - 1;
    parent.insertBefore(parent.childNodes[length], parent.childNodes[0]);
  }
}

function slider() {
  try {
    const reviews = document.querySelector('.review_items');
    const prev = document.querySelector('.get_review .prev');
    const next = document.querySelector('.get_review .next');
    const item = document.querySelectorAll('.review_item');
    let review = 0;

    [prev, next].forEach(button => {
      button.addEventListener('click', (e) => {
        const maxStepSlide = item.length - review;
        review += stepSlide;
        if (e.target === prev) {
          if (review >= item.length - (elemOnPage - stepSlide)) {
            showPreviousSlide(reviews, maxStepSlide);
            review = 0;
          } else {
            showPreviousSlide(reviews, stepSlide);
          }
        } else {  
          if (review >= item.length - (elemOnPage - stepSlide)) {
            showNextSlide(reviews, maxStepSlide);
            review = 0;
          } else {
            showNextSlide(reviews, stepSlide);
          }
        }
      });
    });
  } catch {}
}

function nextBlogArticle() {
  const buttonMoreBlogArticle = document.querySelector('.blog button');
  const blogArticle = document.querySelectorAll('.blog_article');
  let article = 0;
  try {
    setHideClass('hide', blogArticle);
    showNextBlogArticle(blogArticle, elemOnPage);
    buttonMoreBlogArticle.addEventListener('click', (e) => {
      e.preventDefault();
      article += stepNextBlogArticle;
      const maxStepSlide = blogArticle.length - elemOnPage;
      if (blogArticle.length - article < stepNextBlogArticle) {
        showNextBlogArticle(blogArticle, maxStepSlide, elemOnPage);
      } else {
        showNextBlogArticle(blogArticle, article, elemOnPage);
      }
      
      if (article + elemOnPage >= blogArticle.length) {
        article = 0;
        const link = document.createElement('a');
        link.setAttribute('href', '/blog.html');
        buttonMoreBlogArticle.classList.add('btn', 'btn-blue');
        buttonMoreBlogArticle.textContent = 'Go to blog';

        buttonMoreBlogArticle.addEventListener('click', () => {
          document.body.append(link);
          link.click();
        });
      }
    });
  } catch {

  }
}



const modalWindow = document.querySelectorAll('.modal');
const attributeModal = document.querySelectorAll('[data-modal]');
attributeModal.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    let modal;
    if (modalId === '#login') {
      modal = document.querySelector(modalId);
      modal.classList.add('active');
    }
    modal.querySelector('.close').addEventListener('click', () => {
      modal.classList.remove('active');
    });
  });
});
console.log(attributeModal)

const proposalButton = document.querySelector('form');
let removeMessage;

proposalButton.addEventListener('submit', (e) => {
  e.preventDefault();
  proposalButton.classList.add('hide', 'translateX');
  const message = proposalButton.nextSibling.innerHTML = `
  Thank you! We will write to you;
  `;
  if (!removeMessage) {
    removeMessage = setInterval( () => {
      proposalButton.nextSibling.textContent = '';
      proposalButton.classList.remove('hide', 'translateX');
    },2000);
  }

  if (proposalButton.nextSibling.textContent === '') {
    clearInterval(removeMessage);
  }
  proposalButton.reset();
});

const companyItem = document.querySelectorAll('.company .proposal .item');

companyItem.forEach(item => {
  item.addEventListener('click', () => {
    const animate = item.childNodes[1].classList.contains('animate__fadeIn');
    item.childNodes[1].classList.add('animate__animated');
    if (item.childNodes[1].classList.contains('animate__fadeIn')) {
      item.childNodes[1].classList.remove('animate__fadeIn');
      item.childNodes[1].classList.add('animate__fadeOut');
    } else {
      item.childNodes[1].classList.remove('animate__fadeOut');
      item.childNodes[1].classList.add('animate__fadeIn');
    }

    item.classList.toggle('active');
    item.childNodes[1].classList.toggle('active');
  });
});

});