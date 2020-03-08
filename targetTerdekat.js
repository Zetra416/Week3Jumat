function targetTerdekat(arr) {
  var countO= 0;
  var arrTemp = [];
  var resArr = [];

//mencari posisi
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] ===  "x"){
      arrTemp.push(i);
    }
    else if(arr [i] === "o") {
      countO +=i;
    }
  }

//mencari selisih
  for (var j = 0; j < arrTemp.length; j++) {
    if (arrTemp[j] > countO) {
      resArr.push(arrTemp[j] - countO);
    }
    else if (arrTemp[j] < countO) {
      resArr.push(countO - arrTemp[j]);
    }
  }

//mencari hasil

  for (var k = 0; k < resArr.length; k++) {
    if (resArr[k] < res) {
      res = resArr[k];
    }
  }
  var res=resArr[0];
  if (resArr.length === 0) {
    return res = 0;
  }

return res;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
