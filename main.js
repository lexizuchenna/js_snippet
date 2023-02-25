// Password Generator
let generatePassword = (length = 8) => {
    if (length === 0) return `length must be greater than 0`;
    if (typeof length !== "number") return `Length must be a Number`;

    const chars = "0123456789abcdefghijklmnopqrstuvyz?/!@#$^&><";
    let password = "";

    const arr = new Uint32Array(length);
    window.crypto.getRandomValues(arr);

    for (let i = 0; i < length; i++) {
        password += chars[arr[i] % chars.length];
    }

    return password;
};

// Generate UUID
const generateUUID = () => {
    return window.crypto.randomUUID();
};

// Typewriter Effect
const typerWriterEffect = (txt, speed, element) => {
    if (!txt || !speed || !element) return true;
    let i = 0;
    let timerId = setInterval(() => {
        element.innerText = txt.charAt(i);
        i++;
        if (i === txt.length) clearInterval(timerId);
    }, speed);
};

typerWriterEffect(`I am here`, 500, document.getElementById("type"));

// Accordion / Item Dropdown
const accItems = document.querySelectorAll(".acc-item");

accItems.forEach((accItem) => {
    accItem.addEventListener("click", () => {
        let activeAccItem = document.querySelector(".acc-item.active");
        if (activeAccItem && activeAccItem !== accItem) {
            activeAccItem.classList.toggle("active");
            accItem.nextElementSibling.style.maxHeight = 0;
        }

        accItem.classList.toggle("active");
        let accItemBody = accItem.nextElementSibling;
        if (accItem.classList.contains("active")) {
            accItemBody.style.maxHeight = accItemBody.scrollHeight + "px";
        } else {
            accItemBody.style.maxHeight = 0;
        }
    });
});

// Extract Domain from string
const getDomain = (email) => {
    let domain = email.substring(email.indexOf('@') + 1)

    if(!domain) {
        return 'Not a valid email address'
    }

    return domain
}

// Check Email
const checkEmail = (email) => {
  let at = email.indexOf("@");

  if(email.match(/[!#/\$%^&*()+,|<>;]/, "i")) {
    return "Not a valid email address"
  }

  if (at === -1) {
    return "Not a valid email address";
  }

  let domain = email.substr(email.indexOf("@") + 1);

  let com = domain.indexOf(".");
  if (com === -1) {
    return "Not a valid email address";
  }

  let topLevelDomain = domain.substring(domain.indexOf(".") + 1);

  if (!domain || !topLevelDomain || topLevelDomain.length < 3) {
    return "Not a valid email address";
  }

  return true;
};

// Get Min & Max of Array
const getMax = (arr) => Math.max(...arr)
const getMin = (arr) => Math.min(...arr)

// HTTP Status Codes
// 200 --- Ok/Sucess
// 201 --- Created Sucessfully
// 301 --- Permanant redirect
// 400 --- Client Error
// 404 --- Not found
// 410 --- Permanently removed
// 500 --- Internal Server error
// 503 --- Unavailable

// Decimal to binary
const decimalToBinary = (num) => {
    let binary = []
    while(num / 2 !== 0) {
        binary.unshift(num % 2);
        num = Math.floor(num / 2)
    }

    return binary.join('')
}

// Text to Speech
// const textToSpeech = (str) => {
//     let speech = new SpeechSynthesisUtterance()
//     const text = () => {
//         speech.text = str;
//         speech.rate = 1;
//         speech.volume = 1;
//         speech.pitch = 1;
//         speech.lang = 'en-US';
//         SpeechSynthesis.speak(speech)
//     }

//     text()
// }

// textToSpeech('I am Alexander')

// String Methods
const string = "The quick brown fox jumps over a lazy dog"

const stringMethods = {
    search: (str) => str.search(/[^\w\s]/g),
    split: (str, sep) => str.split(sep),
    indexOf: (str, word) => str.indexOf(word),
    replace: (str, let1, let2) => str.replace(let1, let2),
    charCodeAt: (str, num) => str.charCodeAt(num),
    toUpperCase: (str) => str.toUpperCase(),
    toLowerCase: (str) => str.toLowerCase(),
    match: (str) => str.match(/[A-Z]/g),
    substr: (str, start, end) => str.substr(start, end),
    repeat: (str, num) => str.repeat(num),
    charAt: (str, num) => str.charAt(num),
    length: (str) => str.length(),
}

// Get Array Average
const getAve = (arr) => arr.reduce((a, b) => (a + b) ) / arr.length

const createDigit = (id) => {
    let sum = id.split("").reduce((a, b) => a + parseInt(b), 0)
    return (sum.toString().length === 1) ? sum : createDigit(sum.toString())
}

// Capitalize Title
const capializeTitle = (str) => {
    let exceptions = ["a", "an", "the", "of", "and", "but", "or", "for", "nor", "in", "to"]

    str = str.toLowerCase().split(" ")

    let outputArray = []

    for(let j = 0; j < str.length; j ++) {
        if(exceptions.includes(str[j]) && j !== 0) {
            outputArray.push(str[j])
        } else {
            const firstLetter = str[j].charAt(0).toUpperCase()
            const remainingLetters = str[j].slice(1)
            const capitalizedWord = firstLetter + remainingLetters;
            outputArray.push(capitalizedWord)
        }
    }

    const outputString = outputArray.join(" ")
    return outputString
}

// Assign multiple attr to element
const assignAnchor = (id, href, rel, download) => {
    let a = document.createElement("a")
    Object.assign(a, {
        id, href, rel, download
    })

    return a
}

// Create Download URL Blob
const download = () => {
    const data = "Please download me"
    const myBlob = new Blob([data], {type: "text/plain"})

    let blobURL = URL.createObjectURL(myBlob)

    const a = assignAnchor("", blobURL, "", "blob-test.txt")

    a.style.display = "none"
    document.body.appendChild(a)

    a.click()

    document.body.removeChild(a)
    URL.revokeObjectURL(blobURL)
}

// Get Position
const getLocation = () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log({position})
        })
    }
}


