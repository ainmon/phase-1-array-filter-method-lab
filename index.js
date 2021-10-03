const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string){
    const matchingDrivers = array.filter(function(name){
        return name.toLowerCase() === string.toLowerCase()})
    return matchingDrivers;  
}

function fuzzyMatch(array, string){
    const firstLetter = array.filter(function(name){
        return name.charAt(0) === string.charAt(0)
    })
    return firstLetter;
}

function matchName(array, string){
    const match = array.filter(function(driver){
        return driver.name === string
    })
    return match;
}
