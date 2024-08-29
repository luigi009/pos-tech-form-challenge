document.querySelector('.form').addEventListener('submit', function (event) {

    event.preventDefault();


    const name1 = document.getElementById('nome1').value;
    const name2 = document.getElementById('nome2').value;
    const name3 = document.getElementById('nome3').value;
    const name4 = document.getElementById('nome4').value;
    const message = document.getElementById('mensagem').value;


    const data = {

        names: [name1, name2, name3, name4],
        message: message

    };

    });

    fetch('https://fsdt-contact.onrender.com/contact', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
        .then(response => {

            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert('Mensagem enviada com sucesso!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Ocorreu um erro ao enviar a mensagem.');
        });

