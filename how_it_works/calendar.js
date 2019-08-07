const btn=document.querySelectorAll(".center__btn");

btn[0].addEventListener("mouseover", function(){
    this.src="../img/arrow-down-btn-onhover-onclick.svg";
});

btn[0].addEventListener("mouseout", function(){
    this.src="../img/arrow-down-btn.svg";
});

btn[0].addEventListener("click", function(){
    window.location.href="../how_it_works/calendar.html"
});