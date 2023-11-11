const USERNAME = "username";

const logInWrap = document.querySelector(".login");
const logInForm = logInWrap.querySelector("form");
const toDoWrap = document.querySelector(".list-wrap");
const welcomeTxt = document.querySelector(".user");

function setLogIn(e) {
  e.preventDefault();

  const logInInput = logInWrap.querySelector("input");
  const userName = logInInput.value;
  localStorage.setItem(USERNAME, userName);
  paintGreetings(userName);
}

function paintGreetings(username) {
  welcomeTxt.querySelector("p").innerText = `반가워요 ${username}님!`;
  welcomeTxt.classList.add("active");
  logInWrap.classList.add("hidden");
  toDoWrap.classList.remove("hidden");
}

logInForm.addEventListener("submit", setLogIn);
const savedUsername = localStorage.getItem(USERNAME);
if (savedUsername === null) {
  logInWrap.classList.remove("hidden");
  toDoWrap.classList.add("hidden");
} else {
  paintGreetings(savedUsername);
}
