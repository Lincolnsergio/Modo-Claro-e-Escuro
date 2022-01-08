const botao = document.getElementById("botao");

botao.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})