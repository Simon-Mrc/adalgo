/*
 * This function takes a message as parameter and replaces all occurences
 * of "pain au chocolat" by "chocolatine".
 *
 * This would work with "pains au chocolat" and "chocolatines" as well and when
 * we see "un pain au chocolat" it should be replaced by "une chocolatine".
 *
 * @param {string} message The message in which the text should be replaced
 * @returns {string} an updated message with every "pain au chocolat" replaced by "chocolatine"
 */

export function chocolatine(string){
    let unChoc =["u","n"," ","p","a","i","n"," ","a","u"," ","c","h","o","c","o","l","a","t"];
    let uneChoc =["u","n","e"," ","c","h","o","c","o","l","a","t","i","n","e"];
    let choc =["p","a","i","n"," ","a","u"," ","c","h","o","c","o","l","a","t"];
    let chocolatine =["c","h","o","c","o","l","a","t","i","n","e"];
    let chocs =["d","e","s"," ","p","a","i","n","s"," ","a","u"," ","c","h","o","c","o","l","a","t"];
    let desChoc =["d","e","s"," ","c","h","o","c","o","l","a","t","i","n","e","s"];
    let verif = [];
    let i = 0;
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
    
    while(string[i] != undefined){
        verif.push(string[i]);
        i = i + 1;
    }
    const long = verif.length;
    for (let j = 0 ; j < long ; j = j + 1){
        if (arraysEqual(verif.slice(j, j + unChoc.length).map(str => str.toLowerCase()), unChoc) == true){
            verif.splice(j, unChoc.length, ...uneChoc);
        }
        if (arraysEqual(verif.slice(j, j + chocs.length).map(str => str.toLowerCase()), chocs) == true){
            verif.splice(j, chocs.length, ...desChoc);
        }
        if (arraysEqual(verif.slice(j, j + choc.length).map(str => str.toLowerCase()), choc) == true){
            verif.splice(j, choc.length, ...chocolatine);
        }
    }
    return(verif.join(``));
};