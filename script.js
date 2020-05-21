const url = "https://developers.zomato.com/api/v2.1/search?entity_id=61&entity_type=city&q=british%2Ccity%20view";
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


  console.log("working");
