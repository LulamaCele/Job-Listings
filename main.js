import jobData from "./data.json" assert { type: "json" };
console.log(jobData);

let count = 0;
let innerCount = 0;

let mainDiv = document.createElement("div");
mainDiv.className = "container";

while (count <= 10) {
  let itemDiv = document.createElement("div");
  itemDiv.id = "item"; 
//   + jobData[count].id;
  let companyLogo = document.createElement("img");
  companyLogo.src = jobData[count].logo;
  itemDiv.appendChild(companyLogo);

  let companyName = document.createElement("p");
  companyName.className = "company";
  companyName.innerHTML = jobData[count].company;
  itemDiv.appendChild(companyName);

  let jobPosition = document.createElement("p");
jobPosition.className = "position";
jobPosition.innerHTML = jobData[count].position;
itemDiv.appendChild(jobPosition);

let ul = document.createElement("ul");
let daysPosted = document.createElement("li");
daysPosted.className = "postDate";
daysPosted.innerHTML = jobData[count].postedAt;
ul.appendChild(daysPosted);

let contractType = document.createElement("li");
contractType.className = "contract";
contractType.innerHTML = jobData[count].contract;
ul.appendChild(contractType);

let jobLocation = document.createElement("li");
jobLocation.className = "location";
jobLocation.innerHTML = jobData[count].location;
ul.appendChild(jobLocation);
itemDiv.appendChild(ul);

let divider = document.createElement("div");
divider.id = "line";
itemDiv.appendChild(divider);

let keyWords = document.createElement("div");
keyWords.className = "descriptions";
keyWords.innerHTML = jobData[count].level;
keyWords.innerHTML = jobData[count].role;
if (innerCount = jobData[count].languages.length - 1){
    keyWords.innerHTML = jobData[count].languages[innerCount];
    innerCount++;
}

console.log("language lengths" + jobData[count].languages.length);
keyWords.innerHTML = jobData["tools"];
itemDiv.appendChild(keyWords);

  mainDiv.appendChild(itemDiv);
  document.body.appendChild(mainDiv);

  count++;
}

// let mainDiv = document.createElement("div");
// mainDiv.className = "container";

// let itemDiv = document.createElement("div");
// itemDiv.id = "item" + jobData;
// let companyLogo = document.createElement("img");
// companyLogo.src = "";
// itemDiv.appendChild(companyLogo);

// let companyName = document.createElement("p");
// companyName.className = "company";
// itemDiv.appendChild(companyName);

// let jobPosition = document.createElement("p");
// jobPosition.className = "position";
// itemDiv.appendChild(jobPosition);

// let ul = document.createElement("ul");
// let daysPosted = document.createElement("li");
// daysPosted.className = "postDate";
// ul.appendChild(daysPosted);

// let contractType = document.createElement("li");
// contractType.className = "contract";
// ul.appendChild(contractType);

// let jobLocation = document.createElement("li");
// jobLocation.className = "location";
// ul.appendChild(jobLocation);
// itemDiv.appendChild(ul);

// let divider = document.createElement("div");
// divider.id = "line";
// itemDiv.appendChild(divider);

// let keyWords = document.createElement("div");
// keyWords.className = "descriptions";
// itemDiv.appendChild(keyWords);

// mainDiv.appendChild(itemDiv);

// document.body.appendChild(mainDiv);
