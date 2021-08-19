//Convert the given number into a roman numeral.
function convertToNumber() {
    let romanArr = document.getElementById('rom').value
                        .split("")                                //break the string in every character
                        .map(e => e === "I" ? e.replace(e, 1) :   //change every letter for number
                                  e === "V" ? e.replace(e, 5) :
                                  e === "X" ? e.replace(e, 10) :
                                  e === "L" ? e.replace(e, 50) :
                                  e === "C" ? e.replace(e, 100) :
                                  e === "D" ? e.replace(e, 500) :
                                  e === "M" ? e.replace(e, 1000) : e.replace(e, 0)); //case don't fill in any case, replace for 0
    //a func to test if the arg is a roman number
    let stringToNumber = romanArr.map(n => {return n = Number(n)}); //convert string elements to number
    let number = stringToNumber
                    .map(e => {  //a map to get numbers that are composed by 2 roman letters (i.e IX, XC)
                        let idx = stringToNumber.indexOf(e);
                        if (e < stringToNumber[idx+1]) {
                            return -e;
                        } else return e;
                    })
                    .reduce((a, b) => a + b); //sum all elements
    
    document.getElementById('romanNumeral').textContent = "Your answer is: " + number;
};

