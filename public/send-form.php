<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $telefone = trim($_POST["phone"] ?? "");
    $empresa = trim($_POST["company"] ?? "");
    $segmento = trim($_POST["segment"] ?? "");
    $mensagem = trim($_POST["message"] ?? "");

    // Validação básica
    if (empty($nome) || empty($email) || empty($telefone) || empty($mensagem)) {
        echo json_encode([
            "success" => false,
            "message" => "Por favor, preencha todos os campos obrigatórios (nome, e-mail, telefone e mensagem)."
        ]);
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            "success" => false,
            "message" => "E-mail inválido. Por favor, informe um e-mail válido."
        ]);
        exit;
    }

    $to = "seuemail@dominio.com"; // Troque para seu e-mail real
    $subject = "Novo contato do site Confidence";
    $body = "Nome: $nome\nEmail: $email\nTelefone: $telefone\nEmpresa: $empresa\nSegmento: $segmento\nMensagem: $mensagem";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode([
            "success" => true,
            "message" => "Obrigado pelo contato, $nome! Sua mensagem foi enviada com sucesso. Em breve nossa equipe retornará para você."
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde ou entre em contato por telefone."
        ]);
    }
}
?>
