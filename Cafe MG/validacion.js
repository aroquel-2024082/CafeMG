function validarFormulario(event) {
    event.preventDefault();
    
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    
    clearErrors();
    
    let isValid = true;
    
    if (!username.value.trim()) {
        showError('username', 'El nombre de usuario es requerido');
        isValid = false;
    }
    
    if (!password.value) {
        showError('password', 'La contraseña es requerida');
        isValid = false;
    } else if (password.value.length < 6) {
        showError('password', 'La contraseña debe tener al menos 6 caracteres');
        isValid = false;
    }
    
    if (isValid) {
        window.location.href = 'login.html';
    }
    
    return isValid;
}

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    input.parentElement.appendChild(errorElement);
}

function clearErrors() {
    const errors = document.getElementsByClassName('error');
    while (errors.length > 0) {
        errors[0].parentNode.removeChild(errors[0]);
    }
}