document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    fetch('/assets/html/header.html')
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;

            const fazerPedido = document.querySelector(".header1_menus button");
            fazerPedido.addEventListener("click", () => window.open('/assets/pages/cardapio.html', '_self'));
        });

    fetch('/assets/html/footer.html')
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
        });
});
