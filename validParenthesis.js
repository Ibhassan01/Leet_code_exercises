// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

let isValid = (str) => {

    let empty = [];

    for(let i = 0; i < str.length; i++) {
        if(str[i] ==='(' || str[i] === '{' || str[i] === '['){
            empty.push(str[i])
        } else {

            if(str.length === 0){
                return false
            }

            let symbol = str[i];
            let top = empty.pop(); 

            if(
                (symbol === ')' && top !== '(') ||
                (symbol === '}' && top !== '{') ||
                (symbol === ']' && top !== '[')
            ){
                return false
            }
            else{
                return true;
            }
        }
    }

}
