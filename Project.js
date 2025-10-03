        $(document).ready(function() {
            let board = ["", "", "", "", "", "", "", "", ""]; // Initialize empty game board
            let currentPlayer = "X"; // Set initial player to "X"
            let gameActive = true; // Track if the game is still active

            // Function to render the board dynamically
            function renderBoard() {
                $('.board').empty(); // Clear the board

                // Loop through board array and create cells
                board.forEach((value, index) => {
                    $('.board').append(`<div class="cell" data-index="${index}">${value}</div>`);
                });
            }

            // Function to check if there's a winner
            function checkWinner() {

                 // Possible winning combinations
                const winPatterns = [
                    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal Rows
                    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical Columns
                    [0, 4, 8], [2, 4, 6] // Diagonals
                ];

                // Loop through each winning combination
                for (let pattern of winPatterns) {
                    let [a, b, c] = pattern; // Get the indexes of a pattern

                    // Check if board cells match and are not empty
                    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                        $('.message').text(`Player ${board[a]} wins!`); // Display winner message
                        $('.cell').eq(a).addClass('winner'); // Highlight winning cells
                        $('.cell').eq(b).addClass('winner'); // Highlight winning cells
                        $('.cell').eq(c).addClass('winner'); // Highlight winning cells
                        gameActive = false; // Stop the game
                        return;
                    }
                }
                 // Check for a draw
                if (!board.includes("")) {
                    $('.message').text("It's a draw!"); // Notify players
                    gameActive = false; // Stop the game
                }
            }

            // Handle click event on a cell
            $('.board').on('click', '.cell', function() {
                let index = $(this).data('index'); // Get cell index

                // Ensure cell is empty and game is still active
                if (!board[index] && gameActive) {
                    board[index] = currentPlayer; // Update board state
                    renderBoard(); // Re-render the board
                    checkWinner(); // Check for a winner

                    // Switch to the next player
                    currentPlayer = (currentPlayer === "X") ? "O" : "X";

                       // Update message to show next player's turn
                    if (gameActive) $('.message').text(`Player ${currentPlayer}'s turn`);
                }
            });
                 // Restart button functionality
            $('.restart-btn').click(function() {
                board = ["", "", "", "", "", "", "", "", ""]; // Reset the board array
                currentPlayer = "X";  // Reset player to "X"
                gameActive = true; // Reactivate game
                $('.message').text("Player X's turn"); // Reset message
                renderBoard(); // Re-render board
            });

            renderBoard();
        });
    