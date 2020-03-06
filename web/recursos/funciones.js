/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validarForma(forma){
    //validamos el usuario
    var usuario=forma.usuario;
    if(usuario.value==""| usuario.value=="Escribir usario");{
        alert("Debe proporcionar un nombre de usuario")
        usuario.focus();
        usuario.select();
        return false;
    }
    
    //validamos el password
    var password=forma.password;
    if(password.value=="" || password.value.lenght<3){
        alert("Debe proporcionar un password al menos de 3 caracteres");
        password.focus();
        password.select();
        return false;
    }
    
    //validamos tecnologías
    var tecnologias=forma.tecnologia;
    var checkSelect=false;
    //revisamos si se seleccionó algun checkbox con un for
    for(i=0;i<tecnologias.length;i++){
        if(tecnologias[i].checked){
            checkSelect=true;
        }
    }
    if(!checkSelect){
        alert("Debe proporcionar una Tecnología");
        return false;
    }
    
    //validamos el radio de genero:
    var generos=forma.genero;
    var radioSelect=false;
    
    //revisamos radiobutton
    for(i=0;i<generos.length;i++){
        if(generos[i].checked){
            radioSelect=true;
        }
    }
    if(!radioSelect){
        alert("Debe seleccionar un genero");
        return false;
    }
    
    //validamos ocupacion:
    var ocupacion=forma.ocupacion;
    if(ocupacion.value==""){
        alert("Debe seleccionar una ocupación");
        return false;
    }
    //Formulario validado correct:
    alert("Formulario valido, enviando datos..");
    return true;
}