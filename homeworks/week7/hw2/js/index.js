/* eslint linebreak-style: ["error", "windows"] */
const elements = document.querySelectorAll('.section__faq');
elements.forEach((element) => {
  element.classList.remove('active');
  element.querySelector('.faq__title').addEventListener('click', () => {
    elements.forEach((target) => {
      target.classList.remove('active');
    });
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    } else {
      element.classList.add('active');
    }
  });
});
