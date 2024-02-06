/**
 * Validation check the number is valid or not?
 */
function getValidNumber(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "please provide the valid number";
    }
    const result = num1 * num2;
    return result;
}
const validNumber = getValidNumber('five', 10);
console.log(validNumber); //please provide the valid number
const validNumber2 = getValidNumber(5, 10);
console.log(validNumber2); //50



/**
 * Validation check the String is valid or not?
 */

function getFullName(firstName, secondName){
    if(typeof firstName !== 'string'){
        return 'first name should be string';
    }
    else if(typeof se)

     fullName = firstName + ' ' + secondName;
    return fullName;


}
const name = getFullName("Hasibur", "Rahman");
console.log(names);

const name2 = getFullName("Hasibur", 44);
console.log(name2);

