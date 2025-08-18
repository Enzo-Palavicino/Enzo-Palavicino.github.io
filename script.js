
function updateGrade() {
  const inputText = document.getElementById("textInput").value;
  const summary = document.getElementById("personal-summary");

  if (inputText.trim() !== "") {
    summary.textContent = inputText;
  } else {
    alert("Por favor escribe algo antes de actualizar.");
  }
}
