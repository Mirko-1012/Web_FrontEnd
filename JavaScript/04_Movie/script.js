const addMovieBtn = document.querySelector('header button'); 
const addModal = document.getElementById('add-modal');       
const cancelBtn = addModal.querySelector('.btn--passive');   
const confirmBtn = addModal.querySelector('.btn--success');  
const backdrop = document.getElementById('backdrop');        

// Apri modal
addMovieBtn.addEventListener('click', function() {
    addModal.classList.add('visible');
    backdrop.classList.add('visible');
});

// Chiudi modal con Cancel
cancelBtn.addEventListener('click', function() {
    addModal.classList.remove('visible');
    backdrop.classList.remove('visible'); 
});

// Chiudi modal cliccando sullo sfondo
backdrop.addEventListener('click', function() {
    addModal.classList.remove('visible');
    backdrop.classList.remove('visible');
});
