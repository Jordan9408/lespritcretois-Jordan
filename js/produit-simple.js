///////////////////CATÉGORIE DES PRODUIT-SIMPLE - STAGE 2//////////////////////
'use strict'
// récupérer l'url actuelle
const currentUrl = new URL(window.location.href);
// récupérer id
const getId = currentUrl.searchParams.get('id');
// mettre les données en objet JavaScript
const data = JSON.parse(sessionStorage.getItem('data'));

const detailProduct = document.getElementById('produit-simple');
let item;


const displayProduct = (getId, data) => {
    let detailHtml, productPrice;
    for (let item of data.products) {
        const { name, image, description, price } = item;

        if (item.id == getId) {
            productPrice = price;

            detailHtml = `
                <article>
                    <h3>${item.name}</h3>
                    <div>
                        <figure><img src="./img/products/${item.category}/${item.subCategory}/${item.image}" alt="${item.name}">
                        </figure>
                        <div>
                            <p></p>
                            <p>${item.description}</p>
                            <p></p>
                            <footer>
                                <form id="panier"><input type="hidden" id="quantity" value="1"><input type="number" min="1"
                                        step="1" value="1" id="price"><span id="calcul-price">${item.price.toFixed(2)}€</span>
                                        <button type="submit" class="bt-panier" id="bt-panier" href="panier.html?id=1">Ajouter au panier</button>
                                </form>
                            </footer>
                        </div>
                    </div>
                </article>
                `;
            break;
        }
    }
    detailProduct.innerHTML = detailHtml;

    // calculer le prix
    const quantityInput = document.querySelector('#price');
    const calculPrice = document.querySelector('#calcul-price');
    quantityInput.addEventListener('input', () => {
        const quantity = Number(quantityInput.value);
        let total = quantity * productPrice;
        total = total.toFixed(2);
        calculPrice.innerHTML = total + '€';
    });

    // Ajouter le produit au panier
    const cartForm = document.querySelector('#panier');
    cartForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtenir le contenu actuel du panier
        let cart = JSON.parse(localStorage.getItem('cart'));

        // Ajouter le produit au panier avec le prix et la quantité
        const quantity = quantityInput.value;
        cart[`item${getId}`] = { item, quantity, total: (quantity * productPrice) };

        // Stocker les données de panier mises à jour
        localStorage.setItem("cart", JSON.stringify(cart));
    });
}
displayProduct(getId, data);


