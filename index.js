// password output
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
// copy button
const copyBtn = document.querySelector("[data-copy]");
// copy message
const copyMsg = document.querySelector("[data-copyMsg]");
// length of password
const lengthDisplay = document.querySelector("[data-lengthNumber]");
// slider
const inputSlider = document.querySelector("[data-lengthSlider]");
// uppercase checkbox
const uppercaseCheck = document.querySelector("#uppercase");
// lowercase checkbox
const lowercaseCheck = document.querySelector("#lowercase");
// include numbers
const numberCheck = document.querySelector("#numbers");
// symbols Checkbox
const symbolCheck = document.querySelector("#symbols");
// strength indicator
const indicator = document.querySelector("[data-indicator]");
// all check-box
const allCheckBox = document.querySelectorAll("input[type=checkbox]"); 
// generate Btn
const generateBtn = document.querySelector(".generateButton");
const symbols = ['!', '@', '#', '$', '%', '&', '*', '+', '-', '/', '=', '?', '^', '_', '~'];


let password = "";
let passwordLength = 10;
let checkCount = 1;

// set strength circle color to grey
indicator.setAttribute("style","background-color:[%bfbfbf]");

// function call:
handleSlider()
// setIndicator("#bfbfbf")
// functions
// default check:
uppercaseCheck.checked = true;
// set passwordLength
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerHTML = passwordLength; 
    // more function to add
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength-min)*100/(max-min)) + "% 100%"
}
function setIndicator(color){
    // color
    indicator.style.backgroundColor = color;
    // shadow
    indicator.style.boxShadow =`0px 0px 12px 1px ${color}`;
}
// general function:
function getRandomInteger(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}
// indivisual fucntion:-
function getRandomDigit() {
    return getRandomInteger(0,9);
}
function getLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}
function getUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}
function getSymbol(){
    const randomIndex = getRandomInteger(0,symbols.length);
    return symbols[randomIndex];
}

// strength calulation function:
function calcStrenth(){
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;
    if(uppercaseCheck.checked) hasUpper=true;
    if(lowercaseCheck.checked) hasLower=true;
    if(numberCheck.checked) hasNumber = true;
    if(symbolCheck.checked) hasSymbol = true;

    if(hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8){
        setIndicator("#4caf50");
    }else if((hasLower||hasUpper) && (hasNumber||hasSymbol) && passwordLength>=8){
        setIndicator("#ff0");
    }else{
        setIndicator("#f00");
    }
}

// copied function:
async function copyContent(){
   
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
            copyMsg.innerText = "Password is not Generated yet";
            copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = "Failed"
    }
    // to make copy span visible
    copyMsg.classList.add("active");
    setTimeout(function (){
        copyMsg.classList.remove("active");
    },2000)
}

// event Listeners:
inputSlider.addEventListener('input',(Event) =>{
    // lengthDisplay.innerHTML = Event.target.value;
    passwordLength = Event.target.value;
    handleSlider();
})
// copy button:
copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value){
        copyContent();
    }
})

function shufflePassword(array){
    // Fisher Yates Method:
    for(let i=0;i<array.length/2;i++){
        // random j
        const j= Math.floor(Math.random() * (i+1));
        const temp = array[i];
        // swap with predictable:
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el)=>(str+=el));
    return str;
}

function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    });
   
}
allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
})



generateBtn.addEventListener('click',()=>{
    // Toggle the 'clicked' class on the button element
    generateBtn.classList.add('clicked');

    // Set a timeout to remove the 'clicked' class after 2 seconds
    setTimeout(function() {
        generateBtn.classList.remove('clicked');
    }, 1000); // 2000 milliseconds = 2 seconds

    // none of the checkbox is selected
    if(checkCount <= 0){
        return;
    }
    // passwordLength is less than checkcount:
    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider()
    }
    // remove old password:
    password="";
    // let's put the stuff mentioned by checkboxes:
    // if(uppercaseCheck.checked){
    //     password += getUpperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password += getLowerCase();
    // }
    // if(numberCheck.checked){
    //     password += getRandomDigit();
    // }
    // if(symbolCheck.checked){
    //     password+=getSymbol();
    // }

    // array of random function:
    let funcArr = [];
    if(uppercaseCheck.checked){
        funcArr.push(getUpperCase);
    }
    if(lowercaseCheck.checked){
        funcArr.push(getLowerCase);
    }
    if(numberCheck.checked){
        funcArr.push(getRandomDigit);
    }
    if(symbolCheck.checked){
        funcArr.push(getSymbol);
    }
    // compulsory additions:
    for(let i=0;i<funcArr.length;i++){
        password += funcArr[i]();
    }
    // remaining addition:
    for(let i=0;i<passwordLength-funcArr.length;i++){
        let randomIndex = getRandomInteger(0,funcArr.length);
        password += funcArr[randomIndex]();
    }

    // shuffle the password:by converting password in array
    password = shufflePassword(Array.from(password));

    // display
    passwordDisplay.value = password;
 
     // strength:
    calcStrenth();
    
})

