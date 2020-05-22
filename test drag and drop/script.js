let cousine=['british','french','italin'];
let ambiance = ['wifi','bar','cash'];
var x = 0; // initial X when moving an element
var y = 0;// initital Y when moving an element
var active=false; // setting the active movalbe object


initTags(cousine,ambiance);//call function that creates the tags

function initTags(c,a){
  let elem;
  let left = 100; // initial left position
  let tags = document.getElementById("tags")
  for (z of cousine){ //loop for coursine tags
      elem = document.createElement("div");
      elem.classList.add("tag");
      elem.classList.add("cousine");
      elem.id = z;
      elem.style.left=left+"px";
      elem.value = z;
      elem.innerHTML = z;
      left = left+100;
      addListeners(elem);
      tags.appendChild(elem);

  }

  for (z of ambiance){
      elem = document.createElement("div")
      elem.classList.add("tag");
      elem.classList.add("ambiance");
      elem.id = z;
      elem.style.left=left+"px";
      elem.value = z;
      elem.innerHTML = z;
      left = left+100;
      addListeners(elem);
      tags.appendChild(elem);
  }

}
function addListeners(elem){
      console.log("add listeners to: "+elem.value);
      elem.addEventListener('mousedown',function(e){ //addition of the mouse click down listener
        e.preventDefault();
            let elem =document.getElementById(e.target.id);
            offsetX =elem.style.left.slice(0,-2);//new offset of the element
            offsetY= elem.style.top.slice(0,-2);//new offset of the element
            x=e.clientX-offsetX;// current x position of the element
            y=e.clientY-offsetY;// current y position of the element
            active=true;// this element is active in movement
      });
      elem.addEventListener("mousemove",function(e){  //addition of the mouse move listener
        e.preventDefault();
        if(active){
          let elem =document.getElementById(e.target.id);
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
        let bucket = document.getElementById("bucket");
        let coordBucket = bucket.getBoundingClientRect(); // get bucket coordinates
        let tag = document.getElementById(id);
        let coordTag = tag.getBoundingClientRect();  //get element coordingates
          if(coordBucket["top"] <= coordTag["top"] && coordBucket["left"] <= coordTag["left"] && coordBucket["bottom"] >= coordTag["bottom"] && coordBucket["right"] >= coordTag["right"]){
                //check if overlapping
              console.log("tag inside");
              addUserInputToArray()
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


}
// cuisines: british 133, french 45, italian 55
// ambiance wifi, bar, cash


function addUserInputToArray(){
  let userInput = [];
  let ambiance = document.getElement
    if()
  return userInput
}
// https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&q=wifi&cuisines=133
// https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&q=wifi%2C%20bar&cuisines=133
// https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&q=wifi%2C%20cash&cuisines=133%2C%2045



function get_search(){

}

const url = "https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&q="
async function getData ()
{
  return data = await fetch(url,{
      method: "GET",
      headers: {
        "user-key": "ea3a811e77479d2e846d38a5a819bf61",
        "accept":"application/jason"
      }
    }).then (respone =>  data = response.json())
      .then(dat=>{
          console.log(dat);
          console.log(dat["restaurants"]);
      } )
}
let output = getData();
  // console.log(output);
