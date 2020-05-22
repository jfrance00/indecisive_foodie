//Landing page functions
function select_crave(){               //function to run when user knows what they want
  console.log("choose your crave");
  fade_out();
}

function random_choice(){               // function to run when user doesn't know what they want
  console.log("here is a random restaurant");
  fade_out();
}

function fade_out(){                                     //fade out landing option buttons
  let btn = document.getElementsByClassName("landing");  //identify buttons
  let button_div = document.getElementById("container");  //identify button containers (necessary?)
  console.log("fadeout called")
  let fading = setInterval(fade, 50);        // set and call interval fade: will run every 250 miliseconds
  let new_opacity = .9;                      // set new opacity variable
  function fade(){                        //fade function (called by sestInterval
    console.log("enter fade function" + btn);
    if(new_opacity < 0){            //if opacity 0 or less clearInterval and delete buttons
      for(let y of btn){
        btn[0].remove();        //reduce to one (now if only written once only one button is removed)
        btn[0].remove();
        clearInterval(fading);
      }
    } else {                         //loop to reduce opacity if opacity greater than zero
        for(let x of btn){           //reduces the opacity by .05
          console.log(new_opacity);
          console.log(x);
          x.style.opacity = new_opacity; //display reduced opacity
          new_opacity = new_opacity - .05   //reduce opacity further
        }
      } //end of if loop?
    } //end of fade function
  } //end of function


//end of landing page
