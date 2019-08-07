var button=document.querySelectorAll(".center__right--btn");

button[0].addEventListener("mouseover", function(){
    this.src="../img/btn-start-onhover-onclick.svg";
});

button[0].addEventListener("mouseout", function(){
    this.src="../img/btn-start.svg";
});

button[0].addEventListener("click", function(event){
    window.location.href="../registration/registration.html";
});