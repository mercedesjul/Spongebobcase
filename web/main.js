window.addEventListener("keypress", function(e) {
  if (e.keyCode == 13) {
    spongebobcase();
  }
});
function spongebobcase() {
  let text = document.getElementById("input").value;
  if (text.length == 0) {
    document.getElementById("output").innerText =
      "Man muss schon was eingeben!";
  }
  let newText = "";
  let flag = true;
  for (i = 0; i < text.length; i++) {
    if (flag) {
      newText += text[i].toUpperCase();
      flag = false;
    } else {
      newText += text[i].toLowerCase();
      flag = true;
    }
  }
  document.getElementById("output").innerText = newText;
}
