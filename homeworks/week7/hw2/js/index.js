/* eslint linebreak-style: ["error", "windows"] */
const elements = document.querySelectorAll('.section__faq');
elements.forEach((element) => {
  element.querySelector('.faq__title').addEventListener('click', () => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    } else {
      element.classList.add('active');
    }
  });
});
