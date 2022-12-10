var promise = fetch(
  "https://6381e5a753081dd5498ac0a5.mockapi.io/17/stufftosell"
);
function renderRate(rate) {
  var htmlString = "";
  for (var index = 0; index < rate; index++) {
    htmlString += `<i class="fa-solid fa-star text-warning"></i>`;
  }
  return htmlString;
}
promise
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var htmlString = "";
    for (let index = 0; index < data.length; index++) {
      var rateHTMLString = renderRate(data[index].rate);
      htmlString += `
      <div class="col mb-5">
      <div class="card h-100">
          <!-- Product image-->
          <img class="card-img-top" src=${data[index].img} alt="...">
          <!-- Product details-->
          <div class="card-body p-4">
              <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">${data[index].Type}</h5>
                  <!-- Product price-->
                  $40.00 - $80.00
              </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
          </div>
      </div>
  </div>
    `;
    }
    document.getElementById("list-laptop").innerHTML = htmlString;
  });
