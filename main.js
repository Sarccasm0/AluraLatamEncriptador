const encryptionMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encryptText(inputText) {
    return inputText.replace(/[aeiou]/g, letter => encryptionMap[letter]);
}

function decryptText(inputText) {
    let decryptedText = inputText;
    for (let [key, value] of Object.entries(encryptionMap)) {
        decryptedText = decryptedText.replace(new RegExp(value, 'g'), key);
    }
    return decryptedText;
}

function handleEncryption() {
    const inputText = document.querySelector('.input-section textarea').value.toLowerCase().trim();
    if (inputText) {
        const encryptedText = encryptText(inputText);
        updateOutput(encryptedText);
    } else {
        updateOutput('');
    }
}

function handleDecryption() {
    const inputText = document.querySelector('.input-section textarea').value.trim();
    if (inputText) {
        const decryptedText = decryptText(inputText);
        updateOutput(decryptedText);
    } else {
        updateOutput('');
    }
}

function updateOutput(text) {
    const outputSection = document.querySelector('.output-section');
    if (text) {
        outputSection.innerHTML = `
            <textarea readonly>${text}</textarea>
            <button onclick="copyText()">Copiar</button>
        `;
    } else {
        outputSection.innerHTML = `
            <img class="output-image" src="gold.png" alt="Error">
            <p class="output-text">Ningún mensaje fue encontrado</p>
            <p>Ingrese el texto que deseas encriptar o desencriptar</p>
        `;
    }
}

function copyText() {
    const outputText = document.querySelector('.output-section textarea');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

document.querySelector('.encrypt-btn').addEventListener('click', handleEncryption);
document.querySelector('.decrypt-btn').addEventListener('click', handleDecryption);

updateOutput('');
