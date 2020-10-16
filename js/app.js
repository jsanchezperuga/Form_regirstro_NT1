
$(function(){

    $("#elForm").on('submit',function(){
        console.log("submit");
        return false;
    })
        
    //mostrar instrucciones onfocus

    $(":input").on('focus',function(){
        if($(this).data('info')){
            ($(this).next("small").html($(this).data('info')));
            ($(this).next("small").addClass("justify-content-xl-end"));
        }
    })
    $(":input").on('blur',function(){
        if($(this).data('info')){
            ($(this).next("small").html(""));
        }
    })

    //Validación de campos que no pueden estar vacíos (requeridos)

    var obligatorios = $(".form-requerido");

    for(i=0; i<obligatorios.length;i++){
        $(obligatorios[i]).on('blur',function(){
            campoNoVacio(this) ? 
            $(this).removeClass("is-invalid").addClass("is-valid") 
            :
            $(this).removeClass("is-valid").addClass("is-invalid");
            
        });
    }
  //Validaciones específicas
  //Validación de nombre (no menos de 3 caracteres, no incluye números)


  //Validación de email

  //Validación de 
  
})

function campoNoVacio(obj){
    return obj.value ? true:false;    
}

function validarForm(){
    return false;
}
