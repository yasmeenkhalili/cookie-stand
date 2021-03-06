'use strict';

function randomGenerator(minCust, maxCust, avgPerSale) {
  return Math.floor(Math.random() * ((maxCust - minCust + 1) + minCust) * avgPerSale);
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let main = document.getElementById('demo');
let table = document.createElement('table');
let form=document.getElementById('locationForm');

function hour() {
  main.appendChild(table);
  let cookiesRow = document.createElement('tr');
  table.appendChild(cookiesRow);
  let heading = document.createElement('th');
  cookiesRow.appendChild(heading);
  for (let i = 0; i < hours.length; i++) {
    let heading = document.createElement('th');
    cookiesRow.appendChild(heading);
    heading.innerText = hours[i];
  }
  heading = document.createElement('th');
  cookiesRow.appendChild(heading);
  heading.innerText = 'Daily Total';
}hour();


function ParametersOfLocations(minCust, maxCust, avgPerSale, storeName) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
  this.storeName = storeName;
  this.dailyTotal = 0;
  this.totals=0;
  this.summationAvgCookiesPerHour=[];
  this.render = function () {
    let cookiesRow = document.createElement('tr');
    let heading = document.createElement('th');
    heading.innerText = this.storeName;
    table.appendChild(cookiesRow);
    cookiesRow.appendChild(heading);
    for (let i = 0; i < hours.length; i++) {
      let data = document.createElement('td');
      cookiesRow.appendChild(data);
      let avgCookiesPerHour = randomGenerator(this.minCust, this.maxCust, this.avgPerSale);
      this.summationAvgCookiesPerHour[i]=avgCookiesPerHour;
      this.dailyTotal = this.dailyTotal + avgCookiesPerHour;
      data.innerText = avgCookiesPerHour;
    }
    let data = document.createElement('td');
    cookiesRow.appendChild(data);
    data.innerText = this.dailyTotal;
    table.appendChild(cookiesRow);

  };
}


let Seattle = new ParametersOfLocations(23, 65, 6.3, 'Seattle');
Seattle.render();
let Tokyo = new ParametersOfLocations(3, 24, 1.2, 'Tokyo');
Tokyo.render();
let Dubai = new ParametersOfLocations(11, 38, 3.7, 'Dubai');
Dubai.render();
let Paris = new ParametersOfLocations(20, 38, 2.3, 'Paris');
Paris.render();
let Lima = new ParametersOfLocations(2, 16, 4.6, 'Lima');
Lima.render();

let locationArray=[Seattle,Tokyo, Dubai,Paris,Lima];

function total(){
  main.appendChild(table);
  let footerRow=document.createElement('tfoot');
  table.appendChild(footerRow);
  let heading = document.createElement('th');
  footerRow.appendChild(heading);
  heading.innerText = 'Total';
  let sum=[];
  for(let i=0;i<hours.length;i++){
    let data = document.createElement('td');
    footerRow.appendChild(data);
    sum[i]=Seattle.summationAvgCookiesPerHour[i]+Tokyo.summationAvgCookiesPerHour[i]+Dubai.summationAvgCookiesPerHour[i]+Paris.summationAvgCookiesPerHour[i]+Lima.summationAvgCookiesPerHour[i];
    data.innerText =sum[i];
    table.appendChild(footerRow);
  }
  let data = document.createElement('td');
  footerRow.appendChild(data);
  let sumOFSumTotal=Seattle.dailyTotal+Tokyo.dailyTotal+Dubai.dailyTotal+Paris.dailyTotal+Lima.dailyTotal;
  data.innerText=sumOFSumTotal;
  table.appendChild(footerRow);
}total();

form.addEventListener('submit', function(event){
  event.preventDefault();
  let locationName=event.target.locationName.value;
  this.storeName=locationName;
  let minCust=event.target.minCust.value;
  let maxCust=event.target.maxCust.value;
  let avgCust=event.target.avgCust.value;
  minCust=Math.abs(minCust);
  maxCust=Math.abs(maxCust);
  avgCust=Math.abs(avgCust);
  locationName=new ParametersOfLocations (minCust,maxCust,avgCust,locationName);
  locationArray.push(locationName);
  locationName.render();
  // for (let i=0;i<locationArray.length;i++){
  // let sum=[];
  // // let footerRow = document.createElement('tr');
  // for(let i=0;i<=hours.length;i++){
  //   let data = document.createElement('td');
  //   footerRow.appendChild(data);
  //   sum[i]=Seattle.summationAvgCookiesPerHour[i]+Tokyo.summationAvgCookiesPerHour[i]+Dubai.summationAvgCookiesPerHour[i]+Paris.summationAvgCookiesPerHour[i]+Lima.summationAvgCookiesPerHour[i]+locationName.summationAvgCookiesPerHour[i];
  //   data.innerText=sum[i];
  //   table.appendChild(footerRow);
  // }
  // }
});
