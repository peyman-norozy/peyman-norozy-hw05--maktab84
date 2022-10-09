const MessageAndLocation = {
  top: 200,
  right: 500,
  html: "Hello!",
};

function showNotification(mal) {
  const body = document.querySelector("body");
  body.style.width = "100%";
  body.style.height = "100vh";
  const newP = document.createElement("p");
  newP.innerText = mal.html;
  body.appendChild(newP);
  body.style.position = "relative";
  newP.style.position = "absolute";
  newP.style.top = String(MessageAndLocation.top) + "px";
  newP.style.right = String(MessageAndLocation.right) + "px";
}

showNotification(MessageAndLocation);

console.log(String(MessageAndLocation.top));
