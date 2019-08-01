class Matrix {

  constructor(numRows, numColumns){
    this.matrix = this.generateMatrix(numRows, numColumns)
  }
  generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1
    
    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
          matrix[r].push("*")
        }
    }
    return matrix
  }

  print() {
    for( let i = 0; i < this.matrix.length; i++ ) {
      let line = ""
      for( let x = 0; x < this.matrix[i].length; x++ ) {
        line += ( this.matrix[i][x] + "\t" )
      }   
      console.log(line)
    }  
  }

  alter(rowNum, colNum, newVal){
    this.matrix[rowNum][colNum] = newVal
  }

  get(rowNum, colNum){
    return this.matrix[rowNum][colNum]
  }

  printColumn(colNum) {
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i][colNum])
    }
  }

  printRow(rowNum) {
    for (let i = 0; i < this.matrix[rowNum].length; i++) {
        console.log(this.matrix[rowNum][i])
    }
  }

  findCoordinate(val){
    for( let i = 0; i < this.matrix.length; i++ ) {
      for( let x = 0; x < this.matrix[i].length; x++ ) {
        if( this.matrix[i][x] === val ){
          return {x: x, y: i} 
        }
      }
    }
  }
}

module.exports = Matrix