let imgs = Array.from(document.querySelectorAll("li"));
console.log(imgs);
let index = 0;
let prev = document.getElementById("prevPicture");
let next = document.getElementById("nextPicture");
imgs[index].classList.add("visible");

prev.addEventListener("click", function () {
    if(index===0){
        imgs[index].classList.remove("visible")
        index=imgs.length-1;
        imgs[index].classList.add("visible");
    }else if(index>0) {
        imgs[index].classList.remove("visible")
        index--;
        imgs[index].classList.add("visible");
    }
})

next.addEventListener("click", function () {
    if(index===imgs.length-1){
        imgs[index].classList.remove("visible")
        index=0;
        imgs[index].classList.add("visible");
    }else if(index<imgs.length-1){
        imgs[index].classList.remove("visible")
        index++;
    imgs[index].classList.add("visible");
    }
})