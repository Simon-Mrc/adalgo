function toCamelCase(str){
    const words = str.toLowerCase().split("_");

    const first = words.shift(); // first word stays the same
    let result = first;

    for (const word of words) {
        const capitalized = word[0].toUpperCase() + word.slice(1);
        result += capitalized;
    }
    console.log(result);

    return result;
};
toCamelCase("to_snake_case");
toCamelCase("gloubi_JAJJA");
toCamelCase("my_function");
toCamelCase("");


