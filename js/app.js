'use strict';
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function randomGenerator(minCustConsumption,maxCustConsumption,avgCookiePerSale){
  return Math.floor(Math.random() * ((maxCustConsumption-minCustConsumption+1)+minCustConsumption) * avgCookiePerSale);
}
function seattle(){
  let Seattle={
    minCustConsumption:23,
    maxCustConsumption:65,
    avgCookiePerSale:6.3,
    cookies:[],
    subtitle:'Seattle',
    sum:0,
    consumptionClaculator : function (){
      for (let i=0;i<hours.length;i++){
        let numberOfCookies=randomGenerator(this.minCustConsumption,this.maxCustConsumption,this.avgCookiePerSale);
        this.cookies.push(numberOfCookies);
        Seattle.sum=Seattle.sum+numberOfCookies;
      }
      console.log(Seattle.sum);
      return Seattle.cookies,Seattle.sum;
    }
  };
  console.log(Seattle.consumptionClaculator());
  let main=document.getElementById('demo');
  let subtitle=document.createElement('h2');
  let unorderedList= document.createElement('ul');
  for (let i=0;i<hours.length;i++){
    let arrayelements=document.createElement('li');
    let arrayhours=document.createElement('li');
    let totalArray=document.createElement('li');
    arrayelements.innerText=Seattle.cookies[i];
    arrayhours.innerText=hours[i];
    totalArray.innerText=[hours[i]+':'+Seattle.cookies[i]+' cookies'];
    unorderedList.appendChild(totalArray);
  }
  subtitle.innerText=Seattle.subtitle;
  main.appendChild(subtitle);
  main.appendChild(unorderedList);
  let sum=document.createElement('li');
  sum.innerText='  Total :'+Seattle.sum+' cookies';
  unorderedList.appendChild(sum);
}
seattle();

function tokyo(){
  let Tokyo={
    minCustConsumption:3,
    maxCustConsumption:24,
    avgCookiePerSale:1.2,
    cookies:[],
    subtitle:'Tokyo',
    sum:0,
    consumptionClaculator : function (){
      for (let i=0;i<hours.length;i++){
        let numberOfCookies=randomGenerator(this.minCustConsumption,this.maxCustConsumption,this.avgCookiePerSale);
        this.cookies.push(numberOfCookies);
        Tokyo.sum=Tokyo.sum+numberOfCookies;
      }
      return Tokyo.cookies,Tokyo.sum;
    }
  };
  console.log(Tokyo.consumptionClaculator());
  let main=document.getElementById('demo');
  let subtitle=document.createElement('h2');
  let unorderedList= document.createElement('ul');
  for (let i=0;i<hours.length;i++){
    let arrayelements=document.createElement('li');
    let arrayhours=document.createElement('li');
    let totalArray=document.createElement('li');
    arrayelements.innerText=Tokyo.cookies[i];
    arrayhours.innerText=hours[i];
    totalArray.innerText=[hours[i]+':'+Tokyo.cookies[i]+' cookies'];
    unorderedList.appendChild(totalArray);
  }

  subtitle.innerText=Tokyo.subtitle;
  main.appendChild(subtitle);
  main.appendChild(unorderedList);
  let sum=document.createElement('li');
  sum.innerText='  Total :'+Tokyo.sum+' cookies';
  unorderedList.appendChild(sum);
}
tokyo();

