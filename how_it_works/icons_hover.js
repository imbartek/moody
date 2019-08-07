var hidden=document.querySelectorAll("#hidden");
var fade=document.querySelectorAll(".container");
var img=document.querySelectorAll(".emojibig");

function klik1(){
    hidden[0].style.display="block";
    fade[0].style.filter="blur(5px)";
    img[0].src="../img/emoji-01/emoji-01@2x.png";
};
function klik2(){
    hidden[0].style.display="block";
    fade[0].style.filter="blur(5px)";
    img[0].src="../img/emoji-02/emoji-02@2x.png";
};
function klik3(){
    hidden[0].style.display="block";
    fade[0].style.filter="blur(5px)";
    img[0].src="../img/emoji-03/emoji-03@2x.png";
};
function klik4(){
    hidden[0].style.display="block";
    fade[0].style.filter="blur(5px)";
    img[0].src="../img/emoji-04/emoji-04@2x.png";
};
function klik5(){
    hidden[0].style.display="block";
    fade[0].style.filter="blur(5px)";
    img[0].src="../img/emoji-05/emoji-05@2x.png";
};

function zam(){
    hidden[0].style.removeProperty('display');
    fade[0].style.removeProperty('filter');
}


