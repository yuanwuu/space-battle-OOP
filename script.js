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

const guest = prompt (`HELP! SOS! \n wanna save the Universe from Aliens? \n (  Please type your name:  )`)
if (guest === true) {
    txt = `hello, hello ${guest}`
} else {
    txt = `hello,${guest}`
}
alert(txt);

const toPlay = confirm ('wanna launch an attack?')
if (toPlay === true) {
    alert (`Open your console and watch the battle!`);
} else {
    alert (`Have an awful day. :D`)
}

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

    toAttack (alien) {
        if (Math.random() < this.accuracy) { // this refers to USS ship
            // this.hull: hp will be decrese if you got hit. 
            alien.aHull -= this.firepower // USS is attacking Alien! 
            // console.log('USS: Alien, you have been hit!');
        }   

    }

    retreat () {
        // if (hull === 0) {
        //     window.alert('Game Over!')
        // }
       
        let response = confirm(`TEAM USS, Attack or Retreat`);
        if (response === true) {
            uss.toAttack();
        } else {
            uss.retreat();
        }
    
    }
}

class Alienships {
    constructor(name){
        this.name = name
        this.aHull = Math.floor(Math.random() * 4) + 3 // Random num from 3 to 6
        this.aFire = Math.floor(Math.random() * 3) + 2 // Random num from 2 to 4
        this.aAcc = (Math.floor(Math.random() * 3) + 6) / 10 // Random num from .6 to .8
    }

    toAttack (uss) {
        if (Math.random() < uss.hull) { // this refers to Alien ship
            // this.hull: hp will be decrese if you got hit. 
            uss.hull -= this.firepower // Alien attacks USS.
            // console.log('Alien: USS, you have been hit!');
        }   

    }
    retreat () {
        let response = confirm(`TEAM Alien, Attack or Retreat`);
        if (response === true) {
            alien.toAttack();
        } else {
            alien.retreat();
        }
    
    }

}

let alienFleet = [];
alienFleet.push((al1 = new Alienships('Alien # 1')));
alienFleet.push((al2 = new Alienships('Alien # 2')));
alienFleet.push((al3 = new Alienships('Alien # 3')));
alienFleet.push((al4 = new Alienships('Alien # 4')));
alienFleet.push((al5 = new Alienships('Alien # 5')));
alienFleet.push((al6 = new Alienships('Alien # 6')));
alienFleet.push((al7 = new Alienships('Alien # 7')));
// console.log(alienFleet)


const alien = new Alienships(alienFleet[0])
const uss = new Ship ('USS',20,5,.7)

// uss.toAttack(alienFleet[0]) // single attack from USS to Alien
// alien.toAttack(uss) // 


for (ship of alienFleet) {
    while (uss.hull >= 0 && alien.aHull >= 0) { //the exit condition
        uss.toAttack(ship)  
        alien.toAttack(uss) 
    }

    if (uss.hull <= 0){
        break; // still inside the for looop , but exit this if loop
    } else {
        toAttack = confirm(`TEAM USS, attack(ok) or retreat(canel)?`)
        if (toAttack === true){ //not retreat: keep fighting
            uss.toAttack(alienFleet[0])
            //leave it empty, bc you choose to stay in the game
        } else {// option to retreat, if decided to retreat, break to exit the for loop
            console.log(`TEAM USS is out for commerical break!`)
            break; // retreat, USS is out
        }
        //
    }

    if (alien.aAcc > uss.accuracy){
            // let alienNewHp = (alien.aHull - uss.hull) * -1
            // let alienNewFp = (alien.aFire - uss.firepower) * -1
            console.log(`Alien: USS, you have been hit!`) 
            // console.log(`uss current hull: ${alienNewHp} `) 
            // console.log(`uss current firepower: ${alienNewFp}`)
            
        } else {
            console.log(`USS: Alien, you have been hit!`)
            // console.log(`${ship} Hull: ${alien.aHull}`) 
            // console.log(`${ship} Firepower: ${alien.aFire}`)
            
        }

    if (ship.aHull <= 0){ // alien
        console.log(`TEAM Alien, get ready to battle!`)
    }
    
}


// const attBtn = document.getElementById('.attack')
// attBtn.addEventListener('click', (e) => {
//     uss.toAttack()
// })

// < ---------------Alien attacks USS------------------- > 

// if (alien.aAcc > uss.accuracy){
//     let alienNewHp = (alien.aHull - uss.hull) * -1
//     let alienNewFp = (alien.aFire - uss.firepower) * -1
//     console.log(`Alien: USS you have been hit! \n 
//     uss current hull: ${alienNewHp} \n 
//     uss current firepower: ${alienNewFp}`)
    
// } else {
//     console.log(`Alien prepare! \n 
//     Alien Hull: ${alien.aHull} \n 
//     Alien Firepower: ${alien.aFire}`)
//     // console.log(alien)
// }


// < ---------------USS attacks Alien------------------- > 

// if (uss.accuracy > alien.aAcc){
//     let ussNewHp = (uss.hull - alien.aHull)
//     let ussNewFp = (uss.firepower - alien.aFire)
//     console.log(`USS: Alien you have been hit! \n 
//     alien current hull: ${ussNewHp} \n 
//     alien current firepower: ${ussNewFp}`)
//     // uss.hull - alien.hull
//     // uss.firepower - alien.firepower
//     // console.log(`USS: hit made! \n USS Hull: ${uss.hull} \n USS Firepower: ${uss.firepower}`)
// } else {
//     console.log(`USS Retreat! \n 
//     USS Hull: ${uss.hull} \n 
//     USS Firepower: ${uss.firepower}`)
//     // console.log(uss)
// }


// // uss attacks alien #1
// if (uss.hull > alien.hull){
//     console.log(`USS HP: ${uss.hull} v. Alien HP: ${alien.hull}, Order: attack Alien`)
// } else if (uss.hull === 0) {
//     console.log(`${uss.hull} < ${alien.hull}: retreat?`)
// } else {
//     console.log(`Game Over`)
// }


// if (alien.aHull <= 0 ){
//     window.alert(`USS you saved the universe from alien's attack`)
// } else {
//     window.alert(`USS, Dont run into me in your next life`)
// }





// if alien attacks uss w fp = 4, then uss hp -4
// console.log(alien.accuracy) // <-- this works bc alien.hull was declared in line 124
// console.log(alien.hull) // <-- this works bc .accuracy was declared in line 124