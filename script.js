document.getElementById('new-quote').addEventListener('click', getQuote);

async function getQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quote').innerText = data.content;
        document.getElementById('author').innerText = `- ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        document.getElementById('quote').innerText = 'Failed to fetch a quote. Please try again later.';
        document.getElementById('author').innerText = '';
    }
}
