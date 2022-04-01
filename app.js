//create variables for input values
var passLength = document.getElementById('passLength')
var output = document.getElementById('output');
var output2 = document.getElementById('output2');
var digit = document.getElementById('digit');
var lower = document.getElementById('lower');
var upper = document.getElementById('upper');
var special = document.getElementById('special');
var removeSpecial = document.getElementById('removeSpecial');

var pass = [];
var finalPass = [];

function genPass(){
    //resetGenerator(); //to reset the form after submitting
    passLength = Number(passLength.value);
    console.log(passLength);
    
    passLength = checkLengthAndDivide(passLength);
    console.log(passLength);
    
    
   //checkOnlyUpperOrLower();
    if(upper.checked === true && lower.checked === true){
        output2.innerHTML = 'only check either lower or upper';
        //alert('only check either lower or upper')
        console.log('only check either lower or upper')
        return false;
       }
    // if digit is unchecked call either num or letters or special charac again
    checkNumOrSpecial();
    num();

   specialChar();
        letter();

    shuffleArray(pass);
    output.innerHTML = pass.join(' ');

}

//produces letter  password for upper and lower
function letter(){
    console.log(passLength);
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','j','k','l','m','n','o','p','q','w','x','y','z'];
     //can shuffle letters later
    //shuffleArray(letters);
    var lettersA = [];
    var lettersB = [];

    if(upper.checked === true && lower.checked === false){
        console.log(passLength);
        console.log(letters)
        shuffleArray(letters);
        for(var j =0; j<passLength; j++){
           lettersA.push(letters[j].toUpperCase())
        }
        //shuffleArray(lettersA);
        console.log(lettersA)
        genRad(lettersA);
       }

    else if(lower.checked === true && upper.checked == false){
            shuffleArray(letters);
            for(var k =0; k<passLength; k++){
           lettersB.push(letters[k].toLowerCase())
        }
        genRad(lettersB);
            }
}

//generate random 

function genRad(arr){
shuffleArray(arr);
for(var i=0; i<arr.length; i++){
    var radLetters = Math.floor(Math.random()* arr.length);
    var genLet = arr[radLetters];
    pass.push(genLet);
    console.log(pass);
}
}

//produces number password
function num(){
    console.log(passLength);
    //checkLengthAndDivide(passLength);
    var num1 =[0,1,2,3,4,5,6,7,8,9];
     if(digit.checked === true){
         //shuffle num1 
        shuffleArray(num1);
        for(var i=0; i<passLength; i++){
            var radNum = Math.floor(Math.random()* num1.length);
            var genNum = num1[radNum];
            pass.push(genNum );
            console.log(pass);
    }
       }else{
           return false;
       }
   
}

//produces special character password
function specialChar(){
    console.log(passLength);
    //checkLengthAndDivide(passLength);
   
    var specialArr = [':',';','<','>','?','"','&','!','@','#','$','%','(','','=','_','-','*','^'];
    removeSpecial = removeSpecial.value;
    console.log(removeSpecial);
    console.log(typeof(removeSpecial));
   
    //removes special character by filtering
        for(var i=0; i<removeSpecial.length; i++){
            specialArr = specialArr.filter(function(item) { 
            return item !== removeSpecial[i];
            })
    console.log(specialArr)

}
    console.log(specialArr)
   if(special.checked === true){
    //shuffle specialArr
        shuffleArray(specialArr);
       console.log(specialArr)
        for(var i=0; i<passLength; i++){
            var radSpec = Math.floor(Math.random()* specialArr.length);
            var genSpec= specialArr[radSpec];
            pass.push(genSpec );
            console.log(pass);
    }
      }else{
          return false;
      }

}

//divides the password length for letters,number and special characters
function checkLengthAndDivide(a){
        var aa = Number((a / 3).toFixed(0));
        a = aa;
    console.log(a);
    console.log(aa);
    return a;
    
}

//shuffle arrays
function shuffleArray(arr){
    for(var i = arr.length -1; i >0; i--){
        var radNum = Math.floor(Math.random() * (i+1));
        var intitialValue = arr[i];
        arr[i] = arr[radNum];
        arr[radNum ] = intitialValue;
    }
    //console.log(arr);
    return arr; 
}


//check if num or special characters are checked or not
function checkNumOrSpecial(){
if(digit.checked === false && special.checked === false){
    letter();
    letter();
}else if(digit.checked === false || special.checked === false){
         letter();
         
         }

}

