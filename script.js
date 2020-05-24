//************************landing page***************************
let cousine=['british','french','italian', 'American', 'Indian','Sushi']; //list if cousine tags
let ambiance = ['Wifi','Bar','Cash','Fullbar','Breakfast','Dinner'];//list of feature tags
let addFilter = []; //global array for filtering of tags 

function select_crave(){               //function to run when user knows what they want

  let bool = true;
  document.body.style.backgroundImage = "url('background2.jpg')";
  let heading = document.getElementById("heading");
  heading.style.marginTop="0px";
 fade_out(); //fade out of the buttons

  setTimeout(function() { //
    //your code to be executed after 1 second


      let elem = document.getElementById("head_text");
      elem.innerHTML = "Tell us, what do you crave?"; //change the header text
      elem.style.fontSize="2.5em";
      let h3 = document.createElement("h3");
      h3.innerHTML = "(drag the tags into the bowl)"; //add second line for header text
      h3.classList.add("head_text");
      h3.id="h3";
      h3.style.fontSize="1.5em";
      heading.appendChild(h3);
      createTags();
      }, 500);
}

function random_choice(){               // function to run when user doesn't know what they want
  fade_out();
  randomizeFilter();
  createURL();
  showData();
}

function fade_out(){                                     //fade out landing option buttons
  let btn = document.getElementsByClassName("landing");  //identify buttons
  let button_div = document.getElementById("container");  //identify button containers (necessary?)
  let fading = setInterval(fade, 50);                    // set and call interval fade: will run every 50 miliseconds
  let new_opacity = .9;                                  // set new opacity variable
  function fade(){                                       //fade function (called by sestInterval
    if(new_opacity < 0){                                 //if opacity 0 or less clearInterval and delete buttons
      for(let y of btn){
        btn[0].remove();                                //reduce to one (now if only written once only one button is removed)
        btn[0].remove();
        clearInterval(fading);

      }
    } else {                         //loop to reduce opacity if opacity greater than zero
        for(let x of btn){           //reduces the opacity by .05
          x.style.opacity = new_opacity; //display reduced opacity
          new_opacity = new_opacity - .05   //reduce opacity further
        }
      }                               //end of if loop
    }                                 //end of fade function
  }                                   //end of fade_out function


//************************End of Langing page***************************

//************************Dragging and dropping***************************

//*****menu to go automatically to drag and drop******
// let goToTags = document.getElementById("goToTags")                //will be link back to "choose craves"
// goToTags.addEventListener("click", resetTags);
//
// function resetTags(){
//   clearPage();
//   createTags();
// }
//
// function clearPage(){
//   let elem = document.getElementById("container");
//   elem.classList.add("hideScreen");
//   // elem.classList.add("collapse");
//   elem.classList.remove("hideScreen");
//   elem.classList.remove("showScreen");
// }


//*****end menu feature*****

