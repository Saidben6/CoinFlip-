function flipCoin() {
    const coinElement = document.getElementById("coin");
    const resultElement = document.getElementById("result");
    const sides = ["Heads", "Tails"];
    const randomSide = sides[Math.floor(Math.random() * sides.length)];

    coinElement.style.animation = "none"; // Reset animation
    void coinElement.offsetWidth; // Trigger reflow to restart the animation
    coinElement.style.animation = "flip-coin 1.5s ease-in-out"; // Apply the flip animation

    // Wait for the animation to complete before updating the content
    setTimeout(() => {
        coinElement.textContent = randomSide;
        resultElement.textContent = `Result: ${randomSide}`;
    }, 1500); // 1.5 seconds, should match the animation duration
}
