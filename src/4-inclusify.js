/**
 * This function tries to use french inclusive notation instead of masculine or feminine gender in sentences.
 * *This is a simplified version that focuses on simple pronouns replacement.*
 * The function should :
 * - replace il, elle by iel
 * - replace ils, elles by iels
 * - replace ceux, celle by celleux
 * Be carreful to properly handle edge cases from tests.
 * 
 */
export function inclusify(text){
    let newStr = text.replaceAll("Il ", "Iel ");
    newStr = newStr.replaceAll("Elle ", "Iel ");
    newStr = newStr.replaceAll("Ils ", "Iels ");
    newStr = newStr.replaceAll("Elles ", "Iels ");
    newStr = newStr.replaceAll(" il ", " iel ");
    newStr = newStr.replaceAll(" elle ", " iel ");
    newStr = newStr.replaceAll(" ils ", " iels ");
    newStr = newStr.replaceAll(" elles ", " iels ");
    newStr = newStr.replaceAll("Celle ", "Celleux ");
    newStr = newStr.replaceAll("Celles ", "Celleux ");
    newStr = newStr.replaceAll(" celle ", " celleux ");
    newStr = newStr.replaceAll(" celles ", " celleux ");
    newStr = newStr.replaceAll("Ceux ", "Celleux ");
    newStr = newStr.replaceAll(" ceux ", " celleux ");
    return newStr;
};

// Not taking care of "ceux-ci" for example // not taking care of grammar either