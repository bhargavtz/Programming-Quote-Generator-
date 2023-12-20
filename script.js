// Fetching the quotes from the JSON file
fetch('quotes.json')
    .then(response => response.json())
    .then(quotes => {
        // Getting the quote container and button from the DOM
        const quoteContainer = document.getElementById('quote-container');
        const quoteText = document.getElementById('quote');
        const newQuoteButton = document.getElementById('new-quote');

        // Function to generate a random quote
        function generateQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            quoteText.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;
            document.title = `"${randomQuote.quote}" - ${randomQuote.author}`; // Setting the title of the page to the quote
        }

        // Generate a quote when the page loads
        generateQuote();

        // Generate a new quote when the button is clicked
        newQuoteButton.addEventListener('click', generateQuote);
    })
    .catch(error => {
        console.error('Error:', error);
        quoteContainer.textContent = 'Failed to load quotes.';
    });
    const copyButtons = document.querySelectorAll('.copy-button');
