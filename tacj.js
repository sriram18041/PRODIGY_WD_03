const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (!cell.textContent && !checkWinner()) {
            cell.textContent = currentPlayer;
            gameBoard[index] = currentPlayer;
            if (checkWinner()) {
                alert(`${currentPlayer} wins!`);
            } else if (!gameBoard.includes('')) {
                alert("It's a draw!");
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}
