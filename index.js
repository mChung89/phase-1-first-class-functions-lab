// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    const drivers = arr.slice(0,2);
    return drivers
}

function returnLastTwoDrivers(arr) {
    const drivers = arr.slice(-2);
    return drivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }
}

function fareDoubler(fare) {
    const doubler = createFareMultiplier(2)(fare);
    return doubler
}

function fareTripler(fare) {
    const tripler = createFareMultiplier(3)(fare);
    return tripler
}

function selectDifferentDrivers(arrayOfDrivers, either) {
    let select = either(arrayOfDrivers);
    return select
}