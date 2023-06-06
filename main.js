import jobData from "./data.json" assert { type: "json" };
console.log(jobData);

let count = 0;
let innerCount = 0;

let mainDiv = document.createElement("div");
mainDiv.className = "container";

while (count <= 10) {
  let itemDiv = document.createElement("div");
  itemDiv.id = "item";

  // itemDiv.style.borderImageSource.url = jobData[count].logo;
  // console.log(itemDiv.style.borderImageSource.url);
  // mainDiv.appendChild(itemDiv);

  let companyLogo = document.createElement("img");
  companyLogo.src = jobData[count].logo;
  itemDiv.appendChild(companyLogo);

  let jobDetails = document.createElement("div");
  jobDetails.className = "details";

  let companyName = document.createElement("p");
  companyName.className = "company";
  companyName.innerHTML = jobData[count].company;
  jobDetails.appendChild(companyName);

  let jobPosition = document.createElement("p");
  jobPosition.className = "position";
  jobPosition.innerHTML = jobData[count].position;
  jobDetails.appendChild(jobPosition);

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
  jobDetails.appendChild(ul);

  itemDiv.appendChild(jobDetails);

  let divider = document.createElement("div");
  divider.id = "line";
  itemDiv.appendChild(divider);

  let keyWords = document.createElement("div");
  keyWords.className = "descriptions";

  let roleElem = document.createElement("span");
  let jobRole = jobData[count].role;
  roleElem.innerHTML = jobRole;
  keyWords.appendChild(roleElem);

  let levelElem = document.createElement("span");
  let jobLevel = jobData[count].level;
  levelElem.innerHTML = jobLevel;
  keyWords.appendChild(levelElem);

  for (let i = 0; i < jobData[count].languages.length; i++) {
    let langElem = document.createElement("span");
    langElem.innerHTML = jobData[count].languages[i];
    keyWords.appendChild(langElem);
  }

  for (let j = 0; j < jobData[count].tools.length; j++) {
    let toolsElem = document.createElement("span");
    toolsElem.innerHTML = jobData[count].tools[j];
    keyWords.appendChild(toolsElem);
  }

  console.log("language lengths" + jobData[count].languages.length);
  console.log("languages " + jobData[count].languages);

  itemDiv.appendChild(keyWords);

  mainDiv.appendChild(itemDiv);
  document.body.appendChild(mainDiv);

  count++;
}

// for (var i = 0; i <= adees.length(); i++) {
//   x = document.createElement('div').innerHTML = "<label class='bo bp'><input type='checkbox' name='adees[" + adees[i] + "]' value=" + adees[i] + ">Test " + adees[i] + "</label></div>";
//   document.body.appendChild(x);
// };

for (let c2 = 0; c2 <= jobData.languages.length(); c2++) {
  y = document.createElement("span").innerHTML = jobData.languages[c2];
  document.body.appendChild(y);
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