const regex =
          (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )[!@#$%^&*()_+-.,](?=.*[^a-zA-Z0-9]).{8,}$/,
          "i");

// Format Phone Number i

const formatPhone = (phone) => {
  const myPhone = phone.match(/(\d)/g)?.join(``);
  if (myPhone === undefined) return ``;

   return myPhone.replace(/(\d{3})(\d{3})(\d{3})(\d{4})/, `+$1-$2-$3-$4`)
    
  return myPhone;
};

// Format Phone Number ii
let previousPhone = ''
function phoneFormat(field) {
    const specialCharCount = (field.value.match(/\D/g) || []).length;
    let cursorPosition = field.selectionStart;

    let input = field.value.replace(/\D/g,'');
    const size = input.length;
    if (input.substring(0,1) == 1) {
        if (size===0) {input=``}
        else if (size<2) {input=`+${input} `}
        else if (size<4) {input=`+${input.substring(0,1)} (${input.substring(1)}`}
        else if (size<8) {input=`+${input.substring(0,1)} (${input.substring(1,4)}) ${input.substring(4)}`}
        // else if (size<16) {input=`+${input.substring(0,1)} (${input.substring(1,4)}) ${input.substring(4,7)}-${input.substring(7,11)}`}
        // else if (size<15) {input=`+${input.substring(0,1)} (${input.substring(1,4)}) ${input.substring(4,7)}-${input.substring(7,11)}`}
    }else{
        if (size>9 && size<18) {input=`${input.substring(0,3)}-${input.substring(3,6)}-${input.substring(6,9)}-${input.substring(9,14)}`}
        else if (size>7 && size<11) {input=`${input.substring(0,3)}-${input.substring(3,6)}-${input.substring(6)}`}
        else if (size>3 && size<8) {input=`${input.substring(0,3)}-${input.substring(3)}`}
    }
    
    if (input !== previousPhone) {
        previousPhone = input
        const specialCharDiff = (input.match(/\D/g) || []).length - specialCharCount;
        cursorPosition += specialCharDiff

        field.value = input
        field.selectionStart = cursorPosition;
        field.selectionEnd = cursorPosition;

        return input.replace(/[-]/g, "")
    }
}

// Shuffle Array

const shuffleArray = (array) => {
    let shuffledArray = []
    let usedIndcies = []

    let i = 0;
    while (i < array.length) {
        let randomNum = Math.floor(Math.random()*array.length);
        if(!usedIndcies.includes(randomNum)) {
            shuffledArray.push(array[randomNum]);
            usedIndcies.push(randomNum);
            i++;
        }

    }
    return shuffledArray;
}

const arrs = [{ name: "Alexander",age: 21 }, {name: "Ogidi", age: 17}, {name: "Chukwunyerem", age: 2}]
const arrs2 = ["Beef", "Fish", "Meat"]

console.log(arrs.map((x) => x.name))