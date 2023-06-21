function backgroundColor() {
setInterval(
   function () {
      var logoImage = document.getElementById('target-img');
      var randomColor = Math.floor(Math.random()*15942678).toString(16);
      logoImage.style.backgroundColor = "#"+randomColor;
    },1000);
}
