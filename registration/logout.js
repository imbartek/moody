var button=document.querySelectorAll(".logout");

button[0].addEventListener("mouseover", function(){
    this.src="../img/wyloguj-btn-onhover-onclick.svg";
});

button[0].addEventListener("mouseout", function(){
    this.src="../img/wyloguj-btn.svg";
});

button[0].addEventListener("click", function(event){
    window.location.href="../registration/registration.html";
});