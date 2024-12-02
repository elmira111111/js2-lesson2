const btn = document.querySelector("button")
const input = document.querySelector("input")
const h2 = document.querySelector('h2')
const modal = document.querySelector('.overlay')
const inputEmail = document.querySelector('.email-inp')
const loginBtn = document.querySelector('.Login')
const inputPassword = document.querySelector('.password-inp')


h2.addEventListener('click', ()=> {
    modal.style.display ='flex';
})

loginBtn.addEventListener('click', () =>{
    if(inputPassword.value.trim() === ''){
        inputPassword.style.borderColor = 'red';

    }else{
        inputPassword.style.borderColor = '#ccc';
    }
})

loginBtn.addEventListener('click', () =>{
    if(inputEmail.value.trim() === ''){
        inputEmail.style.borderColor = 'red';

    }else{
        inputEmail.style.borderColor = '#ccc';
    }
})






let isShow = false;

btn.addEventListener('click', ( )=> {
    isShow = !isShow;
    if (isShow === true){
        input.type = "text";
        btn.innerText = "Hide password";
    }else{
        btn.innerText ="Show password";
        input.type = 'password';
    }
} )






//date types горячие клавищы
// ctrl+a  выделяет все
// ctrl+