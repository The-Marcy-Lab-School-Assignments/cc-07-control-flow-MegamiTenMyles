//1
function sumOfFourAndSix(){
  let sum = 0
  for (let i = 1; i <= 1000; i++){
      if (i % 4 === 0 && i % 6 === 0){
        sum = sum + i
      }
      
  }
  return sum
}
//console.log(sumOfFourAndSix())
//2
function oddAndEvenInFifteen(){
  for(let i = 0; i <= 15; i++){
      if (i % 2 == 0){
         console.log(`${i} is even`)
      } else if (i % 2 !== 0){
          console.log(`${i} is odd`)
      }
  }
}
//oddAndEvenInFifteen()
//3
function assignGrade(score){
  if (score > 90){
      return "A"
  } else if (score >= 81){
      return "B"
  } else if (score >= 71){
      return "C"
  } else if (score >= 65 ) {
      return "D"
  } else if (score < 65){
      return "F"
  }
}
console.log(assignGrade(67))