function createTags(){
    console.log("arrived at createTags function");
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
      let tagXinit = tagX; //inital placement the first tag
      let tagYinit = tagY;//inital placement the first tag
      let i = 1;
      for (z of cousine){ //loop for coursine tags
          elem = document.createElement("div");
          elem.classList.add("tag");
          elem.classList.add("btn");
          elem.classList.add("choices")
          elem.id = z;
          elem.style.left=tagX+10+"px";
          elem.style.top=tagY+"px";
          elem.setAttribute("value",z);
          elem.style.zIndex="10";
          elem.innerHTML = z;
          addListeners(elem);
          tags.appendChild(elem);
          tagX = tagXinit + 100*(i%3); //placemnet of the current tag- restarts the offset of the "left" property each 3 tags
          tagY=tagYinit+100*Math.floor(i/3); //placement of the current tag - incriment the offset of the "top" property every 3 tags
          i++;
      }
      tagY=tagYinit+100*Math.floor(i/3);
      tagX = tagXinit;
      for (z of ambiance){
        elem = document.createElement("div");
        elem.classList.add("tag");
        elem.classList.add("btn");
        elem.classList.add("choices")
        elem.id = z;
        elem.style.left=tagX+10+"px";
        elem.style.top=tagY+10+"px";
        elem.setAttribute("value",z);
        elem.style.zIndex="10";
        elem.innerHTML = z;
        addListeners(elem);
        tags.appendChild(elem);
        tagX = tagXinit + 100*(i%3);
        tagY=tagYinit+100*Math.floor(i/3);
        i++;
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
                elem.style.zIndex="1000";
          });
          elem.addEventListener("mousemove",function(e){  //addition of the mouse move listener
            e.preventDefault();
            if(active==true){
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
            elem.style.zIndex="10";
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

//************************* Random choices generator ********************************
function randomizeFilter(){
  let addFilter = cousine.concat(ambiance);                      //makes new array out of both condition arrays
  let numberChoices = addFilter.length                           //finds number of choices
  let numberOfFilters = Math.floor(Math.random() * Math.floor(numberChoices));   //choses random number of filters to remove
  for (let i = 0; i < numberOfFilters; i++){
    randomIndex = Math.floor(Math.random() * Math.floor(numberOfFilters-i));  //removes one randon filter each loop
    addFilter.splice(randomIndex, 1);;
    console.log(addFilter);
  }
  return addFilter;
}
//***********************start of working with API********************************

   // array variable that needs to be used for multiple  funciton calls

function addUserInputToArray(id){
  if (addFilter.includes(id)){              //TODO: need to check for duplicated
    return;
  } else {
   addFilter.push(id);
   return addFilter;
  }
}
function removeUserInput(id){           //removes object from array on user action
  if(addFilter.includes(id)){
    let index = addFilter.indexOf(id);         //finds index
    addFilter.splice(index, 1);                //removes index
    return addFilter
    }
  }
function createURL(){        //will be triggered by button when user is finished
  const url_head = "https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&q=";
  let link = url_head;
  for (let i = 0; i<addFilter.length;i++){
    if( i<addFilter.length-1){
        link=link+addFilter[i]+"%2C%20"; //concatenate special charecter for the URL (  =", ") 
      }
      else{
        link=link+addFilter[i]; // if last item, enter the tag without the special charecter
      }
  }
  getData(link);
}
async function getData (url) // function that gets data from the API - async means it runs asynchronous for the rest of the code (important for the await function)
{

  showSpinner(true); //shows the spinning waiting icon
   return dat = await fetch(url,{
      method: "GET",
      headers: {
        "user-key": "ea3a811e77479d2e846d38a5a819bf61", //unique key for the API
        "accept":"application/jason" // the returned data will be JSON compatible
      }
    }).then (response =>  data = response.json()) //parse the return data to JSON
      .then(dat=>{
        showSpinner(false); //hide the waiting spinner
        printResults(dat["restaurants"]); // print the results
       } )
 }
 function showSpinner(bool){
    if(bool==true){
      document.getElementById("wait").style.display="block"; //displa the spinner 
      document.getElementById("spinner").style.animation="spin 2s infinite linear";//set the animation
      document.body.style.backgroundImage='url("")'; // remove the background image
      document.getElementById("heading").style.display="none"; // remove the heading text
    }
    else{
      document.getElementById("wait").style.display="none"; // hide the spinner
      document.getElementById("spinner").style.animation=""; //stop the animation so it won't continue in the background
    document.getElementById("heading").style.display="initial" // return display of the heading
      if(document.getElementById("h3")!=null){document.getElementById("h3").style.display="none";}//remove the secondary heading if it exists
    }
 }
function showData(){ //print the collected data from the API
  let data = createURL(); //creation of the data
  let elem = document.getElementById("container"); 
  elem.classList.add("hideScreen"); //remove the main container of previous screen
  elem.classList.add("collapse");
  elem=document.getElementById("data");
  elem.classList.remove("hideScreen");//bring the outout data to screen
  elem.classList.add("showScreen");

  elem = document.getElementById("head_text");
  elem.innerHTML = "Your Crave List"; // change the header text
}
function printResults(data){
    let cardBlock;
    let carouselItem
    let div = document.getElementById("data");
    let i=0;
    for(x of data){ //print in loop the entire card object with variables as data from the api
      cardBlock =
        ' <div class="card mt-2">'+
        '  <h5 class="card-header">'+x["restaurant"]["name"]+'</h5>'+
          '<div class="card-body">'+
          '  <h5 class="card-title">'+x["restaurant"]["cuisines"]+'</h5>'+
          '  <div class="row myrow">'+

              '<div class="col-xl-6 col-lg-6">'+
              '  <p class="card-text">Price range is '+x["restaurant"]["price_range"]+'/5, and average price for two is '+x["restaurant"]["average_cost_for_two"]+x["restaurant"]["currency"]+'</p>'+
              '  <p class="card-text">Address: '+ x["restaurant"]["location"]["address"]+'</p>'+
                '  <p class="card-text">Highlights: '+ x["restaurant"]["highlights"]+'</p>'+
              '  <a href='+x["restaurant"]["url"]+'" class="btn btn-primary">Full review</a></div>'+

                '<div class="col-xl-6 col-lg-6" >'+
                '  <div id="carouselControls'+i+'" class="carousel slide" data-ride="carousel" >'+
                  '  <div class="carousel-inner">'+
                      createCarouselItems(x["restaurant"]["photos"])+ // addition of the pictures carousel
                    '</div>'+
                    '<a class="carousel-control-prev" href="#carouselControls'+i+'" role="button" data-slide="prev">'+
                    '  <span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                    '  <span class="sr-only">Previous</span></a>'+
                    '<a class="carousel-control-next" href="#carouselControls'+i+'" role="button" data-slide="next">'+
                      '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
                    '  <span class="sr-only">Next</span>'+
                  '  </a></div></div> </div></div></div>';
                  div.innerHTML +=cardBlock;
                  i++;
                }
}

function createCarouselItems(x){ // pictures carousel addition - input is an array of picture URLs from the API
  let carouselItem='';
  for (y of x){
    if(x.indexOf(y) == 0){ //loop to add each individual item
       carouselItem+='<div class="carousel-item active">'+ 
       '  <img src="'+y["photo"]["url"]+'" class="d-block w-100" ></div>';
      }
      else{
        carouselItem+='<div class="carousel-item">'+
        '  <img src="'+y["photo"]["url"]+'" class="d-block w-100" ></div>';
      }

   }
   return carouselItem;

}
