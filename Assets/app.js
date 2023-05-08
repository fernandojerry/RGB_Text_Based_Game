/*
  Go to store > Buttons changes to [Buy weapon, Buy health, Go town], text change to (you entered the store) Buy weapon button >[dagger, swordg
    , Go store] if number of weapon is greater than 3 button change to sell dagger and sell sword

  Go to cave > buttons change to [fight slim, fight beast, go town] text you enter the cave. you see some monsters
*/

// variables

const xpText = document.getElementById('xpText');
const healthText = document.getElementById('healthText');
const goldText = document.getElementById('goldText');
const button1 = document.getElementById('button1');
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
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = [];

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
    pic: 'Assets/images/weapons.jpg'
  },
] 

const weapons = [
  {
    name: 'stick',
    power: '30',
    pic: 'Assets/images/images.jpg'
  },
  {
    name: 'dagger',
    power: '50',
    text: 'You added a dagger to your weapons inventory',
    pic: 'Assets/images/dagger.jpg'
  },
  {
    name: 'sword',
    power: '100',
    text: 'You added a sword to your weapons inventory',
    pic: 'Assets/images/sword.jpg'
  },
  {
    text: 'You used the first aid box',
    pic: 'Assets/images/health.jpg'
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

}

function goStore () {
  clearPic();
  update(locations[0]);
}

function buyWeapon() {
  clearPic();
  update(locations[2]);
  if (gold >= 5 && inventory.includes('stick') === false) {
    gold = gold - 5;
    currentWeapon++;
    inventory.push(weapons[0].name);
    goldText.innerText = gold;
    text.innerText = 'You have ' + inventory + ' in you inventory'
  } else {
    text.innerText = 'you corrently have ' + inventory + ' in your inventory';
    pic.setAttribute('src', weapons[0].pic)
    picContainer.appendChild(pic);
  }
}

function buyDagger () {
  clearPic();
  if (gold >= 10 && inventory.includes('dagger') === false) {
    gold = gold - 10;
    currentWeapon++;
    inventory.push(weapons[1].name);
    goldText.innerText = gold;
    text.innerText = weapons[1].text;
    pic.setAttribute('src', weapons[1].pic)
    picContainer.appendChild(pic);
    weapons
  } else {
    text.innerText = 'you alraedy have a dagger in you inventory';
    pic.setAttribute('src', weapons[1].pic)
    picContainer.appendChild(pic);
  }
}

function buySword () {
  clearPic();
  if (gold >= 15 && inventory.includes('sword') === false) {
    gold = gold - 15;
    currentWeapon++;
    inventory.push(weapons[2].name);
    goldText.innerText = gold;
    text.innerText = weapons[2].text;
    pic.setAttribute('src', weapons[2].pic)
    picContainer.appendChild(pic);
  } else {
    text.innerText = 'you alraedy have a sword in you inventory';
    pic.setAttribute('src', weapons[2].pic)
    picContainer.appendChild(pic);
  }
}

function buyHealth() {
  if (gold >= 20) {
    gold = gold - 20;
    goldText.innerText = gold;
    health += 100;
    healthText.innerText = health;
    text.innerText = weapons[3].text;
    pic.setAttribute('src', weapons[3].pic)
    picContainer.appendChild(pic);
  } else{
    text.innerText = 'not enough gold for treatment'
  }
}

function goCave() {

}
function goFight() {

}

