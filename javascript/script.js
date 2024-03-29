const popup = document.getElementById("popup");

const success = document.getElementById("success");

const card = document.querySelector('.card')
const submit = document.getElementById("submit"); 

submit.addEventListener('click', ()=>{
    card.style.transform = `translateY(20vh)`;
    // document.write("hii")
})

success.addEventListener('click', ()=>{
    card.style.transform = `translateY(-100vh)`;
    // document.write("hii")
})