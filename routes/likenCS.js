// variable aanmaken om het hele formulier aan te spreken met alle beelden.
const formulieren = document.querySelectorAll('form');

formulieren.forEach(formulier => {

    formulier.addEventListener('submit', event => {
        event.preventDefault();
    
        const formData = new FormData(formulier);
        
        const data = new URLSearchParams();
        data.set('itemid', formData.get('itemid'));
        
        // Met fetch haal je data uit de database/api
        fetch('/likepagina',
            {
                method: "POST",
                body: data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        // Vervolg vanuit de fetch, wat ik erna nog mee wilt doen
        ).then(() => {
            const img = event.target.querySelector('button img');
            console.log(img.classList.contains('hartjevol'));
            
            // Als geen actie, haalt die img class op van 'hartjevol' uit hbs (unlike)
            if(img.classList.contains('hartjevol')) {
                img.src = './images/emptyheart2.png';
            // Zo niet? Haalt die de overige img class op van 'hartjeleeg' uit hbs (like)
            } else {
                img.src = './images/fullheart3.png';
            }
        })
    })

})

