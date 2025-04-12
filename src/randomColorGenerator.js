// Function to generate a random color
export function getRandomColor() {
  const letters = "123456789AB";  // Limited characters to create lighter colors
  let color = "#";  // Start the color string with '#'

  for (let i = 0; i < 3; i++) {
    // Randomly pick characters from the 'letters' string
    color += letters[Math.floor(Math.random() * 11)]; 
  }
  return color;  // Return the generated color
}
