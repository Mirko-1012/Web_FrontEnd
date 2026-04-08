// Arrow function: carica utenti
const loadData = () => {
	const usersContainer = document.getElementById('users');
	usersContainer.textContent = 'Caricamento...';

	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			usersContainer.innerHTML = '';
			users.forEach(user => {
				const card = document.createElement('div');
				card.className = 'user';
				card.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
				usersContainer.appendChild(card);
			});
		})
		.catch(error => {
			usersContainer.textContent = 'Errore nel caricamento';
			console.log('Fetch error:', error);
		});
};

const loadBtn = document.getElementById('load-users');
if (loadBtn) {
	loadBtn.addEventListener('click', loadData);
}

//Tutto quello che ho aggiunto per il cambio del colore

const changeColor = () => { // Arrow function per cambiare il colore di sfondo delle card degli utenti
	const cards = document.querySelectorAll('.user'); // Seleziona tutte le card degli utenti con la classe 'user'
	cards.forEach(card => { // Scorre tutte le card e cambia il colore di sfondo
		card.style.backgroundColor = "lightblue"; // Cambia il colore di sfondo a lightblue
	});
};

document.getElementById('change-color').addEventListener('click', changeColor); // Aggiunge un event listener al pulsante con id 'change-color' che chiama la funzione changeColor quando viene cliccato