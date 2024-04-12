let totalLiters = 2;
let consumedLiters = 0;

// Function to update the displayed information
function updateDisplay() {
  const remainingLiters = (totalLiters - consumedLiters).toFixed(2);
  document.getElementById('liters').innerText = `${remainingLiters}L`;

  const remainedCircle = document.querySelector('.remained');
  
  // Change the circle color when the goal is reached
  if (consumedLiters >= totalLiters) {
    remainedCircle.classList.add('cup-filled');
    document.getElementById('message').innerText = 'You have completed your water fully!';
    document.querySelectorAll('.cup-small').forEach(cup => {
      cup.classList.add('disabled');
    });
    document.getElementById('message').style.display = 'block';
  } else {
    remainedCircle.classList.remove('cup-filled');
  }

  // Update the remained circle's fill
  const fillPercentage = (consumedLiters / totalLiters) * 100;
  remainedCircle.style.backgroundImage = `conic-gradient(#28a745 ${fillPercentage}%, #fff ${fillPercentage}% 100%)`;
}

// Function to add water to the cup
function addWater(event) {
  if (!event.target.classList.contains('disabled')) {
    consumedLiters += 0.25; // Each cup is 250 ml or 0.25L
    
    // Change cup color to green
    event.target.style.backgroundColor = '#28a745';
    event.target.style.color = '#fff';
    event.target.classList.add('disabled');
    
    // Update the remained circle
    updateDisplay();
  }
}

// Add click event listeners to each cup
document.querySelectorAll('.cup-small').forEach(cup => {
  cup.addEventListener('click', addWater);
});

// Initial display update
updateDisplay();









