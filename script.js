//Color change functions
const colors = [
  "#B22222",
  "#A52A2A",
  "#DC143C",
  "#8B0000",
  "#B22222",
  "#CD5C5C",
  "#800000",
  "#A0522D",
  "#FF6347",
  "#FF4500"
];
const clickedQuote = document.getElementById("new-quote");
clickedQuote.addEventListener("click", function () {
  let randomNum = setRandomNum();
  document.body.style.backgroundColor = colors[randomNum];
  document.getElementById("text").style.color = colors[randomNum];
  document.getElementById("author").style.color = colors[randomNum];
});
function setRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
//Quote generation functions

let mySubjects = [
  "rainbow",
  "jetlag",
  "tricycle",
  "penthouse",
  "cricket",
  "kaboom",
  "skateboard",
  "lollipop",
  "hobbit"
];
let myVerbs = [
  "sow",
  "marinade",
  "storm",
  "facilitate",
  "export",
  "accompany",
  "believe",
  "obey",
  "refuse",
  "recycle"
];
let myOtherVerbs = [
  "reap",
  "enlighten",
  "fatten",
  "exacerbate",
  "pulverize",
  "detox",
  "conserve",
  "report",
  "amaze"
];
let myObjects = [
  "pig",
  "PS5",
  "lovebird",
  "shark",
  "barbarian",
  "Cthulhu",
  "painter",
  "lasso",
  "Veritaserum",
  "raccoon",
  "rocket launcher"
];
let myAdjectives = [
  "bright",
  "colorful",
  "promising",
  "belligerent",
  "menacing",
  "great"
];
let myAdjectivesOne = [
  "big",
  "humongous",
  "luxurious",
  "lively",
  "disappointing"
];

let myAuthors = [
  "Dude Next Door",
  "Dude From Around The Corner",
  "Gal From The Deli",
  "FreeCodeCamp Forum Dude",
  "Ancient Teenage Wisdom",
  "Old Lady Dinah",
  "My BFF",
  "Reddit Crowd",
  "Space Invaders",
  "Steven King Fan",
  "Anime Convo Gal",
  "CamperBot Glitch",
  "The Mothman",
  "Cowboy Dan",
  "Python Paul",
  "An Awesome Drag Queen",
  "Lovecraftian Monsters"
];

const switchQuote = document.getElementById("new-quote");
switchQuote.addEventListener("click", function () {
  const randomDude = setDude();
  document.getElementById("author").textContent = myAuthors[randomDude];
  function setDude() {
    return Math.floor(Math.random() * myAuthors.length);
  }
  const mySubject = mySubjects[Math.floor(Math.random() * mySubjects.length)];

  const myObject = myObjects[Math.floor(Math.random() * myObjects.length)];

  const myAdjectiveOne =
    myAdjectivesOne[Math.floor(Math.random() * myAdjectivesOne.length)];

  const myAdjective =
    myAdjectives[Math.floor(Math.random() * myAdjectives.length)];

  const myVerb = myVerbs[Math.floor(Math.random() * myVerbs.length)];

  const myOtherVerb =
    myOtherVerbs[Math.floor(Math.random() * myOtherVerbs.length)];

  let patternOne = `For every ${myAdjective} ${mySubject} there is a ${myAdjectiveOne} ${myObject} in the sky.`;

  let patternTwo = `When you ${myVerb} a ${mySubject}, you ${myOtherVerb} a ${myObject}.`;

  let patternThree = `After a ${myAdjective} ${mySubject} comes a ${myAdjectiveOne} ${myObject}.`;

  let patternFour = `A ${myAdjective} ${mySubject} knows when to ${myVerb} a ${myObject}.`;

  let patternFive = `To ${myOtherVerb} a ${myObject} you must first ${myVerb} a ${mySubject}.`;

  let patterns = [
    patternOne,
    patternTwo,
    patternThree,
    patternFour,
    patternFive
  ];

  let patternMadness = patterns[Math.floor(Math.random() * patterns.length)];

  document.getElementById("text").textContent = patternMadness;
});