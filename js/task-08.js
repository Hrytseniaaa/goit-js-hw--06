
const form = document.querySelector('.login-form');
console.log(form);


form.addEventListener('submit', onForSubmit);


function onForSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    
    const mail = formElements.email.value.trim() ;
    const password = formElements.password.value.trim(); 
    
    if (!mail) {
        alert('введіть свою електронну адресу')
    } else if (!password) {
        alert('введи пароль друже)')
    };
    console.log('адреса електронної пошти:', mail);
    console.log('пароль:', password);

    form.reset();
}



