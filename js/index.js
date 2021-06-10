const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('turned')
    let cardTimeOut = setTimeout( function() {
      card.classList.toggle('turned')
    }, 3000)
    memoryGame.checkIfPair
      // 1. flip 2. compare with the other flipped 3. if they 
      // are the same stay 4. if not they should flip back after 3 seg
      //  / define own array and push every card into this array if it 
      // has a length of 2 check pair in these two cards
// 1) add the class 'turned'. You need to make sure only two cards are 
// turned at any given time. So add an if-condition to check if the number 
// of pickedCards if it is less than 2 before turning any card.
// 2) Push the turned card into the memory game pairsClicked array.
// 3) Add an if-condition to check it pairsClicked array has a length of 2
//  --> this means there are two cards that are clicked and turned.
// 4) If the above condition is true, use checkIfPair on these 2 cards to check if they pair.
// 5) If they pair, update the number of pairsGuessed and check if the game is finished.
// 6) If they don't, set a timer to flip the cards back, remove the 2 cards from the pickedCards array
      console.log(`Card clicked: ${card}`);
    });
  });
});
