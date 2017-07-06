const form = document.querySelector('#contactform');
const send = document.querySelector('#sendbutton');
const reset = document.querySelector('#resetbutton');
const name = form.querySelector("[name='name']");
const email = form.querySelector("[name='mail']");
const message = form.querySelector("[name='message']");

send.addEventListener('click', e => {
  if(isValid(form)) {
    form.submit();
  } else {
    markErrors(form);
  }
});

reset.addEventListener('click', e => {
  form.reset();
  name.classList.remove("error");
  email.classList.remove("error");
  message.classList.remove("error");
});

const isValid = target => {
  if(name.value === "") {
    return false;
  }
  if(email.value.indexOf("@") === -1) {
    return false;
  }
  if(message.value === "") {
    return false;
  }
  return true;
}

const markErrors = function(target) {
  if(name.value === "") {
    name.classList.add("error");
    return;
  } else {
    name.classList.remove("error");
  }
  if(email.value.indexOf("@") === -1) {
    email.classList.add("error");
    return;
  } else {
    email.classList.remove("error");
  }
  if(message.value === "") {
    message.classList.add("error");
    return;
  } else {
    email.classList.remove("error");
  }
}
