// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(){
    let newArray=[];
    newArray.push(drivers[0] , drivers[1])

    return(newArray)
}
console.log(returnFirstTwoDrivers())
const returnLastTwoDrivers = function(){
    let newArray = [];
    newArray.push(drivers[2],drivers[3])
    return newArray;
}
console.log(returnLastTwoDrivers())
let selectingDrivers = [ returnFirstTwoDrivers , returnLastTwoDrivers] 

function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    }
  }

let fareQuintupler = createFareMultiplier(4);
const intitial = 10;
const final=fareQuintupler(intitial)
console.log(final)

const fareDoubler = createFareMultiplier(2);
const first = 2;
const last = fareDoubler(first)
console.log(last)



const fareTripler = createFareMultiplier(3);
const First = 8;
const Last = fareTripler(first)
console.log(last)

function selectDifferentDrivers(drivers , selectFunction){
    return selectFunction(drivers);
}

function selectDifferentDrivers(driversArray, driversFunction) {
    return driversFunction(driversArray);
  }

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));