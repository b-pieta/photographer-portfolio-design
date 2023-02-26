const track = document.getElementById('image-track');

window.onmouseup = () => {
	track.dataset.mouseDownAt = '0';
	track.dataset.prevPercentage = track.dataset.percentage;
};

//horizontal coordinate within the application's viewport
window.onmousedown = (e) => {
	track.dataset.mouseDownAt = e.clientX;
};

window.onmousemove = (e) => {
	if (track.dataset.mouseDownAt === '0') return;
	const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
		maxDelta = window.innerWidth / 2,
		minPercentage = -205, // set the minimum percentage value
		maxPercentage = 0, // set the maximum percentage value
		percentage = (mouseDelta / maxDelta) * -100,
		nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

	// check if the next percentage is within the range
	if (nextPercentage < minPercentage) {
		track.dataset.percentage = minPercentage;
		track.style.transform = `translate(${minPercentage}%, -0%)`;
	} else if (nextPercentage > maxPercentage) {
		track.dataset.percentage = maxPercentage;
		track.style.transform = `translate(${maxPercentage}%, -0%)`;
	} else {
		track.dataset.percentage = nextPercentage;
		track.style.transform = `translate(${nextPercentage}%, -0%)`;
	}
};

/*let's talk button */

document.addEventListener('DOMContentLoaded', function () {
	const button = document.querySelector('#contact');

	button.addEventListener('click', function () {
		const contactSection = document.querySelector('#contactme');

		contactSection.scrollIntoView({ behavior: 'smooth' });
	});
});

// /*saving input from 'contact me in local storage */

// const form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const name = document.querySelector('#name').value;
//   const email = document.querySelector('#email').value;

//   // Save the user's input
//   localStorage.setItem('name', name);
//   localStorage.setItem('email', email);
// });
