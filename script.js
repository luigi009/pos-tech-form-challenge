function enviarFormulario() {
  const nome1 = document.getElementById("nome1").value;
  const nome2 = document.getElementById("nome2").value;
  const nome3 = document.getElementById("nome3").value;
  const nome4 = document.getElementById("nome4").value;
  const mensagem = document.getElementById("mensagem").value;

  const data = {
    names: [nome1, nome2, nome3, nome4],
    message: mensagem,
  };

  fetch("https://fsdt-contact.onrender.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Mensagem enviada com sucesso!");
      console.log("Sucesso:", data);
    })
    .catch((error) => {
      alert("Erro ao enviar a mensagem!");
      console.error("Erro:", error);
    });
}
