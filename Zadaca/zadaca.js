function sayHello(){
    return 'hello';
}

function addNumbers(value1,value2){
    return value1 + value2;
}

function getTriple(num) {
    return num * 3;
}


function evenNum(num){
    let res = '';

    if (!(num % 2)) res += 'even';

    return res ? res : null;
    
}

function root(num){
    return Math.sqrt(num);
}

  
  function getFullName(item) {
    var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
  }

  function getNewSum(item, index, arr){
      arr[index] = item * 10;
  }

  function getFruit(item){
      return item;
  }
  
  function getSum(item){
    var sum = 0;
    sum += item;
    return sum;
  }

  function divideNum(item,index,arr){
      arr[index] = item / 2;
  }

  function fruitStand(item){
        return item = ["apples"];
  }
  function getLength(word) {
    return word.length;
  }
module.exports = {
getTriple, 
sayHello, 
addNumbers, 
evenNum, 
root,
getFullName,
getNewSum,
getFruit,
getSum,
divideNum,
fruitStand,
getLength
}; 

