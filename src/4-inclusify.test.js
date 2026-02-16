import {inclusify} from "./4-inclusify";
import {expect, test} from "vitest";

test("il/elle are properly replaced", () => {
    expect(inclusify("Aujourd'hui elle a push le code sur github")).toBe("Aujourd'hui iel a push le code sur github");
    expect(inclusify("Il a bu un café")).toBe("Iel a bu un café");
    expect(inclusify("Il a mangé tout les chocolats et elles ont été en racheter.")).toBe("Iel a mangé tout les chocolats et iels ont été en racheter.");
    expect(inclusify("Ils se sont mis du mascara sur les cils")).toBe("Iels se sont mis du mascara sur les cils");
    expect(inclusify("Il est venu, il a vu, il a vaincu")).toBe("Iel est venu, iel a vu, iel a vaincu");
    expect(inclusify("Elle est allé sur l'île.")).toBe("Iel est allé sur l'île.");
});
test("Celle/Ceux are properly replaced", () => {
    expect(inclusify("Celles qui travaillent dur réussissent")).toBe("Celleux qui travaillent dur réussissent");
    expect(inclusify("Ceux qui veulent participer peuvent lever la main")).toBe("Celleux qui veulent participer peuvent lever la main");
    expect(inclusify("Celles et ceux qui sont d'accord")).toBe("Celleux et celleux qui sont d'accord");
    expect(inclusify("Ce ux design est bien, celles qui ont dit le contraire ont tort")).toBe("Ce ux design est bien, celleux qui ont dit le contraire ont tort");
});
test("already inclusified sentences should change", () => {
    expect(inclusify("Aujourd'hui iel a push le code sur github")).toBe("Aujourd'hui iel a push le code sur github");
    expect(inclusify("Iel a bu un café")).toBe("Iel a bu un café");
    expect(inclusify("Celleux et celleux sont d'accord")).toBe("Celleux et celleux sont d'accord");
    expect(inclusify("Celleux ont dit que celleux avaient raison")).toBe("Celleux ont dit que celleux avaient raison");
});

test("edge cases - pronouns inside other words so shouldn't be replaced", () => {
    expect(inclusify("L'élephant elle court vite")).toBe("L'élephant iel court vite");
    expect(inclusify("Millionnaire il est riche")).toBe("Millionnaire iel est riche");
    expect(inclusify("Crustelle and the gang")).toBe("Crustelle and the gang");
    expect(inclusify("Briller illégalement n'est pas bien")).toBe("Briller illégalement n'est pas bien");
    expect(inclusify("Je m'appelle Ceuximellen")).toBe("Je m'appelle Ceuximellen");
    expect(inclusify("Villégiature et elles font bon ménage")).toBe("Villégiature et iels font bon ménage");
    expect(inclusify("Grille elle me regarde")).toBe("Grille iel me regarde");
    expect(inclusify("Parcelle, elles sont roses")).toBe("Parcelle, iels sont roses");
});
// TODO: write similar tests celleux
