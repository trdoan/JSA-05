var promise = fetch("https://6044315ca20ace001728eb74.mockapi.io/api/world_cup");

promise.then(function(response){
  return response.json()
}).then(function(data){
  console.log(data)
  var htmlString = '';
  for (let index = 0; index < data.length; index++) {
    htmlString += `
    <div class="card" style="width: 18rem;">
    <img src=${data[index].img} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data[index].name}</h5>
      <h5 class="text-danger">${data[index].club}</h5>
    </div>
    </div> 
    `
  }
  document.getElementById("list").innerHTML = htmlString
})
