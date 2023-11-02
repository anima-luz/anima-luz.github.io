document.addEventListener("DOMContentLoaded", function () {
    const sentenceDisplay = document.getElementById("sentence-display");
    const sentences = [];

    // Fetch sentences from the text file using an AJAX request
    fetch('sentences.txt')
        .then(response => response.text())
        .then(data => {
            sentences.push(...data.split('\n').map(sentence => sentence.trim()));
            updateSentence();
        });

    // Function to update the displayed sentence
    function updateSentence() {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        sentenceDisplay.textContent = sentences[randomIndex];
    }

    // Add event listeners to update the sentence on key press and click
    document.addEventListener("keydown", updateSentence);
    document.addEventListener("click", updateSentence);
});
