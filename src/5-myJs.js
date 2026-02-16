/**
 * This function re-implement the behavior of the .includes() array method
 * without using any existing functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * @param {string[]} array
 * @param {string} searchElement
 * @returns {boolean}
 * @example
 *      myIncludes(['un', 'deux', 'trois'], 'trois'); // returns true
 *      myIncludes(['un', 'deux', 'trois'], 'quatre'); // returns false
 */
export function myIncludes(array, searchElement){
    for (let i = 0 ; i < array.length ; i = i+1){
        if( array[i] == searchElement){
            return true;
        }
    }
    return false;
};

/**
 * This function re-implement the behavior of the .indexOf() array method
 * without using any existing functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * @param {string[]} array
 * @param {string} searchElement
 * @returns {number}
 * @example
 *      myIndexOf(['un', 'deux', 'trois'], 'trois'); // returns 2
 *      myIndexOf(['un', 'deux', 'trois'], 'quatre'); // returns -1
 */
export function myIndexOf(array, searchElement){
    for (let i = 0 ; i < array.length ; i = i+1){
        if( array[i] === searchElement){
            return i;
        }
    }
    return(-1);
};

/**
 * This function re-implements the behavior of the .startsWith() string method
 * without using any existing string helper functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 *
 * @param {string} str - The full string to test.
 * @param {string} search - The substring to check for at the start.
 * @returns {boolean} True if the string starts with the given substring, false otherwise.
 * @example
 *      myStartsWith('bonjour', 'bon'); // returns true
 *      myStartsWith('bonjour', 'jour'); // returns false
 */
export function myStartsWith(str, search){
    for(let i = 0 ; i < search.length ; i = i + 1){
        if(str[i] != search[i]){
            return false;
        }
    }
    return true;
};

/**
 * This function re-implements the behavior of the .repeat() string method
 * without using any existing string helper functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 *
 * @param {string} str - The string to repeat.
 * @param {number} count - The number of times the string should be repeated.
 * @returns {string} The string repeated 'count' times.
 * @example
 *      myRepeat('ha', 3); // returns 'hahaha'
 *      myRepeat('x', 0); // returns ''
 */
export function myRepeat(str, count){
    let result = [];
    for (let i = 0 ; i < count ; i = i + 1){
        result.push(str);
    }
    return result.join(``);
};

/**
 * This function re-implements the behavior of the .join() array method
 * without using any existing array helper functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 * @param {any[]} array - The array whose elements will be joined.
 * @param {string} separator - The separator to insert between elements.
 * @returns {string} A string made by concatenating all array items separated by the given string.
 * @example
 *      myJoin(['a', 'b', 'c'], '-'); // returns 'a-b-c'
 *      myJoin(['hello', 'world'], ' '); // returns 'hello world'
 */
export function myJoin(array, separator){
    if(array.length === 0){
        return ``;
    }
    else if(array.length === 1){
        return array[0];
    }
    else{
        let result = array[0];
        for (let i = 0 ; i < array.length-1 ; i = i +1){
            result = result + `${separator}` + array[i+1];
        }
        return result;
    }

};

/**
 * This function re-implements the behavior of Object.keys()
 * without using Object.keys() or any built-in reflection helpers.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *
 * @param {Object} obj - The object from which to extract keys.
 * @returns {string[]} An array of the object's own enumerable property names.
 * @example
 *      myObjectKeys({a: 1, b: 2}); // returns ['a', 'b']
 */
export function myObjectKeys(obj){
    let keys = [];
    let check = 0;
    for (let propName in obj){
// next seems useless but keeping it for science
        /* for(let i = 0 ; i < keys.length ; i = i +1 ){
            if(keys[i] === propName){
                check = 1;
                i = keys.length
            }
        }
        if (check === 0){
            keys.push(propName);
        }*/
       keys.push(propName);
    }
    return keys;
};

/**
 * This function re-implements the behavior of Object.entries()
 * without using Object.entries() or any built-in reflection helpers.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *
 * @param {Object} obj - The object from which to extract key/value pairs.
 * @returns {Array[]} An array of [key, value] pairs from the object's own enumerable properties.
 * @example
 *      myObjectEntries({a: 1, b: 2});
 *      // returns [['a', 1], ['b', 2]]
 */
export function myObjectEntries(obj){
    let result=[];
    let resultmid=[];
    for (let combin in obj){
        resultmid = [combin , obj[combin]]; // Object are like array OMG the revelation
        result.push(resultmid);
    }
    return result;
};
