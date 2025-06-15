
let inputVal=document.querySelector('#inputVal');
let outputVal=document.querySelector('#outputVal');
let btn=document.querySelector('#btnShort')



btn.addEventListener('click', ()=>{
       let op = inputVal.value;

    if (!op) return alert("Enter a URL first");

    // Generate a random short code
    let code = Math.random().toString(36).substring(2, 8); // like 'xj2k9f'
    let fakeShortURL = "https://saint69.ly/" + code;

    outputVal.value = fakeShortURL;
    console.log(`Original: ${op}, Shortened: ${fakeShortURL}`);
})