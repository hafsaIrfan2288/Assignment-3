let Input =document.getElementById('input')
let Main =document.getElementById('main')
let Para =document.getElementById('para')

function checknum(){ 
 
 if (Input.value == ""){
  Para.innerText = '⚠️Number is Required!';
  Para.style.color='red'
} else if (Number(Input.value) % 2 === 0){
  Para.innerText = 'The Number is Even!';
  Para.style.color='green'

}else{
  Para.innerText = 'The Number Is Odd!';
}
  
}
