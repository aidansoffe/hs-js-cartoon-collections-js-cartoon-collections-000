function dwarfRollCall(dwarves) {
  var newString = ''
  for(let i = 0; i < dwarves.length; i++){
     newString +=  `${i+1}. ${dwarves[i]} `
  }
   return newString
}




function summonCaptainPlanet(planeteerCalls){
planeteerCalls = planeteerCalls.map(function(each) {
  return each.toUpperCase()+'!'
});
return planeteerCalls
}




function longPlaneteerCalls(words) {
  if(words.length >= 4){
    return true
  }else {
    return false
  }




function findTheCheese (foods) {
  
for(var i = 0; i < foods.length; i++){
  var cheese = ['cheddar', 'gouda', 'camembert'];
  for(var k = 0; k < cheese.length; k++){
    
    if(foods[i] === cheese[k]){
      return cheese[k]
    }
    
  }
}
  return 'no cheese!'
}