function dubai(){
  let Dubai={
    minCustConsumption:11,
    maxCustConsumption:38,
    avgCookiePerSale:3.7,
    cookies:[],
    subtitle:'Dubai',
    sum:0,
    consumptionClaculator : function (){
      for (let i=0;i<hours.length;i++){
        let numberOfCookies=randomGenerator(this.minCustConsumption,this.maxCustConsumption,this.avgCookiePerSale);
        this.cookies.push(numberOfCookies);
        Dubai.sum=Dubai.sum+numberOfCookies;
      }
      console.log(Dubai.sum);
      return Dubai.cookies,Dubai.sum;
    }
  };
  console.log(Dubai.consumptionClaculator());
  let main=document.getElementById('demo');
  let subtitle=document.createElement('h2');
  let unorderedList= document.createElement('ul');
  for (let i=0;i<hours.length;i++){
    let arrayelements=document.createElement('li');
    let arrayhours=document.createElement('li');
    let totalArray=document.createElement('li');
    arrayelements.innerText=Dubai.cookies[i];
    arrayhours.innerText=hours[i];
    totalArray.innerText=[hours[i]+':'+Dubai.cookies[i]+' cookies'];
    unorderedList.appendChild(totalArray);
  }
  subtitle.innerText=Dubai.subtitle;
  main.appendChild(subtitle);
  main.appendChild(unorderedList);
  let sum=document.createElement('li');
  sum.innerText='  Total :'+Dubai.sum+' cookies';
  unorderedList.appendChild(sum);
}
dubai();

function paris(){
  let Paris={
    minCustConsumption:20,
    maxCustConsumption:38,
    avgCookiePerSale:2.3,
    cookies:[],
    subtitle:'Paris',
    sum:0,
    consumptionClaculator : function (){
      for (let i=0;i<hours.length;i++){
        let numberOfCookies=randomGenerator(this.minCustConsumption,this.maxCustConsumption,this.avgCookiePerSale);
        this.cookies.push(numberOfCookies);
        Paris.sum=Paris.sum+numberOfCookies;
      }
      return Paris.cookies,Paris.sum;
    }
  };
  console.log(Paris.consumptionClaculator());
  let main=document.getElementById('demo');
  let subtitle=document.createElement('h2');
  let unorderedList= document.createElement('ul');
  for (let i=0;i<hours.length;i++){
    let arrayelements=document.createElement('li');
    let arrayhours=document.createElement('li');
    let totalArray=document.createElement('li');
    arrayelements.innerText=Paris.cookies[i];
    arrayhours.innerText=hours[i];
    totalArray.innerText=[hours[i]+':'+Paris.cookies[i]+' cookies'];
    unorderedList.appendChild(totalArray);
  }

  subtitle.innerText=Paris.subtitle;
  main.appendChild(subtitle);
  main.appendChild(unorderedList);
  let sum=document.createElement('li');
  sum.innerText='  Total :'+Paris.sum+' cookies';
  unorderedList.appendChild(sum);
}
paris();

function lima(){
  let Lima={
    minCustConsumption:2,
    maxCustConsumption:16,
    avgCookiePerSale:4.6,
    cookies:[],
    subtitle:'Lima',
    sum:0,
    consumptionClaculator : function (){
      for (let i=0;i<hours.length;i++){
        let numberOfCookies=randomGenerator(this.minCustConsumption,this.maxCustConsumption,this.avgCookiePerSale);
        this.cookies.push(numberOfCookies);
        Lima.sum=Lima.sum+numberOfCookies;
      }
      return Lima.cookies,Lima.sum;
    }
  };
  console.log(Lima.consumptionClaculator());
  let main=document.getElementById('demo');
  let subtitle=document.createElement('h2');
  let unorderedList= document.createElement('ul');
  for (let i=0;i<hours.length;i++){
    let arrayelements=document.createElement('li');
    let arrayhours=document.createElement('li');
    let totalArray=document.createElement('li');
    arrayelements.innerText=Lima.cookies[i];
    arrayhours.innerText=hours[i];
    totalArray.innerText=[hours[i]+':'+Lima.cookies[i]+' cookies'];
    unorderedList.appendChild(totalArray);
  }

  subtitle.innerText=Lima.subtitle;
  main.appendChild(subtitle);
  main.appendChild(unorderedList);
  let sum=document.createElement('li');
  sum.innerText='  Total :'+Lima.sum+' cookies';
  unorderedList.appendChild(sum);
}
lima();



