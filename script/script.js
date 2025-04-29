const Form = document.getElementById('EmailForm');
const EmailInput = document.getElementById('EmailForm_Email');
const Message = document.getElementById('EmailForm_Message');

Form.addEventListener('submit', function (event) {
    event.preventDefault();

    const EmailValue = EmailInput.value;
    const EmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!EmailPattern.test(EmailValue)) {
        Message.textContent = 'Por favor, insira um e-mail válido. Exemplo: exemplo@dominio.com';
        Message.style.color = 'red';
    } else {
        Message.textContent = 'E-mail válido!';
        Message.style.color = 'green';
    }
});