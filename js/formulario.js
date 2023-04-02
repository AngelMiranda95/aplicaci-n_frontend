function validarFormulario(){
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;


    if(nombre == '' || email == '' || mensaje == ''){
        alert('Debe completar todos los campos');}

        else if(!email.includes('@')) {
            alert('Ingrese una dirección de correo valida');
        }
    
    else{
        alert('Formulario enviado');
    }
     
}