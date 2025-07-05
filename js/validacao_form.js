// Executa o código somente depois que todo o documento estiver carregado
$(document).ready(function () {
    // Seleciona o formulário com id "form-contato"
    const $form = $("#form-contato");

    // Se o formulário não existir na página, encerra a função
    if ($form.length === 0) return;

    // Quando o formulário for enviado
    $form.on("submit", function (e) {
        // Impede o envio tradicional do formulário (POST ou GET)
        e.preventDefault();

        // Cria um array para armazenar mensagens de erro
        let erros = [];

        // Coleta e remove espaços dos valores dos campos do formulário
        const nome = $form.find("[name='nome']").val().trim();
        const email = $form.find("[name='email']").val().trim();
        const mensagem = $form.find("[name='mensagem']").val().trim();

        // Expressão regular para validar o formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Valida o campo nome (mínimo de 3 caracteres)
        if (nome.length < 3) {
            erros.push("Por favor, informe um nome válido (mínimo 3 caracteres).");
        }

        // Valida o campo e-mail usando a regex
        if (!emailRegex.test(email)) {
            erros.push("Por favor, informe um e-mail válido.");
        }

        // Valida a mensagem (mínimo de 10 caracteres)
        if (mensagem.length < 10) {
            erros.push("A mensagem deve ter pelo menos 10 caracteres.");
        }

        // Se houver erros, exibe alerta e não continua
        if (erros.length > 0) {
            mostrarAlerta(erros.join("\n")); // Junta as mensagens com quebras de linha
        } else {
            // Se não houver erros, redireciona para a página de agradecimento
            window.location.href = "obrigado.html";
        }
    });

    // Função para exibir alerta customizado na tela
    function mostrarAlerta(mensagem) {
        // Seleciona o texto e o fundo do alerta
        $('#alerta-msg').text(mensagem);              // Define o texto do alerta
        $('#alerta-overlay').removeClass('hidden');   // Mostra o alerta (remove classe que o escondia)
    }

    // Função global para fechar o alerta (usada no botão OK do alerta)
    window.fecharAlerta = function () {
        $('#alerta-overlay').addClass('hidden');      // Esconde novamente o alerta
    };
});
