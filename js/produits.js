///////////////////////////////////////////////////////////////////////
///////////////////CATÉGORIE DES PRODUITS-STAGE 1//////////////////////
// chargement du JSON se fera avec l’url

const urlJson = "http://127.0.0.1:5500/json/products.json";

// load data
fetch(urlJson)
    .then(response => {
        console.log(response.ok, response.status);
        if (!response.ok) {
            //code error en tete > 299 
            //appeler une fonction qui traitera l'erreur
        }
        switch (response.status) {
            case 404:
                ///page error404
                const error404 = window.location.href = '../error404.html';
                console.log(error404);
                break;
            ////etc
        }
        return response.json();
    })
    // transformer Objet JSON en chaines de caractère
    .then(data => {
        sessionStorage.setItem('data', JSON.stringify(data))
        console.log(data.products)
        displayData(data.products) //avoir les données produits

    })
    .catch(error => console.log(error))

// display data
const displayData = (products) => {
    const itemsProductsContainer = document.querySelector("#produits");

    let htmlItem = "<ul>"

    products.forEach((product) => {

        htmlItem += `
                <li>
                    <a href="produit-simple.html?id=${product.id}">
                    <img src="./img/products/${product.category}/${product.subCategory}/${product.image}">
                        <h3>${product.name}</h3>
                        <p>${product.price} €</p>
                    </a>
                </li>
            `;
    })

    htmlItem += "</ul>";

    itemsProductsContainer.innerHTML = htmlItem;
};







