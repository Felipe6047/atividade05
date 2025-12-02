// Exemplo de funcionalidade básica
document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();
    });
});