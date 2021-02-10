let flag = async () => {
    let api = "https://restcountries.eu/rest/v2/all";
    let response = await fetch(api);
    let result = await response.json();
    display(result);
};

let display = (result) => {
    let flagDataID = document.querySelector("#flagCountry");
  
      result.forEach(item => {
          let card = document.createElement("div");
          card.innerHTML = `
          <div class="col">
              <div class="card shadow-sm border-dark">
              <img style="height: 200px; width: 200px"; src="${item.flag}" alt="">
              <div class="card-body">
              <p class="card-title fs-3 fw-normal">${item.name}</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
              </div>
              </div>
            </div> 
          `;
  
          flagDataID.appendChild(card);
  
      });
    console.log(result);
  }
  
flag();