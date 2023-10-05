
// const dieType = document.getElementById("die-type").value
// const dieAmount = document.getElementById("die-amount").value

let dieAmount = 10
let arrayOfRolls = []

const numberGen = () => {

    for (let i = 1; i <= dieAmount; i++) {
        const d4 = Math.floor((Math.random() * 4) + 1)
        arrayOfRolls.push(d4)
      }
}

const diceRoller = () => {

}

const rollOccurances = {}
for (const num of arrayOfRolls){
  rollOccurances[num] = rollOccurances[num] ? rollOccurances[num] + 1 : 1
}