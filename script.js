// Data
const Quotes=[
    {
        quote:`Life is what happens when you're busy making other plans`,
        author:'--Rohit Palusa'
    },
    {
        quote:`I attribute my success to this: I never gave or took any excuse.`,
        author:'--Florence Nightingale'
    },
    {
        quote:`Go confidently in the direction of your dreams. Live the life you have imagined.`,
        author:'--Henry David Thoreau'
    },
    {
        quote:`People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.`,
        author:'--Zig Ziglar'
    },
    {
        quote:`Life is 10% what happens to me and 90% of how I react to it.`,
        author:'--Charles Swindoll'
    }
]

// Access the elements
const DisplayElem=document.getElementById('display');
const authorElem=document.getElementById('Author');
const Btn=document.getElementById('generate');

//Function to generate different quotes
const RandomQuote=()=>{
    // Logic to generate random quotes
    let index=Math.floor(Math.random()*(Quotes.length))
    // to display the output
    DisplayElem.innerHTML=Quotes[index].quote
    // To display the output of the author
    authorElem.innerHTML=Quotes[index].author
}
//buton functionality
// Btn.onClick=RandomQuote
Btn.addEventListener('click',RandomQuote)