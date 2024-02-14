const phrases1 = ['My love,', 'My dear,', 'My sweetheart,'];
const phrases2 = ['you make me smile', 'your eyes shine', 'my star'];
const phrases3 = ['day by day.', 'in my heart.', 'in my dreams.'];

const hearts = ['&#10084;', '&#x1F497;', '&#x1F496;', '&#x1F493;']; // Different heart emojis
const emojis = ['😍', '😘', '🥰', '💖']; // Different love-related emojis
const images = ['DSC_6594.jpg', 'image(19).jpg', 'image(20).jpg', 'image(25).jpg']; // Paths to your images

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generatePoem() {
    const line1 = getRandomElement(phrases1);
    const line2 = getRandomElement(phrases2);
    const line3 = getRandomElement(phrases3);

    const poem = `${line1} ${line2},\n${line3}`;

    const greetingDisplay = document.getElementById('greetingDisplay');
    greetingDisplay.innerHTML = ''; // Clear previous content

    // Add image
    const image = document.createElement('img');
    image.src = getRandomElement(images);
    greetingDisplay.appendChild(image);

    // Add text
    const poemText = document.createElement('p');
    poemText.textContent = poem;
    greetingDisplay.appendChild(poemText);

    // Add one heart
    const heart = document.createElement('p');
    heart.innerHTML = getRandomElement(hearts);
    heart.classList.add('heart');
    greetingDisplay.appendChild(heart);

    // Add one emoji
    const emoji = document.createElement('p');
    emoji.textContent = getRandomElement(emojis);
    emoji.classList.add('emoji');
    greetingDisplay.appendChild(emoji);


}

const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generatePoem);
