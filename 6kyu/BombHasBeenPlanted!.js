// Based off the game Counter-Strike

// The bomb has been planted and you are the last CT (Counter Terrorist) alive

// You need to defuse the bomb in time!

// Task:

// Given a matrix m and an integer time representing the seconds left before the bomb detonates, determine if it is possible to defuse the bomb in time. The time limit is inclusive.

// In the matrix m:

// "CT" represents the counter terrorist
// "B" represents the bomb
// "K" represents the kit
// "0" represents empty space
// The defuse kit may or may not be present in the matrix

// You can defuse the bomb in 2 ways:

// If you defuse the bomb without the defuse kit, it will cost 10 seconds
// If you defuse the bomb with the defuse kit, it will cost only 5 seconds
// Each move the CT makes in any direction costs 1 second

// The CT can move diagonally, horizontally and vertically.


function bombHasBeenPlanted(map, time) {
    let ctrow,ctcol,brow,bcol,krow,kcol;
    console.log("Time do problema é ", time)
    for(let row = 0; row<map.length; row++){
      for(let col = 0; col<map[row].length;col++){
        if(map[row][col].includes('CT')){
          ctcol=col;
          ctrow=row;
        }
        if(map[row][col].includes("B")){
          bcol=col;
          brow=row;
        }
        if(map[row][col].includes("K")){
          kcol=col;
          krow=row;
        }
      }
    }
    
    if(kcol != undefined ){
      let columnsToKit = Math.abs(ctcol - kcol)
      let rowsToKit = Math.abs(ctrow - krow)
      let minMovToKit = Math.max(columnsToKit,rowsToKit)
      let columnsKitToBomb =  Math.abs(bcol - kcol)
      let rowsKitToBomb =  Math.abs(brow - krow)
      let minMovKitToBomb = Math.max(columnsKitToBomb,rowsKitToBomb)
      
      var timeWithKit = minMovToKit + minMovKitToBomb
    }
    
    let columnsToBomb = Math.abs(ctcol - bcol)
    let rowsToBomb = Math.abs(brow-ctrow)
    let mimMovToBomb = Math.max(columnsToBomb,rowsToBomb)
    
    if( kcol != undefined && timeWithKit+5 <= time){
       return true
    }
    if(mimMovToBomb+10 > time){
      return false;
    }
    else{
      return true;
    }
  }