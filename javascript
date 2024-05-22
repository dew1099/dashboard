document.getElementById('send-btn').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        // Send user input to backend or process it locally
        // Append user input to chat window
        appendUserMessage(userInput);
        // Clear input field
        document.getElementById('user-input').value = '';
    }
});

function appendUserMessage(message) {
    var chatWindow = document.querySelector('.chat-window');
    var messageElement = document.createElement('div');
    messageElement.textContent = 'User: ' + message;
    chatWindow.appendChild(messageElement);
}
