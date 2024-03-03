let selectElement = document.getElementById('mySelect')
let elMyH2 = document.querySelector('.myH2')
let elKattaTitle = document.querySelector('.Katta__title')
const selectedOptions = []
 let  newSelectedOptions = document.createElement('option')
 newSelectedOptions.textContent = 'myH2' 
 newSelectedOptions.value = 'myH2'
 function fnNoni(value){
    elMyH2.textContent = value
 }
 


let arr = []
function fn1() {
    if (arr[arr.length - 1] !== '25cm') {
        arr = [ '25cm']
        
    } else {
        arr.pop('25cm'); 
    }
    elKattaTitle.textContent = arr
}
function fn2() {
    if (arr[arr.length - 1] === '30cm') {
        arr = [ '30cm']
        arr.pop('25cm'); 
        arr.push('30cm'); 
    } else {
        arr.pop('35cm')
        arr.push('30cm'); 
      
        
    }
    elKattaTitle.textContent = arr
}
function fn3() {
    if (arr[arr.length - 1] !== '35cm') {
        arr = [ '35cm'] 
    } else {
        arr.pop('35cm'); 
       
    }
    elKattaTitle.textContent = arr
    
}

let elDor = document.querySelector('.dor')
let elInp1 = document.querySelector('.inp1')
let elInp2 = document.querySelector('.inp2')
let elInp3 = document.querySelector('.inp3')
let elInp4 = document.querySelector('.inp4')
let elInp5 = document.querySelector('.inp5')
let elInp6 = document.querySelector('.inp6')
let elBod = document.querySelector('.bod')
let elSir = document.querySelector('.sir')
let elOutput = document.querySelector('.output')
let elOutput2 = document.querySelector('.output2')
let elOutput3 = document.querySelector('.output3')
let elOutput4 = document.querySelector('.output4')
let elOutput5 = document.querySelector('.output5')
let elOutput6 = document.querySelector('.output6')
function ustiga(){
   if(elInp1.checked){
    elOutput.textContent = '+ Pomidor'
    elDor.style.display = 'none'
    elBod.style.display = 'none'
    elSir.style.display = 'none'
   }else{
    elOutput.textContent = ''
   }
}
function fn4(){
    if(elInp2.checked){
     elOutput2.textContent = '+ Kurka'
        elDor.style.display = 'none'
        elBod.style.display = 'none'
        elSir.style.display = 'none'
    }else{
     elOutput2.textContent = ''
    }
 }
 function fn5(){
    if(elInp3.checked){
     elOutput3.textContent = '+ Zaytun'
     elDor.style.display = 'none'
     elBod.style.display = 'none'
     elSir.style.display = 'none'
    }else{
     elOutput3.textContent = ''
    }
 }
 function fn6(){
    if(elInp4.checked){
     elOutput4.textContent = '+ Tuzlangan Bodiring'
     elDor.style.display = 'none'
     elBod.style.display = 'none'
     elSir.style.display = 'none'
    }else{
       elOutput4.textContent = ''
    }
 } 
 function fn7(){
    if(elInp4.checked){
     elOutput4.textContent = '+ Tuzlangan Bodiring'
     elDor.style.display = 'none'
     elBod.style.display = 'none'
     elSir.style.display = 'none'
    }else{
       elOutput4.textContent = ''
    }
 } 
 function fn8(){
    if(elInp5.checked){
     elOutput5.textContent = '+ Qoziqorin'
     elDor.style.display = 'none'
     elBod.style.display = 'none'
     elSir.style.display = 'none'
    }else{
       elOutput5.textContent = ''
    }
 } 
 function fn9(){
    if(elInp6.checked){
     elOutput6.textContent = '+ Qazi'
     elDor.style.display = 'none'
     elBod.style.display = 'none'
     elSir.style.display = 'none'
    }else{
       elOutput6.textContent = ''
    }
 } 
 let elInp7 = document.querySelector('.inp7')
 let elInp8 = document.querySelector('.inp8')
 let elOutput7 = document.querySelector('.output7')
 let elOutput8 = document.querySelector('.output8')
 let elAchch = document.querySelector('.achch')
 let elPish = document.querySelector('.pish')

 function fn10(){
    if(elInp8.checked){
        elOutput7.textContent = '+ Achchiq'
        elAchch.style.display = 'none'
        elPish.style.display = 'none'
    }else{
        elOutput7.textContent = ''
    }
 }
 function fn11(){
    if(elInp7.checked){
        elOutput8.textContent = '+ Pishloq'
        elAchch.style.display = 'none'
        elPish.style.display = 'none'
    }else{
        elOutput8.textContent = ''
    }
 }
