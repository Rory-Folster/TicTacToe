let naughtsArray = [["o","x","o"],
                      ["x","o","x"],
                      ["o","x","o"]]

        

let player = null
function ticTacToe()
{
  
  let result = arrCheck(0,1,2)  
  ||  arrCheck(3,4,5)
  ||  arrCheck(6,7,8)
  ||  arrCheck(0,3,6)
  ||  arrCheck(2,5,8)
  ||  arrCheck(0,4,8)  
  ||  arrCheck(6,4,2)
    if (result){
   console.log(player);
  }else {
    console.log('Draw')
  }}

function arrCheck(p1, p2, p3)
{
  let z = naughtsArray.toString().replace(/,/g, "");
  let arr1 = z.charAt(p1);
  let arr2 = z.charAt(p2);
  let arr3 = z.charAt(p3);
 

  if (arr1 == 'x' &&  arr2 == 'x' && arr3 == 'x'){
     player = 'x' + ' ' + 'is the winner!'
   return player}
    else if (arr1 == 'o' &&  arr2 == 'o' && arr3 == 'o'){
     player = 'o' + ' ' + 'is the winner!'
      return player}
      else { 
        return false;
      }
    }
ticTacToe();
