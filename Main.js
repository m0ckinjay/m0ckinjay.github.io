function changebg(){
  var bg=document.getElementsByClassName('.b');
  bg.style='background:black';
}
function display_the_date(){
var display_date =  document.querySelector('.one');
display_date.textContent = new Date().toDateString();
display_date.style = "background:black;font-size:calc(1rem + 1vw);"
}
