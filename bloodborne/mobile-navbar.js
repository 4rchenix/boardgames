/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
      document.getElementById("mhome").style.display = "block";
    } else {
      x.style.display = "flex";
      document.getElementById("mhome").style.display = "none";
    }
  }