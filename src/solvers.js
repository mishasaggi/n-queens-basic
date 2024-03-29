/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  var board = new Board({n:n});
  var piecePlacementChecker = function(row) {
    for ( var col = 0; col < n; col++ ) {
      board.togglePiece(row,col);
      if ( board.hasAnyRooksConflicts() ) {
        board.togglePiece(row,col);
      }
    }
    solution.push(board.get(row));
    if ( row < n-1 ) {
      return piecePlacementChecker(row +1);
    }
  }
  piecePlacementChecker(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  //the rook solution
  //what differences can we anticipate?
  var solution = [];
  var board = new Board({n:n});

  //case n = 0
  if ( n === 0 ) {
    return solution = null;
  }

  if( n === 1){
    return solution = [1];
  }

//case n = 2
  if( n === 2 ){
    return solution = [[0,0],[0,0]];
  }

//case n = 3
  if ( n === 3 ) {
    return solution = [[0,0,0],[0,0,0],[0,0,0]];
  }

//general case
//try giving a different starting value
  var piecePlacementChecker = function(row) {
    for ( var col = 0; col < n; col++ ) {
      board.togglePiece(row,col);
      //should be .hasAnyQueenConflicts
      if ( board.hasAnyQueensConflicts() ) {
        board.togglePiece(row,col);
      }
    }
    solution.push(board.get(row));
    if ( row < n-1 ) {
      return piecePlacementChecker(row +1);
    }
  }
  piecePlacementChecker(0); //just give a different
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

window.countNQueensBitwise = function(n){
  var solutionCount = 0;

  console.log('Bitwise: Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


