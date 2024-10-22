let btn_sub = document.querySelector("#btn_sub")
let user = document.querySelector("#login")
let pass = document.querySelector("#senha")

btn_sub.addEventListener("click", (el) => {
    if (user.value == 'admin' && pass.value == 123) {
        alert("Login Efetuado Com Sucesso!")
    }
} )