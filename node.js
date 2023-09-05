let head = document.getElementById('head');
const button = document.getElementById('button')
head.style.color = "red";
button.addEventListener('click', () => {
 if(head.style.color === "gold"){
    head.style.color = "red"
 }else{
    head.style.color = "gold";
 }
})