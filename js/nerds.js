  var link = document.querySelector(".btn-form-user");
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".modal-content-close");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=modal-user-name]");
  var email = popup.querySelector("[name=modal-email]")
  
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
  });
  
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  });
  
  form.addEventListener("submit", function(event) {
    if (!login.value || !email.value)
      {
        event.preventDefault();
        popup.classList.add("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        } else {
            localStorage.setItem("login", login.value);
        }
  });
  
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
        }
      }
  })