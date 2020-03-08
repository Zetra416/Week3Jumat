function groupAnimals(animals) {
  var string = "abcdefghijklmnopqrstuvwxyz";
  var res = [];

  for (var j = 0; j < string.length; j++) {
    var temp = [];
  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0] === string[j]) {
      temp.push(animals[i]);
    }
  }
  if (temp.length > 0) {
    res.push(temp);
  }
  }

  return res;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
