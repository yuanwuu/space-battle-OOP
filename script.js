// SPACE BATTLE OOP

// < ------------ ALIENS (USER) ------------ >
// build 6 alien ship, start w 1 and make sure it's functionality
// aliens's weakness: attack 1 at a time
// depoly another ship after seeing the outcome of a battle


// < ------------ USS (ME) ------------ >
// attack first
// only attack in order
// if alien ship destroyed, option to make a hasty retreat
/* 
if (alien.hull < 0) {
    retreat
} else {
    attack alien ship #2
} */


// < ------------ the game ------------ >
// < ------------ attack phrase ------------ >
// USS attack alien ship #1
// if alien ship survives, it attacks USS
// if USS shp survives, USS attacks again
// if alien survives, alien attacks again and so on


// < ------------ destructive phrase ------------ >
// if USS destroy alien, USS has the option to attack alien ship #2 or retreat
// if USS retreat, GAME OVER
// USS wins the game if all alien ships are destroyed
// USS lose if USS ship was destroyed


/*
hull (HP): = 0 <-- ship ddestroyed
firepower: the amount of damage done to the hull of the target with a successful hit
accuracy: the chance between 0 and 1 that the ship will hit its target
*/



// const prompt = window.prompt(`what's your name?`)

function accuracy() {
    return Math.random().toFixed(1)
}


function alienAccNum(min,max) {
    return (Math.random()).toFixed(1)
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// console.log("Random num b/w 3 to 6")
  
// Function call
//console.log( randomNumber(3, 6) );


class UssShip {
    constructor(hull,firepower,accuracy){
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }

    attack () {
        if (Math.random() < alien[0].accuracy) {
            console.log('You have been hit!');
        } 
        
       
    }

    retreat () {
        if (this.retreat === true) {
            console.log('Game Over!')
        }
    }
}

class AlienShip {
    constructor(hull,firepower,accuracy){
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }

    attack () {
        if (Math.random() < UssShip.accuracy) {
            console.log('You have been hit!');
        } 
    }

    retreat () {
        if (alien[i] === 0 ) {
            console.log('Game Over!')
        }
    }
}


const alien = new AlienShip(randomNum(3,6),randomNum(2,4),alienAccNum(.6,.8))
const ussShip = new UssShip(20,5,.7)


// console.log(ussShip.hull)
// console.log(alien)




// uss attacks alien #1

if (alien.hull >= 4 ){
    console.log(`Alien HP: ${alien.hull} < USS HP: ${ussShip.hull}, Order: attack USS`)
} else if (alien.hull <= 3 ) {
    console.log('USS HP: 3 or less, Message: youre still in the game')
} else {
    console.log(`game over`)
}


// alien attacks uss
if (ussShip.hull > alien.hull){
    console.log(`USS HP: ${ussShip.hull} < Alien HP: ${alien.hull}, Order: attack Alien`)
} else if (ussShip.hull === false) {
    window.prompt(`${ussShip.hull} < ${alien.hull}: retreat?`)
    // console.log('retreat?')
} else {
    console.log(`game over`)
}


// if (alien.hull <= 0 ){
//     window.alert(`USS saved the universe from alien's attack`)
// } else {
//     window.alert(`USS, too young too naive. Dont bump into me in your next life`)
// }



