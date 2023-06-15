fetch('../videogiochi.json')
.then(response => response.json())
.then(data=>{
    console.log(data);

    let cardsContainer = document.querySelector('#cardsContaier');
    function createCards(){
        data.forEach(videogioco => {
          let div =  document.createElement(`div`);
          div.classList.add('col-12','col-md-9');
          div.innerHTML = `
            <div class="card">
                <div class="overflow-hidden">
                    <img 
                        src="../img/vgcover.jpeg" 
                        class="card-img-top img-zoom" 
                        alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Titolo: ${videogioco.name}</h5>
                    <h6 class="card-title">Prezzo: ${videogioco.price}</h6>
                    <p class="card-text">Categoria: ${videogioco.category}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          `;
          cardsContainer.appendChild(div);
        });
    }
    createCards();
})