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



// < --------------- Window Prompt ------------------- > 
// let guest = prompt (`Hey, how are you? \n wanna play a game? \n and your name is?`)
// if (guest === null || guest === '') {
//     txt = 'hi, no name';
// } else {
//     txt = `hello, ${guest}`
// }
// alert(txt);

// const toPlay = confirm ('launch attack?')
// if (toPlay === null || toPlay === '') {
//     alert (`Have an awful day. :D`);
// } else {
//     alert (`open your console and start playing!`)
// }
// < --------------- Window Prompt ------------------- > 




// < --------------- fns to generate random # in range ------------------- > 
/* 
const alienAccuracy = (min, max) => { // alien ship accuracy num
    return Number(Math.random().toFixed(1));
}

function randomNum(min, max) { // Random num b/w 3 to 6
    return Math.floor(Math.random() * (max - min) + min);
}

const aHull = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);  
}

const aFire = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);  
}

const aAcc = (min, max) => {
    return Number(Math.random().toFixed(1));
}


const alien = new Ship (randomNum(3,6),randomNum(2,4),alienAccuracy(.6,.8))
const alien = new Alienships ((3,6), (2,4), (.6,.8))
*/

class Ship {
    constructor(name,hull,firepower,accuracy){
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }

    // toAttack (uss,alien) {
    //     if (Math.random() < alien[0].accuracy) {
    //         // this.hull: hp will be decrese if you got hit. 
    //         console.log('You have been hit!');
    //     }  
       
    // }

    game () {
        if (hull === 0) {
            window.alert('Game Over!')
        }
    }
}

class Alienships {
    constructor(name){
        this.name = name
        this.aHull = Math.floor(Math.random() * 4) + 3 // Random num b/w 3 to 6
        this.aFire = Math.floor(Math.random() * 3) + 2 // Random num b/w 2 to 4
        this.aAcc = (Math.floor(Math.random() * 3) + 6) / 10 // Random num from .6 to .8
    }
}


let alienTeam = [];
alienTeam.push((al1 = new Ship('Alien #1')));
alienTeam.push((al2 = new Ship('Alien #2')));
alienTeam.push((al3 = new Ship('Alien #3')));
alienTeam.push((al4 = new Ship('Alien #4')));
alienTeam.push((al5 = new Ship('Alien #5')));
alienTeam.push((al6 = new Ship('Alien #6')));
alienTeam.push((al7 = new Ship('Alien #7')));
// console.log(alienTeam)

const alien = new Alienships(alienTeam[0])
const uss = new Ship ('USS',20,5,.7)
// console.log (alien)
// console.log (uss)



// < ---------------Alien attacks USS------------------- > 

if (alien.aAcc > uss.accuracy){
    let alienNewHp = (alien.aHull - uss.hull)* -1
    let alienNewFp = (alien.aFire - uss.firepower)* -1
    console.log(`Alien: USS have been hit! \n 
    uss current hull: ${alienNewHp} \n 
    uss current firepower: ${alienNewFp}`)
    
} else {
    console.log(`Alien #2 prepare! \n 
    Alien Hull: ${alien.aHull} \n 
    Alien Firepower: ${alien.aFire}`)
    // console.log(alien)
}


// < ---------------USS attacks Alien------------------- > 

if (uss.accuracy > alien.aAcc){
    let ussNewHp = (uss.hull - alien.aHull)
    let ussNewFp = (uss.firepower - alien.aFire)
    console.log(`USS: Alien#1 have been hit! \n 
    alien current hull: ${ussNewHp} \n 
    alien current firepower: ${ussNewFp}`)
    // uss.hull - alien.hull
    // uss.firepower - alien.firepower
    // console.log(`USS: hit made! \n USS Hull: ${uss.hull} \n USS Firepower: ${uss.firepower}`)
} else {
    console.log(`USS Retreat! \n USS Hull: ${uss.hull} \n USS Firepower: ${uss.firepower}`)
    // console.log(uss)
}





// // uss attacks alien #1
// if (uss.hull > alien.hull){
//     console.log(`USS HP: ${uss.hull} v. Alien HP: ${alien.hull}, Order: attack Alien`)
// } else if (uss.hull === 0) {
//     console.log(`${uss.hull} < ${alien.hull}: retreat?`)
// } else {
//     console.log(`Game Over`)
// }


// if (alien.aHull <= 0 ){
//     window.alert(`USS saved the universe from alien's attack`)
// } else {
//     window.alert(`USS, too young too naive. Dont run into me in your next life`)
// }





// if alien attacks uss w fp = 4, then uss hp -4
// console.log(alien.accuracy) // <-- this works bc alien.hull was declared in line 124
// console.log(alien.hull) // <-- this works bc .accuracy was declared in line 124