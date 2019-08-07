const btn=document.querySelectorAll(".center__left--btn");

btn[0].addEventListener("mouseover", function(){
    this.src="../img/wyslij-btn-onhover-onclick.svg";
});

btn[0].addEventListener("mouseout", function(){
    this.src="../img/wyslij-btn.svg";
});
