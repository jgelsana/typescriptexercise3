export const convertString = (input: string) => {

    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    let newArray: string[] = [];

    for (let i = 0; i < (input.length); i++) {
        var char = input[i];
        var index = alphabet.indexOf(char.toLowerCase());

        if (index !== -1) {
            var nextIndex = index + 1;
            nextIndex = nextIndex === alphabet.length ? 0 : nextIndex;

            var nextChar = alphabet.charAt(nextIndex);

            var newChar = isVowel(nextChar) ? nextChar.toUpperCase() : nextChar.toLowerCase();

            newArray.push(newChar);
        } else {

            newArray.push(char);

        }
    }
    console.log(newArray.join(''));
}

function isVowel(letter: string): boolean {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(letter.toLowerCase());
}