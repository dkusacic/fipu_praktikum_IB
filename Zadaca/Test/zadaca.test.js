const assert = require('chai').assert;
const { expect } = require('chai');
const zadaca = require('../zadaca');
const { getTriple, 
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
    } = require('../zadaca');

describe('Zadaca', function(){
it('sayHello should return hello', function(){
    let result= zadaca.sayHello();
    assert.equal(result, 'hello')
});

it('sayHello should return type string', function(){
    let result= zadaca.sayHello();
    assert.typeOf(result, 'string');
});

it("addNumbers should be above 5", function(){
    let result = zadaca.addNumbers(5,5);
    assert.isAbove(result, 5);
});

it('addNumbers should return type number', function(){
    let result= zadaca.addNumbers();
    assert.typeOf(result, 'number');
});

it("map test 1", function(){
    let numbers = [13, 20, 5, 22, 7];
    let timesThree = numbers.map(getTriple);

    expect(timesThree).to.eql([39, 60, 15, 66, 21]);
});

it("evenNum should return 'even' if number is devisible by 2", function(){
    expect(evenNum(2)).to.equal('even');
    expect(evenNum(4)).to.equal('even');
});

it("map test 2", function(){
    let numbers = [4, 9, 25, 36];
    let roots = numbers.map(root);
    expect(roots).to.eql([2, 3, 5, 6]);

});

it('map test 3',function(){
    let list = [{firstname : "Malcom", lastname: "Reynolds"},];
    let fullnames = list.map(getFullName);
    expect(fullnames).to.eql(['Malcom Reynolds']);

});

it('map test 4',function(){
    var animals = ["cat","dog","fish"];
    var lengths = animals.map(getLength);
    expect(lengths).to.eql([3,3,4]);
});

it('map test 5',function(){
    let redBr = [1 ,3, 7, 11];
    const map1 = redBr.map(x => x * 2);
    expect(map1).to.eql([2,6,14,22]);
});

it('reduce test 1', function(){
    let sum = [1,2,3,4,5].reduce((prev, curr)=>prev + curr);

    expect(sum).to.eql(15);
});

it('reduce test 2', function(){
    let sum = [10, 1, 2, 3].reduce((prev,curr)=> prev - curr);
    expect(sum).to.eql(4);
});

it('reduce test 3',function(){
    let words = ['auto','mobil'].reduce((prev,curr)=> prev + curr);
    expect(words).to.eql(['automobil']);
});
it('reduce test 4',function(){
    let sum = [1, 3, 2, 4].reduce((prev,curr)=> prev * curr);
    expect(sum).to.eql(24);
});

it('reduce test 5',function(){
    let sum = [30, 3, 2].reduce((prev,curr)=> prev / curr);
    expect(sum).to.eql(5);
});

it('reduce test 6',function(){
    const lineItems = [
        { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
        { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 }];
       const totalSum = lineItems.reduce((sum, li) => sum + li.total, 0);
    expect(totalSum).to.eql(5.5);
});

it('reduce test 7', function(){
    const dates = [
        '2019/06/01',
        '2018/06/01',
        '2019/09/01', // This is the most recent date, but how to find it?
        '2018/09/01'
      ]
      const maxDate = dates.reduce((max, d) => d > max ? d : max, dates[0]);
      expect(maxDate).to.eql('2019/09/01');
});

it('reduce test 8',function(){
    var animals = ["cat","dog","fish"];
    var total = animals.reduce((sum, word) => sum + word.length, 0);
    expect(total).to.eql(10);
})


it('forEach test 1',function(){
    let timesTen = [65, 32, 5, 8];
    timesTen.forEach(getNewSum);
    expect(timesTen).to.eql([650, 320, 50, 80]);

});

it("forEach test 2",function(){
    let basket = ["apple","pear","orange"];
    basket.forEach(getFruit);
    expect(basket).to.eql(["apple", "pear", "orange"]);
});

it("forEach test 3",function(){
    var arraySum = [1, 1, 1, 1];
    arraySum.forEach(getSum);
    expect(arraySum).to.eql([4]);

});
it("forEach test 4",function(){
    let divideN = [8, 16, 30, 420];
    divideN.forEach(divideNum);
    expect(divideN).to.eql([4, 8, 15, 210]);
});

it('forEach test 5',function(){
    let ratings = [5, 4, 5];
    let sum = 0;
let sumFunction = async function (a, b)
{
  return a + b
}
ratings.forEach(async function(rating) {
  sum = await sumFunction(sum, rating)
})
expect(sum).to.eql(0);
});

it('forEach test 6',function(){
    const red = [1,3,7]
    let brojPoziva = 0
    red.forEach(function(element) {
    brojPoziva++
})
    expect(brojPoziva).to.eql(3);
});

it('forEach test 7', function(){
    function copy(obj) {
        const copy = Object.create(Object.getPrototypeOf(obj))
        const propNames = Object.getOwnPropertyNames(obj)
      
        propNames.forEach(function(name) {
          const desc = Object.getOwnPropertyDescriptor(obj, name)
          Object.defineProperty(copy, name, desc)
        })
        return copy
      }
      const obj1 = { a: 1, b: 2 }
      const obj2 = copy(obj1)
      expect(obj2).to.eql(obj1);

});

it('forEach test 8',function(){
    let rijeci = ['one', 'two', 'three', 'four']
    const pomak = rijeci.forEach(function(rijeci){
        if (rijeci === 'two') {
        rijeci.shift() 
  }
});
    expect(pomak).to.eql(['two', 'three', 'four']);
});

it("filter test 1",function(){
    let ages = [15, 33, 62, 42];
    const punoljetan = ages.filter(ages => ages > 18);
    expect(punoljetan).to.eql([33, 62, 42]);

});
it("filter test 2",function(){
    let market = ["apples", "pears", "oranges"];
    const bag = market.filter(market => market="apples");
    expect(bag).to.eql(["apples"]);
});

it('filterTest 3', function(){
    const rijeci = ['mama', 'tata', 'stolica', 'eksplozija', 'poklon'];
    const result = rijeci.filter(rijeci => rijeci.length > 6);
    expect(result).to.eql(["stolica", "eksplozija"]);
});

it('filterTest 5', function(){
    const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
};
    let primarni = array.filter(isPrime);
    expect(primarni).to.eql([2, 3, 5, 7, 11, 13]);
})

it('filterTest 6',function(){
    let voce = ['apple', 'banana', 'grapes', 'mango', 'orange']

    function filterItems(arr, query) {
    return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
};
    let ap = filterItems(voce, 'ap');
    expect(ap).to.eql(['apple', 'grapes']);
});

it('filterTest 7', function(){
    rijeci = ['mama', 'tata', 'stolica', 'eksplozija', 'poklon']
    const deleteWords = rijeci.filter( (word, index, arr) => {
  arr.pop()
  return word.length < 6
});
const result = rijeci.filter(rijeci => rijeci.length < 6);
expect(result).to.eql(["mama", "tata"]);
});

});

