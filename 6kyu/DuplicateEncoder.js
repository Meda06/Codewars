// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//My solution

function duplicateEncode(word){
    const input =  word.toLowerCase();
    const sortedInput = input.split('').sort();
    console.log(sortedInput)
    let newInput = ""
    let duplicates=[];
    let prevChar;
    
    for(const char of sortedInput){
      if(char === prevChar && !duplicates.includes(char)){
        duplicates.push(char)
      }
      prevChar=char;
    }
    
    for (const char of input){
      let aux
      duplicates.map((index)=>{
        if(index === char){
          newInput+=")"
          aux=true
        }
      })
      if(!aux){
        newInput+="("
      }
      aux =false;
    }
    
    return newInput;
  }