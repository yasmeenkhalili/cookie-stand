'use strict';
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function randomGenerator(minCustConsumption,maxCustConsumption,avgCookiePerSale){
  return Math.floor(Math.random() * ((maxCustConsumption-minCustConsumption+1)+minCustConsumption) * avgCookiePerSale);
}

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
      this.sum=this.sum+numberOfCookies;
    }
    console.log(this.sum);
    return this.cookies,this.sum;
  },
  render :function(){let main=document.getElementById('demo');
    let subtitle=document.createElement('h2');
    let unorderedList= document.createElement('ul');
    for (let i=0;i<hours.length;i++){
      let arrayelements=document.createElement('li');
      let arrayhours=document.createElement('li');
      let totalArray=document.createElement('li');
      arrayelements.innerText=Seattle.cookies[i];
      arrayhours.innerText=hours[i];
      totalArray.innerText=[hours[i]+':'+this.cookies[i]+' cookies'];
      unorderedList.appendChild(totalArray);
    }
    subtitle.innerText=this.subtitle;
    main.appendChild(subtitle);
    main.appendChild(unorderedList);
    let sum=document.createElement('li');
    sum.innerText='  Total :'+this.sum+' cookies';
    unorderedList.appendChild(sum);
    main=document.getElementById('demo');
  }
};
Seattle.consumptionClaculator();
Seattle.render();


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
      this.sum=this.sum+numberOfCookies;
    }
    console.log(this.sum);
    return this.cookies,this.sum;
  },
  render :function(){let main=document.getElementById('demo');
    let subtitle=document.createElement('h2');
    let unorderedList= document.createElement('ul');
    for (let i=0;i<hours.length;i++){
      let arrayelements=document.createElement('li');
      let arrayhours=document.createElement('li');
      let totalArray=document.createElement('li');
      arrayelements.innerText=Seattle.cookies[i];
      arrayhours.innerText=hours[i];
      totalArray.innerText=[hours[i]+':'+this.cookies[i]+' cookies'];
      unorderedList.appendChild(totalArray);
    }
    subtitle.innerText=this.subtitle;
    main.appendChild(subtitle);
    main.appendChild(unorderedList);
    let sum=document.createElement('li');
    sum.innerText='  Total :'+this.sum+' cookies';
    unorderedList.appendChild(sum);
    main=document.getElementById('demo');

  }
};
Tokyo.consumptionClaculator();
Tokyo.render();

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
      this.sum=this.sum+numberOfCookies;
    }
    console.log(this.sum);
    return this.cookies,this.sum;
  },
  render :function(){let main=document.getElementById('demo');
    let subtitle=document.createElement('h2');
    let unorderedList= document.createElement('ul');
    for (let i=0;i<hours.length;i++){
      let arrayelements=document.createElement('li');
      let arrayhours=document.createElement('li');
      let totalArray=document.createElement('li');
      arrayelements.innerText=Seattle.cookies[i];
      arrayhours.innerText=hours[i];
      totalArray.innerText=[hours[i]+':'+this.cookies[i]+' cookies'];
      unorderedList.appendChild(totalArray);
    }
    subtitle.innerText=this.subtitle;
    main.appendChild(subtitle);
    main.appendChild(unorderedList);
    let sum=document.createElement('li');
    sum.innerText='  Total :'+this.sum+' cookies';
    unorderedList.appendChild(sum);
    main=document.getElementById('demo');
  }
};
Dubai.consumptionClaculator();
Dubai.render();


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
      this.sum=this.sum+numberOfCookies;
    }
    console.log(this.sum);
    return this.cookies,this.sum;
  },
  render :function(){let main=document.getElementById('demo');
    let subtitle=document.createElement('h2');
    let unorderedList= document.createElement('ul');
    for (let i=0;i<hours.length;i++){
      let arrayelements=document.createElement('li');
      let arrayhours=document.createElement('li');
      let totalArray=document.createElement('li');
      arrayelements.innerText=Seattle.cookies[i];
      arrayhours.innerText=hours[i];
      totalArray.innerText=[hours[i]+':'+this.cookies[i]+' cookies'];
      unorderedList.appendChild(totalArray);
    }
    subtitle.innerText=this.subtitle;
    main.appendChild(subtitle);
    main.appendChild(unorderedList);
    let sum=document.createElement('li');
    sum.innerText='  Total :'+this.sum+' cookies';
    unorderedList.appendChild(sum);
    main=document.getElementById('demo');

  }
};
Paris.consumptionClaculator();
Paris.render();



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
      this.sum=this.sum+numberOfCookies;
    }
    console.log(this.sum);
    return this.cookies,this.sum;
  },
  render :function(){let main=document.getElementById('demo');
    let subtitle=document.createElement('h2');
    let unorderedList= document.createElement('ul');
    for (let i=0;i<hours.length;i++){
      let arrayelements=document.createElement('li');
      let arrayhours=document.createElement('li');
      let totalArray=document.createElement('li');
      arrayelements.innerText=Seattle.cookies[i];
      arrayhours.innerText=hours[i];
      totalArray.innerText=[hours[i]+':'+this.cookies[i]+' cookies'];
      unorderedList.appendChild(totalArray);
    }
    subtitle.innerText=this.subtitle;
    main.appendChild(subtitle);
    main.appendChild(unorderedList);
    let sum=document.createElement('li');
    sum.innerText='  Total :'+this.sum+' cookies';
    unorderedList.appendChild(sum);
    main=document.getElementById('demo');
  }
};
Lima.consumptionClaculator();
Lima.render();
