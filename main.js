document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    let tituloElements = document.querySelectorAll(".titulo")

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
    tituloElements.forEach((titulo) => {
        titulo.addEventListener("click", function (){
            let questionDiv = titulo.parentNode;
            
            if (questionDiv.classList.contains("not-visible")) {
            questionDiv.classList.remove("not-visible");
            questionDiv.classList.add("visible");
            } else {
            questionDiv.classList.remove("visible");
            questionDiv.classList.add("not-visible");
            }
        });
        });
    
});
