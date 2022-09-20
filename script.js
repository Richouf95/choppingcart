let body = document.body;
let voirPanier = document.getElementById('voirPanier');
let achats = document.getElementById('achats');
let p = document.querySelectorAll('.p');
let xt = document.querySelectorAll('.xt');
let liste = document.getElementById('liste');
let t = document.getElementById('t');
let nitem = document.getElementById('nitem');
let titem = document.getElementById('titem');
let clear = document.getElementById('clear');
let checkout = document.getElementById('checkout');

let prix = [5, 10, 5, 15, 5, 20, 10, 5, 15];
let produits = ['Chou Café', 'INside Lyon','Dauphine', 'FR Hiver','BBC GF', 'Viroflay', 'Fraisier','Croissant', 'Tastet'];
let total = 0;
let nbreItem = 0;

voirPanier.addEventListener('click', f);
    function f() {
        achats.style.visibility = 'visible';
        clear.addEventListener('click', fClear);
            function fClear() {
                location.reload();
            }
    } 

body.addEventListener('click', f2, true);
    function f2() {
        achats.style.visibility = 'hidden';
    }

for(let i = 0; i < 10; i++) {
    console.log(i);
    xt[i].addEventListener('mouseover', h);
        function h() {
            p[i].style.visibility = 'visible';
        }
    xt[i].addEventListener('mouseout', hh);
        function hh() {
            p[i].style.visibility = 'hidden';
        }
    
    p[i].addEventListener('click', a);
        function a() {
            alert(produits[i] + ' Ajouté au panier pour : $ ' + prix[i]);
            nbreItem += 1;
            total += prix[i];
            t.textContent = total;
            nitem.textContent = nbreItem;
            titem.textContent = total;
            console.log('Valeur de total : ' + total);
            let item = document.createElement('div');
                item.classList.add('items');
                item.innerHTML = `<div>
                                    <img src="g${i+1}.jpeg" alt="" class="Xtimgptit" style="min-width : 50px; max-width : 50px; min-height : 50px; max-height : 50px; border-radius : 50%;">
                                </div>
                                <div><p>${produits[i]}</p></div>
                                <div>$ ${prix[i]}</div>`;
                liste.appendChild(item);
        }
}