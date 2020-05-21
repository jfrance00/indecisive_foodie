var x = 0;
var y = 0;
var offsetX= 0;
var  offsetY=0;
let elem =document.getElementById('British')
var active=false;
elem.addEventListener('mousedown',function(e){

  e.preventDefault();
      let elem =document.getElementById('British');
      x=e.clientX - offsetX;
      y=e.clientY- offsetY;
      active=true;


});

elem.addEventListener("mousemove",function(e){
  e.preventDefault();
  if(active){
  let elem =document.getElementById('British');
  elem.style.left=e.clientX-x +"px";
  elem.style.top=e.clientY-y+"px";
  offsetX =e.clientX;
  offsetY= e.clientY;
}


})
elem.addEventListener("mouseup",function(e){
  e.preventDefault();
  x=e.clientX;
  y=e.clientY;
  active=false;


})



//
//
//
// var contextmenu = document.getElementById('British');
// var initX, initY, mousePressX, mousePressY;
//
// contextmenu.addEventListener('mousedown', function(event) {
//   console.log("ere");
// 	initX = this.offsetLeft;
// 	initY = this.offsetTop;
// 	mousePressX = event.clientX;
// 	mousePressY = event.clientY;
//
// 	this.addEventListener('mousemove', repositionElement, false);
//
// 	window.addEventListener('mouseup', function() {
// 	  contextmenu.removeEventListener('mousemove', repositionElement, false);
// 	}, false);
//
// }, false);
//
// function repositionElement(event) {
// 	this.style.left = initX + event.clientX - mousePressX + 'px';
// 	this.style.top = initY + event.clientY - mousePressY + 'px';
// }
