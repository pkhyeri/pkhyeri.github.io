const quotes = [
    {
        quote: '1The way to get started is ro quit taling and begin lalala',
        author: '1Walt Disney1',
    },
    {
        quote: '2The way to get started is ro quit taling and begin lalala',
        author: '2Walt Disney2',
    },
    {
        quote: '3The way to get started is ro quit taling and begin lalala',
        author: '3Walt Disney3',
    },
    {
        quote: '4The way to get started is ro quit taling and begin lalala',
        author: '4Walt Disney4',
    },
    {
        quote: '5The way to get started is ro quit taling and begin lalala',
        author: '5Walt Disney5',
    },
    {
        quote: '6The way to get started is ro quit taling and begin lalala',
        author: '6Walt Disney5',
    },
]

const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');
const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)]; //배열 quotes에서 랜덤으로 배열을 가져오기.

//출력
quote.innerText = todayQuotes.quote;
author.innerText = `- ${todayQuotes.author} -`;