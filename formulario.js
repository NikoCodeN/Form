document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById('formulario');

    const inputs = document.querySelectorAll('#formulario input');

    inputs.forEach((input) => {
        input.addEventListener('input', validarCampo);
    });

    formulario.addEventListener('submit', function(event) {
        if (!validarFormulario()) {
            event.preventDefault();
        } else {
            alert("Gracias por registrarse");
        }
    });

    function validarCampo(e) {
        switch (e.target.name) {
            case "Nombre":
                validarNombre();
                break;
            case "Correo":
                validarCorreo();
                break;
            case "Telefono":
                validarTelefono();
                break;
            case "Password":
                validarPassword();
                break;
            case "Password2":
                validarPassword2();
                break;
            case "Fecha":
                validarFecha();
                break;
        }
    }

    function validarNombre() {
        const nombre = document.getElementById('Nombre').value;
        const grupoNombre = document.getElementById('grupo_nombre');
        const errorNombre = grupoNombre.querySelector('.formulario_input_error');
        if (nombre.length < 2) {
            grupoNombre.classList.add('formulario_grupo_incorrecto');
            grupoNombre.classList.remove('formulario_grupo_correcto');
            errorNombre.classList.add('formulario_input_error-activo');
        } else {
            grupoNombre.classList.remove('formulario_grupo_incorrecto');
            grupoNombre.classList.add('formulario_grupo_correcto');
            errorNombre.classList.remove('formulario_input_error-activo');
        }
    }

    function validarCorreo() {
        const correo = document.getElementById('Correo').value;
        const grupoCorreo = document.getElementById('grupo_correo');
        const errorCorreo = grupoCorreo.querySelector('.formulario_input_error');
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(correo)) {
            grupoCorreo.classList.add('formulario_grupo_incorrecto');
            grupoCorreo.classList.remove('formulario_grupo_correcto');
            errorCorreo.classList.add('formulario_input_error-activo');
        } else {
            grupoCorreo.classList.remove('formulario_grupo_incorrecto');
            grupoCorreo.classList.add('formulario_grupo_correcto');
            errorCorreo.classList.remove('formulario_input_error-activo');
        }
    }

    function validarTelefono() {
        const telefono = document.getElementById('Telefono').value;
        const grupoTelefono = document.getElementById('grupo_telefono');
        const errorTelefono = grupoTelefono.querySelector('.formulario_input_error');
        const regexTelefono = /^[0-9]+$/;
        if (!regexTelefono.test(telefono)) {
            grupoTelefono.classList.add('formulario_grupo_incorrecto');
            grupoTelefono.classList.remove('formulario_grupo_correcto');
            errorTelefono.classList.add('formulario_input_error-activo');
        } else {
            grupoTelefono.classList.remove('formulario_grupo_incorrecto');
            grupoTelefono.classList.add('formulario_grupo_correcto');
            errorTelefono.classList.remove('formulario_input_error-activo');
        }
    }

    function validarPassword() {
        const password = document.getElementById('Password').value;
        const grupoPassword = document.getElementById('grupo_Password');
        const errorPassword = grupoPassword.querySelector('.formulario_input_error');
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!regexPassword.test(password)) {
            grupoPassword.classList.add('formulario_grupo_incorrecto');
            grupoPassword.classList.remove('formulario_grupo_correcto');
            errorPassword.classList.add('formulario_input_error-activo');
        } else {
            grupoPassword.classList.remove('formulario_grupo_incorrecto');
            grupoPassword.classList.add('formulario_grupo_correcto');
            errorPassword.classList.remove('formulario_input_error-activo');
        }
    }

    function validarPassword2() {
        const password = document.getElementById('Password').value;
        const password2 = document.getElementById('Password2').value;
        const grupoPassword2 = document.getElementById('grupo_Password2');
        const errorPassword2 = grupoPassword2.querySelector('.formulario_input_error');
        if (password !== password2) {
            grupoPassword2.classList.add('formulario_grupo_incorrecto');
            grupoPassword2.classList.remove('formulario_grupo_correcto');
            errorPassword2.classList.add('formulario_input_error-activo');
        } else {
            grupoPassword2.classList.remove('formulario_grupo_incorrecto');
            grupoPassword2.classList.add('formulario_grupo_correcto');
            errorPassword2.classList.remove('formulario_input_error-activo');
        }
    }

    function validarFecha() {
        const fecha = new Date(document.getElementById('Fecha').value);
        const hoy = new Date();
        const grupoFecha = document.getElementById('grupo_fecha');
        const errorFecha = grupoFecha.querySelector('.formulario_input_error');
        const edad = hoy.getFullYear() - fecha.getFullYear();
        if (edad < 18 || isNaN(fecha.getTime())) {
            grupoFecha.classList.add('formulario_grupo_incorrecto');
            grupoFecha.classList.remove('formulario_grupo_correcto');
            errorFecha.classList.add('formulario_input_error-activo');
        } else {
            grupoFecha.classList.remove('formulario_grupo_incorrecto');
            grupoFecha.classList.add('formulario_grupo_correcto');
            errorFecha.classList.remove('formulario_input_error-activo');
        }
    }

    function validarGenero() {
        const generoSeleccionado = document.querySelector('input[name="Genero"]:checked');
        const grupoGenero = document.getElementById('grupo_genero');
        const errorGenero = grupoGenero.querySelector('.formulario_input_error');
        if (!generoSeleccionado) {
            grupoGenero.classList.add('formulario_grupo_incorrecto');
            grupoGenero.classList.remove('formulario_grupo_correcto');
            errorGenero.classList.add('formulario_input_error-activo');
        } else {
            grupoGenero.classList.remove('formulario_grupo_incorrecto');
            grupoGenero.classList.add('formulario_grupo_correcto');
            errorGenero.classList.remove('formulario_input_error-activo');
        }
    }

    function validarFormulario() {
        validarNombre();
        validarCorreo();
        validarTelefono();
        validarPassword();
        validarPassword2();
        validarFecha();
        validarGenero(); 

        const errores = document.querySelectorAll('.formulario_input_error-activo');
        return errores.length === 0;
    }
});

