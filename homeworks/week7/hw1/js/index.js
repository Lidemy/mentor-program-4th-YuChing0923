/* eslint linebreak-style: ["error", "windows"] */
const formElements = document.querySelectorAll('.required');

formElements.forEach((element) => {
  const inputText = element.querySelector('input[type=text]');
  const inputRadio = element.querySelectorAll('input[type=radio]');
  const warning = element.querySelector('.form_warning');

  if (inputText) {
    element.querySelector('input').addEventListener('blur', (event) => {
      if (!event.target.value) {
        warning.classList.add('active');
      } else {
        warning.classList.remove('active');
      }
    });
  } else if (inputRadio.length) {
    element.querySelectorAll('input').forEach((radio) => {
      radio.addEventListener('blur', () => {
        if ([...inputRadio].some(radioChecked => radioChecked.checked)) {
          warning.classList.remove('active');
        } else {
          warning.classList.add('active');
        }
      });
    });
  }
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  let hasNotFill = false;
  const values = {};

  formElements.forEach((element) => {
    let isValid = true;
    const inputText = element.querySelector('input[type=text]');
    const inputRadio = element.querySelectorAll('input[type=radio]');
    const warning = element.querySelector('.form_warning');

    if (inputText) {
      values[inputText.name] = inputText.value;
      if (!inputText.value) {
        isValid = false;
      }
    } else if (inputRadio.length) {
      isValid = [...inputRadio].some(radio => radio.checked);
      if (isValid) {
        const radioChecked = element.querySelector('input[type=radio]:checked');
        values[radioChecked.name] = radioChecked.value;
      }
    }
    if (!isValid) {
      warning.classList.add('active');
      console.log(element);
      hasNotFill = true;
    } else {
      warning.classList.remove('active');
    }
  });

  if (!hasNotFill) {
    alert(JSON.stringify(values)
      .replace(/,/g, '\n')
      .replace('{', '')
      .replace('}', '')
      .replace(/"/g, ''));
  }
});
