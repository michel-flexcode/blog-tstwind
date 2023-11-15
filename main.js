
import './style.css';
import data from './public/data.json';
import { nav } from './nav';

const ListeArticles = () => {
  let html = '';
  for (let i = 0; i < data.length; i++) {
    const article = data[i];

    // <img src="${article.avatar}" class="card-img-top" alt="avatar de ${article.prenom} ${article.nom}"></img>
    let articleCard = `
      <a href="/article/?id=${article.id}">
        <div>
          <h5>${article.title}</h5>
          <p>${article.content}</p>
          <p>${article.author}</p>
        </div>
      </a>
    `;
    html += articleCard;
  }
  return html;
};

document.querySelector('#app').innerHTML = `
${nav}  
<main>
    <div class="container-fluid my-4">
      <div class="d-flex gap-3 flex-wrap justify-content-center">
        ${ListeArticles()}
      </div>
    </div>
  </main>
`;


const searchInput = document.querySelector("search");
searchInput.addEventListener

