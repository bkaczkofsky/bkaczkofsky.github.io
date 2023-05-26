function toggleMode() {
    const body = document.body;
    const toggleIcon = document.getElementById("toggle-icon");
  
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      toggleIcon.src = "images/sun-icon.png";
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      toggleIcon.src = "images/moon-icon.png";
    }
  }
  