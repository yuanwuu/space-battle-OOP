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

//window prompt to start <-- done!

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
// <-- window prompt Done!



const alienAccuracy = (min, max) => { // alien ship accuracy num
    return Number(Math.random().toFixed(1));
}


function randomNum(min, max) { // Random num b/w 3 to 6
    return Math.floor(Math.random() * (max - min) + min);
}


class Ship {
    constructor(hull,firepower,accuracy){
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





// const newAlien = {
//     hull: function randomNum(min, max) {
//         return Math.floor(Math.random()*(max - min) + min)
//     },
//     firepower: function alienAccuracy (min, max) { 
//         return Number(Math.random().toFixed(1));
//     },
//     accuracy: function alienAccuracy (min, max) { 
//         return Number(Math.random().toFixed(1));
//     },
    
// }

// param: hull,firepower,accuracy
const alien = new Ship (randomNum(3,6),randomNum(2,4),alienAccuracy(.6,.8))
const uss = new Ship (20,5,.7)



// alien #1 attacks uss
if (alienAccuracy(.6,.8) > uss.accuracy){
    let alienNewHp = (alien.hull - uss.hull)* -1
    let alienNewFp = (alien.firepower - uss.firepower)* -1
    console.log(`Alien: USS have been hit! \n 
    uss current hull: ${alienNewHp} \n 
    uss current firepower: ${alienNewFp}`)
    
    
} else {
    console.log(`Alien #2 prepare! \n Alien Hull: ${alien.hull} \n Alien Firepower: ${alien.firepower}`)
    // console.log(alien)
}

// USS attacks Alien
if (uss.accuracy > alienAccuracy(.6,.8)){
    let ussNewHp = (uss.hull - alien.hull)
    let ussNewFp = (uss.firepower - alien.firepower)
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


// if (alien.hull <= 0 ){
//     window.alert(`USS saved the universe from alien's attack`)
// } else {
//     window.alert(`USS, too young too naive. Dont run into me in your next life`)
// }





// if alien attacks uss w fp = 4, then uss hp -4
// console.log(alien.accuracy) // <-- this works bc alien.hull was declared in line 124
// console.log(alien.hull) // <-- this works bc .accuracy was declared in line 124