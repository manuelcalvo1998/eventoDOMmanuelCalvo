const form = document.querySelector("#formulario");

const enviarFormulario = (evento) => {
    evento.preventDefault();
    const {name, email, password} = evento.target;
    console.log(
        name.value,
        email.value,
        password.value
        );
        if (password.value.length ===0) alert("Contraseña invalida");
};

form.addEventListener("submit", enviarFormulario);

