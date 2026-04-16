function show() {
//Sets a variable to the text element in the html file
  var text = document.getElementById("text");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
