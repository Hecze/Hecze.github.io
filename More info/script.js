document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector("#asgacard");
    const hoverImage = document.querySelector("#fondo-asga");
    
    card.addEventListener("mouseenter", () => {
      hoverImage.style.left = "-7%";
      document.body.style.backgroundImage = "linear-gradient(60deg, #A97C2D, #AE3916)";
    });
    
    card.addEventListener("mouseleave", () => {
      hoverImage.style.left = "-100%";
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector("#cuyisticard");
    const hoverImage = document.querySelector("#fondo-cuyistica");
    
    card.addEventListener("mouseenter", () => {
      hoverImage.style.left = "-20%";
      document.body.style.backgroundImage = "linear-gradient(60deg, rgb(119,200,164,50),rgb(40,50,120,255))";
    });
    
    card.addEventListener("mouseleave", () => {
      hoverImage.style.left = "-100%";
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector("#anecdotescard");
    const hoverImage = document.querySelector("#fondo-anecdotes");
    
    card.addEventListener("mouseenter", () => {
      hoverImage.style.left = "+2%";
      document.body.style.backgroundImage = "linear-gradient(60deg, rgb(153, 88, 88), rgb(208, 166, 106))";
    });
    
    card.addEventListener("mouseleave", () => {
      hoverImage.style.left = "-100%";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector("#dezeercard");
    const hoverImage = document.querySelector("#fondo-dezeer");
    
    card.addEventListener("mouseenter", () => {
      hoverImage.style.left = "+10%";
      document.body.style.backgroundImage = "linear-gradient(60deg, rgb(238, 174, 202, 1), rgb(148, 187, 233, 1))";
    });
    
    card.addEventListener("mouseleave", () => {
      hoverImage.style.left = "-100%";
    });
  });
  
