//************************landing page***************************

function select_crave(){               //function to run when user knows what they want

  let bool = true;
 fade_out();

  setTimeout(function() {
    //your code to be executed after 1 second


      let elem = document.getElementById("head_text");
      elem.innerHTML = "Tell us, what do you crave?";
      createTags();
      }, 500);
}
function random_choice(){               // function to run when user doesn't know what they want
  fade_out();
}

function fade_out(){                                     //fade out landing option buttons
  let btn = document.getElementsByClassName("landing");  //identify buttons
  let button_div = document.getElementById("container");  //identify button containers (necessary?)
  let fading = setInterval(fade, 50);        // set and call interval fade: will run every 50 miliseconds
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
    let cousine=['british','french','italian'];
    let ambiance = ['wifi','bar','cash'];
    let x = 0; // initial X when moving an element
    let y = 0;// initital Y when moving an element
    let active=false; // setting the active movalbe object
    document.getElementById("forTags").style.display="initial";
    initTags(cousine,ambiance);//call function that creates the tags

    function initTags(c,a){
      let elem;
      let tags = document.getElementById("tags");
      let tagX = (tags.getBoundingClientRect().left)/1.5;//initial left position
      let tagY = tags.getBoundingClientRect().top; //initial top possition
      let tagXinit = tagX;
      let tagYinit = tagY;
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
                  addUserInputToArray(id)
                  return true;
              }
              else{
                removeUserInput(id)
                return false;
              };
            return false;
          }
    }
}

// ************************end of dragging and dropping***************************


//***********************start of working with API********************************

let addFilter = [];    // array variable that needs to be used for multiple  funciton calls

function addUserInputToArray(id){
  console.log("making array");        //TODO: need to check for duplicated
  if (addFilter.includes(id)){
    return;
  } else {
   addFilter.push(id);
   console.log(addFilter);
   return addFilter;
  }
}

function removeUserInput(id){           //removes object from array on user action
  if(addFilter.includes(id)){
    console.log("was in bucket");
    let index = addFilter.indexOf(id);
    addFilter.splice(index, 1);
    console.log(addFilter);
    return addFilter
    }
  }


function createURL(){        //will be triggered by button when user is finished

  const url_head = "https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&q=";
  let link = url_head;
  for (let i =0; i<addFilter.length;i++){
    if( i<addFilter.length-1){
        link=link+addFilter[i]+"%2C%20";
      }
      else{
        link=link+addFilter[i];
      }
  }
  getData(link);
}


// const url = "https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&q=british%2C";
async function getData (url)
{
   return dat = await fetch(url,{
      method: "GET",
      headers: {
        "user-key": "ea3a811e77479d2e846d38a5a819bf61",
        "accept":"application/jason"
      }
    }).then (response =>  data = response.json())
      .then(dat=>{

        printResults(dat["restaurants"]);
       } )
 }
function showData(){

  let data = createURL();


  let elem = document.getElementById("container");
  elem.classList.add("hideScreen");
  elem.classList.add("collapse");
  elem=document.getElementById("data");
  elem.classList.remove("hideScreen");
  elem.classList.add("showScreen");

}

function printResults(data){
    // console.log(data);
    // console.log(data[0]["restaurant"]);
    let card;
    let div = document.getElementById("data");
    for(x of data){
      console.log(x);
      card = createCard();
      card.firstElementChild.innerHTML =x["restaurant"]["cuisines"];
      card.lastElementChild.firstElementChild.innerHTML=x["restaurant"]["name"];
      card.lastElementChild.children[2].innerHTML = "Full Review";
      card.lastElementChild.children[2].href=x["restaurant"]["url"];
      div.appendChild(card);
    }

}

function createCard(){

    let  card =document.createElement("div");
    let  cardH =document.createElement("div");
    let  cardB =document.createElement("div");
    let  h = document.createElement("h5");
    let  p = document.createElement("p");
    let  a = document.createElement("a");

     h.classList.add("card-title");
     p.classList.add("card-text");
     a.classList.add("btn");
     a.setAttribute('target', '_blank');
     a.classList.add("btn-primary");
     cardB.classList.add("card-body");
     cardH.classList.add("card-header");
     card.classList.add("card");
     card.classList.add("mt-2");
     cardB.appendChild(h);
     cardB.appendChild(p);
     cardB.appendChild(a);
     card.appendChild(cardH);
     card.appendChild(cardB);
     return card;
}
