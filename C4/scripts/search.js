// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// const getdata = async(url) => 
// {
//     try
//     {
//        let res = await fetch(url)
//        let data = await res.json();
//        let mydata = 
//     }
// }


import { navbar } from "../components/navbar.js";
document .getElementById("navbar").innerHTML = navbar();

let searchNews = async (value) =>
{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)

        let data = await res.json();
        console.log('data: ',data.articles);

        return data;
    }
    catch(err)
    {
        console.log('err:', err);
    }
}
let append = (data, container) =>
{
    data.forEach(({ description,title,urlToImage }) => 
    {

    let div = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('class', 'img')
    image.src = urlToImage;

    let tit = document.createElement('h3');
    tit.innerText = title;

    let des = document.createElement('p');
    des.innerText = description;
    div.append(image,tit,des);
    container.append(div);
})
localStorage.setItem('news',JSON.stringify(data));
}

export { searchNews, append }