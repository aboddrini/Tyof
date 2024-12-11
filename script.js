<script>
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const resultDiv = document.getElementById('formResult');

    if (name && email && message) {
        resultDiv.textContent = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
        resultDiv.className = 'success';
        resultDiv.style.display = 'block';
        document.getElementById('contactForm').reset();
    } else {
        resultDiv.textContent = 'يرجى تعبئة جميع الحقول.';
        resultDiv.className = 'error';
        resultDiv.style.display = 'block';
    }
});
</script>