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




// Variables

function accNum(min,max) {
    return Math.random().toFixed(3)
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
        if (this.retreat === true) {
            console.log('Game Over!')
        }
    }
}



const ussShip = new UssShip(20,5,.7)
console.log(ussShip)

const alienShip = new AlienShip(randomNum(3,6),randomNum(2,4),alienAccNum(.6,.8))
console.log(alienShip)



// // uss attacks alien #1
// const alienShpFty = [Alien] // alien ships in fty.
// if (Alien.hull > 10){
//     goodAttack();
// } else if (Alien.hull >=4 ) {
//     alienShpFty.forEach((ele => {
//         // launch alien[i]
//         console.log('youre still in the game')
//     }))
// } else {
//     window.prompt(`game over`)
// }

// console.log(alienShpFty)

// alien attacks uss
// if (uss.hp > alien.hp){
//     attack alien
// } else if (retreat === true ) {
// } else {
//     window.prompt(`game over`)
// }

// if (alien[i].hp <= 0 ){
//     window.prompt(`USS saved the universe from alien's attack`)
// } else {
//     window.prompt(`USS, too young too naive. Dont bump into me in your next life`)
// }



