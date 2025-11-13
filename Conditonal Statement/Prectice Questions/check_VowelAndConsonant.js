// Check if a character is a vowel or consonant.

// ----> conditions
// 1️⃣ char.length === 1
// 2️⃣ char >= 'a' && char <= 'z'
// 3️⃣ char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'

// Vowel =  a, e, i, o, u
// consonants = b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, y, w, x, y, z

//take a input form user
let char = prompt("Enter a Character : ").toLowerCase();

// check user type only one latter and  only latter
if(char.length === 1 && char >= 'a' && char <= 'z'){
    // check vowel
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        console.log(`${char} is a vowel.`);
    }
    else{
        console.log(`${char} is a Consonant.`);
    }
}
else{
    console.log("Please anter a single alphabet character.");
}