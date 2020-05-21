var x = 0; // initial X when moving an element
var y = 0;// initital Y when moving an element
var offsetX= 0; //offset of the element when dragging
var  offsetY=0;//offset of the element when dragging
let elem =document.getElementById('British')
let bucket = document.getElementById("bucket");
let coordBucket = bucket.getBoundingClientRect(); // get bucket coordinates
let r = "i know";
var active=false;


elem.addEventListener('mousedown',function(e){ //addition of the mouse click down listener

  e.preventDefault();
      let elem =document.getElementById('British');
      x=e.clientX - offsetX;// current x position of the element
      y=e.clientY- offsetY;// current y position of the element
      active=true;// this element is active in movement
});

elem.addEventListener("mousemove",function(e){  //addition of the mouse move listener
  e.preventDefault();
  if(active){
  let elem =document.getElementById('British');
  elem.style.left=e.clientX-x +"px"; //new position of the element
  elem.style.top=e.clientY-y+"px";//new position of the element
  offsetX =elem.style.left.slice(0,-2);//new offset of the element
  offsetY= elem.style.top.slice(0,-2);//new offset of the element
}
});
elem.addEventListener("mouseup",function(e){  //addition of the mouse click up listener
  e.preventDefault();
  x=e.clientX; //current position of the element
  y=e.clientY;//current position of the element
  active=false;//the element is diactivated for movment
  let bool = checkIfInsideBucket(e.target.id) // check if the buckt and the element are overlapping
});


function checkIfInsideBucket(id){

  let tag = document.getElementById(id);
  let coordTag = tag.getBoundingClientRect();  //get element coordingates



    if(coordBucket["top"] <= coordTag["top"] && coordBucket["left"] <= coordTag["left"] && coordBucket["bottom"] >= coordTag["bottom"] && coordBucket["right"] >= coordTag["right"]){
          //check if overlapping
        console.log("tag inside");

        return true;
    }
    else{
      console.log("tag not inside");
      return false;
    };
    console.log(coordTag);
    console.log(coordBucket);

  return false;


}
