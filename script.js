"use strict"

// Get the elements
const adviceNumber = document.getElementById("advice-number")
const adviceText = document.getElementById("advice-text")
const adviceBtn = document.getElementById("advice-btn")
const loader = document.getElementById("loader")



const getAdvice = function(){
    // Show loader and hide advice text
  loader.style.display = "block"
  // Hide advice text
  adviceText.style.display = "none"
  // Fetch advice from API
  const url = "https://api.adviceslip.com/advice"
  fetch(url)

  .then(response => {
    console.log('API Response:', response); // Log the raw response
    return response.json();
  })
  //
  .then(data => {
    console.log('API Data:', data); // Log the parsed JSON data
    // Hide loader and show advice text
    loader.style.display = "none"
    adviceText.style.display = "block"
    // Update the advice number and text
    adviceNumber.textContent = data.slip.id
    adviceText.textContent = `"${data.slip.advice}"`
  })
  
  .catch(error => {
    console.error('Error fetching advice:', error); // Log any errors
    adviceText.textContent = 'Failed to fetch advice. Please try again.';
  });
}
// Add event listener to the button
adviceBtn.addEventListener("click", getAdvice)
// Get advice when the page loads
getAdvice()