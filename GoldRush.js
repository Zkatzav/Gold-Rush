const matrix = require('./Matrix.js')


class GoldRush extends matrix {
  constructor(x, y) {
    super(x, y)
    this.player1 = {score: 0}
    this.player2 = {score: 0}
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  setUp() {
    
    super.alter(0, 0, 1)
    
    let lastItem = this.matrix.length - 1
    super.alter(lastItem, this.matrix[lastItem].length - 1, 2)
    
    let counter = 10
    while(counter !== 0) {
      const randomX = this.getRandomInt(lastItem)
      const randomY = this.getRandomInt(this.matrix[lastItem].length )
      
      if(this.matrix[randomX][randomY] === '*'){
        this.alter(randomX, randomY, 'c')
        counter--
      }
    }
  }
  
  shouldAddScore(row, column, player){
    if(super.get(row, column) === "c"){
      player === 1 ? this.player1.score += 10 : this.player2.score += 10
    }
  }

  movePlayer(player, side) {
    let spot = super.findCoordinate(player)
    super.alter(spot.y, spot.x, "*")
    
    switch(side) {
      
      case("right"):
      this.shouldAddScore(spot.y, spot.x + 1, player)
      super.alter(spot.y, spot.x + 1, player)
      return;

      case("left"):
      this.shouldAddScore(spot.y, spot.x - 1, player)
      super.alter(spot.y, spot.x - 1, player)
      return;
      
      case("up"):
      this.shouldAddScore(spot.y - 1, spot.x, player)
      super.alter(spot.y - 1, spot.x, player)
      return;
      
      case("down"):
      this.shouldAddScore(spot.y + 1, spot.x, player)
      super.alter(spot.y + 1,spot.x, player)
      return;
    }
  }
}