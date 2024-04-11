// HAM MENU


function DropMenu() {
    var firstChild = navbar_ham.children[0];
    var secondChild = navbar_ham.children[1];
    var navbarMenu = document.getElementById('navbar_menu');
    
    if (firstChild.classList.contains('rotate-45') && firstChild.classList.contains('top-1')) {
        firstChild.classList.remove('rotate-45');
        firstChild.classList.remove('top-1');
        secondChild.classList.remove('-rotate-45');
        secondChild.classList.add('mt-1');

        navbarMenu.classList.add('-top-[1000px]');
    } else {
        firstChild.classList.add('rotate-45');
        firstChild.classList.add('top-1');
        secondChild.classList.add('-rotate-45');
        secondChild.classList.remove('mt-1');

        navbarMenu.classList.remove('-top-[1000px]');
    }
};

document.querySelector('#navbar_ham').addEventListener( 'click', DropMenu);
document.querySelectorAll('.linkMenu').forEach(item => {
    item.addEventListener('click', DropMenu);})



// SISTEMA COMPORTAMENTO LINK
// Funzione per gestire il click sui link della navbar
function handleNavLinkClick(event) {
    // Impedisci il comportamento predefinito del link
    event.preventDefault();
    
    // Recupera l'id dell'elemento collegato al link
    const targetId = event.target.getAttribute('href').substring(1);
    
    // Calcola l'altezza della navbar
    const navbarHeight = 70; // Altezza della navbar in tailwind (h-16)
    
    // Recupera l'elemento target
    const targetElement = document.getElementById(targetId);
    
    // Se l'elemento target esiste, effettua lo scroll verso di esso
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    }
}

// Aggiungi un event listener a tutti i link della navbar
const navLinks = document.querySelectorAll('.linkMenu');
navLinks.forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
});






