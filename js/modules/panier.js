///////////////////CATÉGORIE DES PANIER - STAGE 3//////////////////////
'use strict'
// récupérer l'url actuelle
const currentUrl = new URL(window.location.href);
console.log(currentUrl)
// récupérer id
const getId = currentUrl.searchParams.get('id');
console.log(getId)
// mettre les données en objet JavaScript
// const data = JSON.parse(sessionStorage.getItem('data'));
// console.log(data)

// const displayProduct = (getId, data) => {
//     let productHtml;
//     for (let item of data.products) {
//         const { name, image, description, price } = item;
//         if (item.id == getId) {

//             detailHtml = `
//                 <article>
//                     <h3>${item.name}</h3>
//                     <div>
//                         <figure><img src="./img/products/${item.category}/${item.subCategory}/${item.image}" alt="${item.name}">
//                         </figure>
//                         <div>
//                             <p></p>
//                             <p>${item.description}</p>
//                             <p></p>
//                             <footer>
//                                 <form id="panier"><input type="hidden" id="quantity" value="1"><input type="number" min="1"
//                                         step="1" value="1" id="price" oninput="calculPrice()"><span id="calcul-price"></span>
//                                         <button type="submit" class="bt-panier" id="bt-panier" href="./panier.html?id=1">Ajouter
//                                         au panier</button>
//                                 </form>
//                             </footer>
//                         </div>
//                     </div>
//                 </article>
//             `;
//             break;
//         }
//     }
// }
/*
<tbody>
    <tr>
        <td><img src="img/products/alimentaire/aperitifs/dolmades-feuille-de-vignes-traditionelles.jpg"
            alt="Dolmades (Feuille de vigne farcie au riz) 200g"></td>
        <td>Dolmades (Feuille de vigne farcie au riz) 200g</td>
        <td>7.70</td>
        <td><input type="number" id="1" min="1" max="50" value="1"></td>
        <td>7.70</td>
        <td><a href="1" >X</a></td>
    </tr>
</tbody>
            </table >

            <button id="recalcul-panier">Recalculer le panier</button>
            <div id="totalPrice">Total: 7.70 €</div>
            */