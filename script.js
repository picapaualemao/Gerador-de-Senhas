const inputPassword = document.querySelector('#password')

const inputLength = document.querySelector('#password-length')

const   uppercaseCheckEl = document.querySelector('#uppercase-check')

const   numberCheckEl = document.querySelector('#number-check')

const   simbolCheckEl = document.querySelector('#simbol-check')

const  securityIndicatorBarEl = document.querySelector('#security-indicator-bar') 

document.querySelector('#copy-1').addEventListener('click',copy)
document.querySelector('#reload').addEventListener('click',generatePassword )
let inputLengthvalue =  16





function generatePassword(){

let chars = 'abcdefghjkmnpqrstuvwxyz'
const uppercaseChar = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
const numberChar = '123456789'
const simbolChar = '?!@&*()[]' 

   if(uppercaseCheckEl.checked  ){
    chars += uppercaseChar


   }



   if(numberCheckEl .checked  ){
      chars += numberChar


   }



   if(simbolCheckEl.checked  ){
    chars += simbolChar


 }




let Password = ""



for(let i = 0; i < inputLengthvalue; i++ ) {
        
                const ramdomNumber =  Math.floor(Math.random()* chars.length)  

             
                Password += chars.substring(ramdomNumber,ramdomNumber+1)
}
inputPassword.value=Password

calculateQuality()
calculateFontSize()
} 

function calculateQuality(){
const percent = Math.round((inputLengthvalue / 64)*10 + (uppercaseCheckEl.checked ? 25:0) + (numberCheckEl.checked ? 30:0) + (simbolCheckEl.checked ? 35:0) )
securityIndicatorBarEl.style.width = `${percent}%`


if(percent > 70){
    securityIndicatorBarEl.classList.add("safe")
    securityIndicatorBarEl.classList.remove("warnin")
    securityIndicatorBarEl.classList.remove("critical")



}else if(percent >  50){
    securityIndicatorBarEl.classList.add("warnin")
    securityIndicatorBarEl.classList.remove("safe")  
    securityIndicatorBarEl.classList.remove("critical") 

}else{
    securityIndicatorBarEl.classList.add("critical")
    securityIndicatorBarEl.classList.remove("safe")
    securityIndicatorBarEl.classList.remove("warnin")

}

if(percent >= 100){
securityIndicatorBarEl.classList.add('completed')  
}else{
    securityIndicatorBarEl.classList.remove('completed')

}
}


function calculateFontSize(){

 if(inputLengthvalue > 45){
     inputPassword.classList.add("font-xs")
     inputPassword.classList.remove("font-md") 
     inputPassword.classList.remove("font-sm")
 }else if(inputLengthvalue > 30){
    
    inputPassword.classList.remove("font-xs")
    inputPassword.classList.remove("font-md") 
    inputPassword.classList.add("font-sm")

 }else if(inputLengthvalue >20){

    inputPassword.classList.remove("font-xs")
    inputPassword.classList.add("font-md") 
    inputPassword.classList.remove("font-sm")

 }else{
    inputPassword.classList.remove("font-xs")
    inputPassword.classList.remove("font-md") 
    inputPassword.classList.remove("font-sm")
 }







}









uppercaseCheckEl.addEventListener('clik',generatePassword)
numberCheckEl.addEventListener('clik',generatePassword)
simbolCheckEl.addEventListener('clik',generatePassword)






function copy(){

navigator.clipboard.writeText(inputPassword.value)

}



inputLength.addEventListener('input',function(){
    inputLengthvalue =  inputLength.value
generatePassword()
calculateQuality()
document.querySelector('#password-length-text').innerText = inputLengthvalue

})



generatePassword()  
calculateQuality()