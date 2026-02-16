/*
  This function takes an array of words and convert it into a french sentence. Words are separated by
  commas and the two last words are separated by "et".
 
      arrayToFrench(['un', 'deux', 'trois', 'soleil']); // returns "un, deux, trois et soleil"
      arrayToFrench(['noir', 'blanc']); // returns "noir et blanc"
 */
export function arrayToFrench(array){
    let result=[];
    if(array.length === 0){
        return(``);
    }
    else if(array.length === 1){
        return array.join();
    }
    else{
        for(let i = 0 ; i < array.length-1 ; i = i + 1){
            result.push(array[i]);
        }
        return(result.join(`, `) + " et " + array[array.length-1]);
    }
};
