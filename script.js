function select_crave(){
  console.log("choose your crave");
  fade_out();
}

function random_choice(){
  console.log("here is a random restaurant");
  fade_out();
}

function fade_out(){                                     //on landing button click
  let btn = document.getElementsByClassName("landing");
  let button_div = document.getElementById("container");
  console.log("fadeout called")
  // for(let new_opacity = 9; new_opacity >= 0; new_opacity--){
  //   console.log(new_opacity);
  //   button[0].style.opacity = new_opacity;
  //   button[1].style.opacity = new_opacity;
  // }
  let fading = setInterval(fade, 50);   //interval fade: will run every 250 miliseconds
  let new_opacity = .9;
  function fade(){          //setInterval fade function
    console.log("enter fade function" + btn);
    if(new_opacity < 0){            //if requirement met clearInterval
      for(let y of btn){
        btn[0].remove();        //reduce to one(now if only one only one button is removed)
        btn[0].remove();
        clearInterval(fading);
      }
    } else {                         //run loop to reduce opacity
        for(let x of btn){
          console.log(new_opacity);
          console.log(x);
          x.style.opacity = new_opacity; //display reduced opacity
          new_opacity = new_opacity - .05   //reduce opacity further
        }
      } //end of if loop?
    } //end of fade function
  } //end of function






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
