//************************landing page***************************
function select_crave(){               //function to run when user knows what they want
  fade_out();
  let elem = document.getElementById("head_text");
  elem.innerHTML = "Tell us, what do you crave?";
  createTags();
}
function random_choice(){               // function to run when user doesn't know what they want
  fade_out();
}
function fade_out(){                                     //fade out landing option buttons
  let btn = document.getElementsByClassName("landing");  //identify buttons
  let button_div = document.getElementById("container");  //identify button containers (necessary?)
  let fading = setInterval(fade, 50);        // set and call interval fade: will run every 250 miliseconds
  let new_opacity = .9;                      // set new opacity variable
  function fade(){                        //fade function (called by sestInterval
    if(new_opacity < 0){            //if opacity 0 or less clearInterval and delete buttons
      for(let y of btn){
        btn[0].remove();        //reduce to one (now if only written once only one button is removed)
        btn[0].remove();
        clearInterval(fading);
      }
    } else {                         //loop to reduce opacity if opacity greater than zero
        for(let x of btn){           //reduces the opacity by .05
          x.style.opacity = new_opacity; //display reduced opacity
          new_opacity = new_opacity - .05   //reduce opacity further
        }
      } //end of if loop?
    } //end of fade function
  } //end of function

//************************End of Langing page***************************

//************************Dragging and dropping***************************
function createTags(){
    let cousine=['british','french','italin'];
    let ambiance = ['wifi','bar','cash'];
    let x = 0; // initial X when moving an element
    let y = 0;// initital Y when moving an element
    let active=false; // setting the active movalbe object
    document.getElementById("forTags").style.display="initial";
    initTags(cousine,ambiance);//call function that creates the tags

    function initTags(c,a){
      let elem;
      let tags = document.getElementById("forTags");
      let tagX = (tags.getBoundingClientRect().left)/1.5;//initial left position
      let tagY = tags.getBoundingClientRect().top; //initial top possition
      let tagXinit = tagX;
      let tagYinit = tagY;
      console.log(tagXinit);
      console.log(tagYinit);
        console.log(tags.getBoundingClientRect());
      console.log("!!!");
      for (z of cousine){ //loop for coursine tags
          elem = document.createElement("div");
          elem.classList.add("tag");
          elem.classList.add("btn");
          elem.id = z;
          elem.style.left=tagX+10+"px";
          elem.style.top=tagY+"px";
          elem.setAttribute("value",z);
          elem.style.zIndex="10";
          elem.innerHTML = z;
          addListeners(elem);
          tags.appendChild(elem);
          tagX = tagX + 100;
          console.log(elem.style.left);
          console.log(  elem.style.top);
      }
      tagY = tagYinit+100;
      tagX = tagXinit;
      for (z of ambiance){
        elem = document.createElement("div");
        elem.classList.add("tag");
        elem.classList.add("btn");
        elem.id = z;
        elem.style.left=tagX+10+"px";
        elem.style.top=tagY+10+"px";
        elem.setAttribute("value",z);
        elem.style.zIndex="10";
        elem.innerHTML = z;
        addListeners(elem);
        tags.appendChild(elem);
        tagX = tagX + 100;
      }
    }
    function addListeners(elem){
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
                  return true;
              }
              else{
                console.log("tag not inside");
                return false;
              };
            return false;
          }
    }
}

//************************end of dragging and dropping***************************
//
// const url = "https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&q=british%2Ccity%20view";
// async function getData ()
// {
//   return data = await fetch(url,{
//       method: "GET",
//       headers: {
//         "user-key": "ea3a811e77479d2e846d38a5a819bf61",
//         "accept":"application/jason"
//       }
//     }).then (respone =>  data = response.json())
//       .then(dat=>{
//           console.log(dat);
//           console.log(dat["restaurants"]);
//       } )
// }
// let output = getData();
//   // console.log(output);
//
//
//   console.log("working");
