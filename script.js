// Getting the quote container and button from the DOM
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');
const copyButton = document.getElementById('copy-quote');

// Fetching the quotes from the JSON file
fetch('quotes.json')
    .then(response => response.json())
    .then(quotes => {
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

        // Copy the quote text when the button is clicked
        copyButton.addEventListener('click', () => {
            const textArea = document.createElement('textarea');
            textArea.value = quoteText.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            copyButton.innerText = 'Copied!';
            setTimeout(() => {
                copyButton.innerText = 'Copy Quote';
            }, 2000);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        quoteContainer.textContent = 'Failed to load quotes.';
    });
