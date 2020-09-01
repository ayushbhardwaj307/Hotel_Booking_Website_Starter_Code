function view() {
    var v = document.getElementById("next");
    
    if (v.style.display === "none") {
      v.style.display = "flex";
      document.getElementById("viewMore").innerHTML = "View Less";
      
    } else {
      v.style.display = "none";
      document.getElementById("viewMore").innerHTML = "View More";
    }
  }