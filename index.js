// Code your solution in this file!
const returnFirstTwoDrivers = function(funcArray){
  return [funcArray[0], funcArray[1]];
}
const returnLastTwoDrivers = function(funcArray){
  return [funcArray[funcArray.length-2], funcArray[funcArray.length-1]];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
