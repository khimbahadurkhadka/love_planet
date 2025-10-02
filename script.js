// 1. Define your love messages
// These are the words that will populate the 3D spinning sphere.
const planetTextLove = [
    "Te Amo", 
    "My Love", 
    "Eres preciosa", 
    "Me encantas", 
    "Amor de mi vida",
    "Mi reina",
    "Para ti",
    "Una diosa",
    "My Everything",
    "I Love You",
    "Soulmate",
    "Mi corazón",
    "Me haces feliz",
    "My Princess",
    "Eres mi sol",
    "Mi todo"
    // You can add many more words here!
];

// 2. Configure the TagCloud animation
const options = {
    // Radius of the text sphere (must be less than #love-cloud-container width/2)
    radius: 240, 
    // Animation speed: 'slow', 'normal', or 'fast'
    maxSpeed: 'normal',
    initSpeed: 'slow',
    // Initial rotation direction (135 is diagonal/bottom-right)
    direction: 135,
    // Keep the animation going when the mouse moves out
    keep: true 
};

// 3. Select the container and run the TagCloud animation
const container = '.content';
TagCloud(container, planetTextLove, options);