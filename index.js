const _ = require('lodash')

function output(input){
	console.log(input)
}

function newNavi(name){
	/** Mind, Body, and Soul can be skipped due to their math **/
	return {
		name,
		sense: 0, strength: 0, charm: 0,
		info: 0, speed: 0, bravery: 0,
		coding: 0, stamina: 0, affinity: 0,
		hp: 0,
	}
}

function statNavi(navi){
	navi.hp = calculateHP()
	// element nonsense, color system from the "RPG for AI"
}

function roll(skill, difficulty){
	let rolls=[]
	let hits=0
	for(let i=0;i<skill;i++){
		let roll = _.random(1,6)
		rolls.push(roll)
		if(roll > difficulty){
			hits++
		}
	}
	return {rolls, hits}
}

let p1=0
let p2=0
while(p1 === p2){
	let p1_roll = roll(6,5)
	let p2_roll = roll(1,2)
	console.log(`Player 1 [${p1_roll.rolls.join(',')}] - ${p1_roll.hits}`)
	console.log(`Player 2 [${p2_roll.rolls.join(',')}] - ${p2_roll.hits}`)
	console.log('- - -')
	p1=p1_roll.hits
	p2=p2_roll.hits
}
if(p1 > p2){
	console.log('Player 1 Wins')
}else{
	console.log('Player 2 Wins')
}

/**
 * Gameplay loop is that the navis bonk each other like Chao in Chao Fight.
 * Sometimes they'll use chips instead of a random roll
 *
 * Players can customize their PET so that NetNavis prefer certain rolls, chips, dodging, and parrying
 * Movement does not require rolling. 
 * High Speed Stat goes first
 *
 * StraightForward Chips : Everything in Starter
 * StraightForward NCPs : Stat+1, Skill+1, Cust+3, HP+4, RedundantArray
 *
 * Chips might have elements in the form of Color
 * Control allows having Elemental attacks
 *
 * NetNavis are mechanically Indie Navis
 *
 * Map looks like this
 * [X][X][Y][Y]
 *
 * Close [ ][X][Y][ ]
 * Near  [ ][X][ ][Y]
 * Far   [X][ ][ ][Y]
 *
 * TODO Rename and retheme Navis to be simpler. BattleProgs? SnuggleBugs? DigiLife? Antigen?
 **/
