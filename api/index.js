var promise = fetch("https://6044315ca20ace001728eb74.mockapi.io/api/phones");
function renderRate(rate){
  var htmlString = ""
  for (var index = 0; index < rate; index++) {
    htmlString += `<i class="fa-solid fa-star text-warning"></i>`
  }
  return htmlString
}
promise.then(function(response){
  return response.json()
}).then(function(data){
  var htmlString = '';
  for (let index = 0; index < data.length; index++) {
    var rateHTMLString = renderRate(data[index].rate)
    htmlString += `
    <div class="card" style="width: 18rem;">
    <img src=${data[index].img} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data[index].name}</h5>
      <h5 class="text-danger">${data[index].description}</h5>
      ${rateHTMLString}      
    </div>
    </div> 
    `
  }
  document.getElementById("list").innerHTML = htmlString
})
