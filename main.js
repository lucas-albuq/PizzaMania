$(document).ready(function() {
    $('#header').load('/assets/html/header.html', function() {
        const fazerPedido = document.querySelector(".header1_menus button");

        fazerPedido.addEventListener("click", () => window.open('/assets/pages/cardapio.html', '_self'));
    });
});

$(document).ready(function() {
    $('#footer').load('/assets/html/footer.html');
});
