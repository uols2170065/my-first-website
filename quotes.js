const quotes = [
    {
        quote: "시간을 지배할 줄 아는 사람은 인생을 지배할 줄 아는 사람이다.",
        author: "에센 바흐", 
    },
    {
        quote: "짧은 인생은 시간낭비에 의해 더욱 짧아진다.",
        author: "S. 존슨", 
    },  
    {
        quote: "미래를 신뢰하지 마라, 죽은 과거는 묻어버려라, 그리고 살아있는 현재에 행동하라.",
        author: "롱펠로우", 
    },

    {
        quote: "시간을 선택하는 것은 시간을 절약하는 것이다.",
        author: "드래커", 
    },
    {
        quote: "가장 바쁜 사람이 가장 많은 시간을 갖는다. 부지런히 노력하는 사람이 결국 많은 대가를 얻는다.",
        author: "알렉산드리아 피네", 
    },
    {
        quote: "내가 헛되이 보낸 오늘 하루는 어제 죽어간 이들이 그토록 바라던 하루이다.",
        author: "소포클레스", 
    },
    {
        quote: "변명 중에서도 가장 어리석고 못난 변명은 '시간이 없어서' 라는 변명이다.",
        author: "에디슨", 
    },
    {
        quote: "30분이란 티끌과 같은 시간이라고 말하지말고, 그 동안이라도 티끌과 같은 일을 처리하는 것이 현명한 방법이다.",
        author: "괴테", 
    },
    {
        quote: "세월은 누구에게나 공평하게 주어진 자본금이다. 이 자본을 잘 이용한 사람에겐 승리가 있다.",
        author: "아뷰난드", 
    },
    {
        quote: "승자는 시간을 관리하며 살고, 패자는 시간에 끌려 산다",
        author: "J.하비스", 
    },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
