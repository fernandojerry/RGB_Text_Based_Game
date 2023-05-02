/*
  Go to store > Buttons changes to [Buy weapon, Buy health, Go town], text change to (you entered the store) Buy weapon button >[dagger, swordg
    , Go store] if number of weapon is greater than 3 button change to sell dagger and sell sword

  Go to cave > buttons change to [fight slim, fight beast, go town] text you enter the cave. you see some monsters
*/

// variables

const xpText = document.getElementById('xpText');
const healthText = document.getElementById('healthText');
const goldText = document.getElementById('goldText');
let button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const monsterNameText = document.getElementById('monsterName');
const monsterHealthText = document.getElementById('monsterHealth');
const monsterStats = document.getElementById('monsterStats');
const text = document.getElementById('text');
const picContainer = document.getElementById('images');
const pic = document.createElement('img');



button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = goFight;


let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 1;
let fighting;
let monsterHealth;
let inventory = ['stick'];

const locations = [
  {
    name: 'goStore',
    'button function': [buyWeapon, buyHealth, goTown],
    'button text': ['Buy weapon', 'Buy Health', 'Go to town'],
    text: 'you entered the store, what do you wish to buy?',
    pic: 'Assets/images/screen-3.jpg'
  },
  {
    name: 'goTown',
    'button function': [goStore, goCave, goFight],
    'button text': ['Go to store', 'Go to cave', 'Fight dragon'],
    text: 'you are at the town squre. "go to store to buy more weapon"',
    pic: 'Assets/images/townSquare.jpg'
  },
  {
    name: 'buyWeapon',
    'button function': [buyDagger, buySword, goStore],
    'button text': ['Buy dagger', 'Buy sword', 'Go to store'],
    text: 'Choose your favorite weapon',
    pic: 'Assets/images/weapons.jpg'
  }
] 

const clearPic = () => {
  picContainer.innerHTML = '';
}


const update = (location) => {
  button1.onclick = location['button function'][0]
  button2.onclick = location['button function'][1];
  button3.onclick = location['button function'][2];
  button1.innerText = location['button text'][0];
  button2.innerText = location['button text'][1];
  button3.innerText = location['button text'][2];
  text.innerText = location.text;
  pic.setAttribute('src', location.pic)
  picContainer.appendChild(pic)
}

function goTown() {
  clearPic();
  update(locations[1]);
  console.log(picContainer)
}

function goStore () {
  clearPic();
  update(locations[0]);
  console.log(picContainer);
}

function buyWeapon() {
  clearPic();
  update(locations[2]);
  console.log(picContainer);
}
function goCave() {

}
function goFight() {

}

function buyHealth() {

}

function buyDagger () {
  
}
function buySword () {

}
