// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// import { navbar } from '../components/navbar.js'
// import { sidebar } from '../components/sidebar.js';

// document.getElementById('navbar').innerHTML = navbar()
// console.log(navbar);
// import {getdata, append} from './search.js';
 
// let searchNews = document.getElementById('results')

import { sidebar } from '../components/sidebar.js';
document.getElementById('sidebar').innerHTML = sidebar()
console.log(sidebar);




import { navbar } from '../components/navbar.js'
document.getElementById('navbar').innerHTML = navbar()

import { searchNews, append } from './search.js';

let value = document.getElementById('search_input').value;
const url1 = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`;

let search = (e) => 
{
    if(e.key === 'Enter')
    {
        let value = document.getElementById('search_input')
        
        searchNews(value).then((data) =>
        {
            console.log('data:', data);

         let container = document.getElementById('results');
         container.innerHTML = null;
         append(data.articles, container);
        })
    }
}
document.getElementById('search_input').addEventListener('keydown',search);







let categories = document.getElementById('sidebar').children;




function cSearch() 
{
    console.log(this.id)

    searchNews(url1, this.id).then((data) => 
    {
        let container = document.getElementById('categories');
        container.innerHTML = null;
         
        append(data.articles, container);
    })
}

for(let elm of categories)
{
    elm.addEventListener('click', cSearch)
}

