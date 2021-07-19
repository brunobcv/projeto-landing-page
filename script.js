function save() {
  let inputEmail= document.getElementById("email");
  localStorage.setItem("email", inputEmail.value);
}