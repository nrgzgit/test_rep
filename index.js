function jsBtn() {
  alert("Does it count?");
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Dark / Light Switch Toggle
function toggleMode() {
  const body = document.body;
  const modeSwitch = document.getElementById("mode-switch");

  body.classList.toggle("dark-mode");
  modeSwitch.innerText = body.classList.contains("dark-mode") ? "✴" : "☽";
}
