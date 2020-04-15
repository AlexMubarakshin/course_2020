(function () {
  const feedbackForm = document.querySelector('form.feedback-section__form');
  const firstName = document.querySelector('form .feedback-section__form_input[name=firstName]');
  const emailInput = document.querySelector('form .feedback-section__form_input[name=email]');
  const messageTextarea = document.querySelector('form .feedback-section__form_textarea[name=message]');

  feedbackForm.onsubmit = function (e) {
    e.preventDefault();
    console.log('Имя', firstName.value);
    console.log('Email', emailInput.value);
    console.log('Сообщение', messageTextarea.value);
  }

})();
