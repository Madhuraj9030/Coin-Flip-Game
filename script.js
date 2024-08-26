// Connect Wallet Functionality (Pseudo-implementation)
document.getElementById('connect-wallet').addEventListener('click', async () => {
    // Here, you would add logic to connect to a wallet like MetaMask or Phantom
    // For now, we'll assume the wallet is connected
    alert('Wallet connected!');
    document.getElementById('game').style.display = 'block';
});

// Coin Flip Logic
document.getElementById('heads').addEventListener('click', () => playGame(0));
document.getElementById('tails').addEventListener('click', () => playGame(1));

function playGame(userGuess) {
    const betAmount = document.getElementById('bet-amount').value;
    if (!betAmount || betAmount <= 0) {
        alert('Please enter a valid bet amount.');
        return;
    }

    // Simulate coin flip (0 = heads, 1 = tails)
    const flipResult = Math.floor(Math.random() * 2);

    if (userGuess === flipResult) {
        document.getElementById('result').innerText = `You won! You doubled your bet and earned ${betAmount * 2} tokens.`;
    } else {
        document.getElementById('result').innerText = `You lost! You lost your bet of ${betAmount} tokens.`;
    }
}
