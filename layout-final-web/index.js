var promise = fetch("https://6044315ca20ace001728eb74.mockapi.io/api/phones");
var arrSanPham;
var itemPicked = [];

function renderRate(rate) {
  var htmlString = "";
  for (var index = 0; index < rate; index++) {
    htmlString += `<i class="fa-solid fa-star text-warning"></i>`;
  }
  return htmlString;
}
function addItem(id) {
  var sanPhamDuocChon = arrSanPham.find((item) => item.id == id);
  itemPicked.push(sanPhamDuocChon);
  document.getElementById("myCart").innerHTML = itemPicked.length;
}
promise
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    arrSanPham = data;
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
                  <h5 class="fw-bolder">${data[index].name}</h5>
                  <!-- Product price-->
                  $40.00 - $80.00
              </div>
          </div>
          <!-- Product actions-->
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
               <div class="text-center w-100">
                <span class="btn btn-outline-dark mt-auto">View options</span>
               </div>
               <div class="text-center w-100" onclick="addItem(${data[index].id})">
               <span class="btn btn-outline-dark mt-auto">Add to cart</span>
              </div>
          </div>
      </div>
  </div>
    `;
    }
    document.getElementById("list-laptop").innerHTML = htmlString;
  });
