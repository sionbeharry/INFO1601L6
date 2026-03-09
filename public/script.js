function drawTable(records){
    let result = document.querySelector('#result');
    //add html code inside of result
    let html = '';// create html string
    for(let record of records){
        //build html string
        html += `<tr>
          <td>${record.id}</td>
          <td>${record.name}</td>
          <td>${record.brewery_type}</td>
          <td>${record.website_url}</td>    
        </tr>`;
    }
    result.innerHTML = html;//add html string to DOM
}

//testing the function
drawTable([{
   id: 1,
   name: "bob's",
   brewery_type: "fire",
   website_url:"https://bobs.com"
}]);


//function MUST be declared async
async function getData(url){
   try{
     let response = await fetch(url);//1. Send http request and get response
     let result = await response.json();//2. Get data from response
     drawTable(result);// 3. Do something with the data
  }catch(e){
      console.log(e);//catch and log any errors
  }
}
getData("https://api.openbrewerydb.org/v1/breweries/search?query=harry")