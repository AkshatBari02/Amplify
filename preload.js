function preloadImage(url) {
  var img = new Image();
  img.src = url;
}

var imageUrl = "bg-amplify.jpeg";
preloadImage(imageUrl);
window.onload = function () {
  document.querySelector(".container").classList.remove("hide");
};
