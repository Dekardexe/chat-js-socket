function submitInputs() {
    const fileInput = document.getElementById('fileInput').files;
    const input = document.querySelector(`.inputMessage`).value;

    if ((input) && (input.match(/\S/)) || (fileInput.length)) {
        if (fileInput.length) {
            const reader = new FileReader();
            reader.readAsDataURL(fileInput[0]);

            new Promise((res, rej) => {
                reader.onload = () => {
                    res(reader.result);
                };
                reader.onerror = () => {
                    rej(new Error)
                }
            }).then(
                image => {
                    socket.emit('sendMessage', input, getCurrentDate(), image)
                }
            ).catch(error => console.log(error))
        }
        else {
            socket.emit('sendMessage', input, getCurrentDate())
        }

        document.getElementById('fileInput').value = "";
        document.querySelector('.inputMessage').value = "";
    }
}

function uploadFile() {
    document.getElementById("fileInput").click();
}

function addListener() {
    const inputElement = document.querySelector('.inputMessage');
    inputElement.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            submitInputs();
        }
    });
}

addListener();
