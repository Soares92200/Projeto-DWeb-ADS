$("#sair").click(function(){
    swal({
        title:"Logout",
        text:"Você deseja sair de sua conta?",
        icon:"warning",
        buttons:['Cancelar','Sim'],
        dangerMode:true
    }).then(function(isConfirm){
        if(isConfirm){
            window.location.href="index.html";
        }
    });
});

$("#sobre").click(function(){
    window.location.href="sobre.html"; 
});

$("#logo").click(function(){
    window.location.href="index.html"; 
});

$(document).ready(function() {
    // Desabilita o botão de submissão por padrão
    $("#entrar").prop("disabled", true);

    $("#matricula_e-mail").blur(function() {
        var dado = $(this).val();
        var regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        var regexNumero = /^[0-9]+$/;

        if (regexEmail.test(dado) || regexNumero.test(dado)) {
            // O dado é um número ou um e-mail
            // Habilita o botão de submissão
            $("#entrar").prop("disabled", false);
        } else {
            swal({
                position: 'top-end',
                title: 'Por favor, insira o número da matrícula ou um e-mail válido.',
                showConfirmButton: false,
                timer: 1500
            });
            $("#meuBotao").prop("disabled", true);
        }
    });
});

$("#lapis").click(function() {
    if ($("input").prop("disabled")) {
        $("input").prop("disabled", false);
    } else {
        $("input").prop("disabled", true);
    }
});

$("#nova_consulta").click(function(){
    window.location.href="agendamento.html"; 
});

$("#voltar").click(function(){
    window.location.href="principal.html"; 
});

$(".yellow-button").click(function(){
    window.location.href="edicao_agendamento.html"; 
});

$(".red-button").click(function() {
    var linha = $(this).closest("tr");
    linha.remove();
});