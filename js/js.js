  $(document).ready(function() {
  

    $("form").validate({
    

        rules: {
            nome:{
                required: true,
                maxlength: 70    
            },
            dtnascimento: {
                required: true,
            },
            altura:{
                required: true,
                number: true,
            
            },
            data:{
                required: true
            
            },
            peso:{
                required: true,
            },
            pressaos:{
                required: true,
            },
            caloria:{
                required: true,
                maxlength: 4
            },
            email:{
                required: true,
            },
            email1:{
                required: true,
            },
            senha1: {
                required: true,
                minlength: 6
            },
            senha2: {
                required: true,
                equalTo: "#senha1"
            },
         
            agree: "required"
        },
        messages: {
            nome:{
                required: "Este campo é obrigatório!",
                maxlength: "70 é o limite de caracteres"    
            },
            dtnascimento: {
                required: "Este campo é obrigatório!",
            },
            data: {
                required: "Campo obrigatório!",
            },
            caloria: {
                required: "Campo obrigatório!",
                maxlength: "Por favor digite no máximo 4 números"
            },
            peso: {
                required: "Este campo é obrigatório!",
            },
            altura:{
                required: "Este campo é obrigatório!",
                number: true,
            
            },
            email:{
                required: "Este campo é obrigatório!"
            },
            email1:{
                required: "Este campo é obrigatório!"
            },
            senha1: {
                required: "Este campo é obrigatório!",
                minlength: "A senha deverá ter no mínimo 6 caracteres, combinando letras e números"
            },
            senha2: {
                required: "Este campo é obrigatório!",
                equalTo: "As senhas não são idênticas."
            },
            
        }
    
    });
    $('#submit').on('click', function() {
    valid = true;   

    if (valid && $('#pressaos').val() == '') {
        alert ("Campo obrigatório!");
        valid = false;
    }

    if (valid && $('#pressaod').val() == '') {
        alert ("Campo obrigatório!");
         valid = false;
    }  
    if (valid && $('#peso').val() == '') {
        alert ("Campo obrigatório!");
         valid = false;
    }    
    if (valid && $('#data').val() == '') {
        alert ("Campo obrigatório!");
         valid = false;
    }  

    return valid;
});
  });

jQuery(function($){
   $("#pressaos").mask("999",{placeholder:"120mH"});
   $("#pressaod").mask("99",{placeholder:"80mH"});    
});

var max_chars = 5;
var max_chars1 = 4;
var max_chars2 = 3;
var max_chars3 = 2;

$('#peso').keydown( function(e){
    if ($(this).val().length >= max_chars) { 
        $(this).val($(this).val().substr(0, max_chars));
    }
});

$('#peso').keyup( function(e){
    if ($(this).val().length >= max_chars) { 
        $(this).val($(this).val().substr(0, max_chars));
    }
});

$('#caloria').keydown( function(e){
    if ($(this).val().length >= max_chars1) { 
        $(this).val($(this).val().substr(0, max_chars1));
    }
});

$('#caloria').keyup( function(e){
    if ($(this).val().length >= max_chars1) { 
        $(this).val($(this).val().substr(0, max_chars1));
    }
});

$('#pressaos').keydown( function(e){
    if ($(this).val().length >= max_chars2) { 
        $(this).val($(this).val().substr(0, max_chars2));
    }
});

$('#pressaos').keyup( function(e){
    if ($(this).val().length >= max_chars2) { 
        $(this).val($(this).val().substr(0, max_chars2));
    }
});

$(document).on('click', '#run', function(e) {
    e.preventDefault();
    $('#simple-example-table').stacktable({hideOriginal:true});
    $(this).replaceWith('<span>ran</span>');
});






