const linkedin = document.getElementById("linkedin");
const gmail = document.getElementById("gmail");
const instagram = document.getElementById("instagram");
const github = document.getElementById("github");
const whatsapp = document.getElementById("whatsapp");
const back = document.getElementById("return");

linkedin.addEventListener("click",()=> window.open("https://www.linkedin.com/in/hector-zerrillo-a48029249/"))

gmail.addEventListener("click",()=> window.open("mailto:heczentrepreneur@gmail.com?Subject=Interesado%20en%20tu%20Porfolio"))

instagram.addEventListener("click",()=> window.open("https://www.instagram.com/invites/contact/?i=o5y8sfx4h6mv&utm_content=o8cz64c"))

github.addEventListener("click",()=> window.open("https://github.com/Hecze"))

whatsapp.addEventListener("click",()=> window.open("https://www.whatsapp.com/"))

back.addEventListener("click",()=> window.location = "/index.html")
