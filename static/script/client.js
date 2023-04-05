//Source Robert, voor het helpen van mijn client side js binnen liken. 
// variable aanmaken om het hele formulier aan te spreken met alle beelden.
const formulieren = document.querySelectorAll('form');

// Beschrijven wat er in het hele formulier, forEach gedaan moet worden
formulieren.forEach(formulier => {

    formulier.addEventListener('submit', event => {
        event.preventDefault();
    
        const formData = new FormData(formulier);
        
        const data = new URLSearchParams();
        data.set('itemid', formData.get('itemid'));
        
        // Met fetch haal je data uit de database/ op welke pagina zichtbaar
        // Fetch helpt het pad naar bestand te vinden. 
        fetch('/liken',
            {
                method: "POST",
                body: data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        // Vervolg vanuit de fetch, wat ik nu met de data wil doen.
        ).then(() => {
            // Oproepen 'button img' uit ejs bestand.
            const img = event.target.querySelector('button img');
            console.log(img.classList.contains('hartjevol'));
            
            // Als geen actie, haalt die img class op van 'hartjevol' uit hbs (unlike)
            if(img.classList.contains('hartjevol')) {
                img.src = '/images/EmptywhiteHeart.png';
            // Zo niet? Haalt die de overige img class op van 'hartjeleeg' uit hbs (like)
            } else {
                img.src = '/images/FullRedHeart.png';
            }
        })
    })

})


