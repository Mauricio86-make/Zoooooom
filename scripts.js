const list = document.querySelector('ul')                  
const buttonShowAll = document.querySelector(".show-all")  
const buttonMapAll = document.querySelector(".map-all")
const sumAll = document.querySelector(".sum-All")
const filterAll = document.querySelector(".filter-all")

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    return newValue
}                                       

function showAll(productsArray) {   
    let myLi = ''                                             
    productsArray.forEach((product) => {                         
        myLi += `
            <li>
                 <img src=${product.src}>
                 <p>${product.name}</p>
                 <p class="item-price">${formatCurrency(product.price)}</p>
            </li>
        `
    })

    list.innerHTML = myLi
}

function mapAllitems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,  //Spread Operator pega todo o Array e você só pede para mddificar o que voce quiser
        price: product.price * 0.9,
       
    }))

    showAll(newPrices)
} 

function sumAllItems() {
    const totalValue = menuOptions.reduce( (acc, curr) => acc + curr.price, 0)

    list.innerHTML =`
        <li>
            <p>O valor total dos itens ${formatCurrency(totalValue)}</p>
        </li>
    `

    console.log(totalValue)
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)
    showAll(filterJustVegan)
}



buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll. addEventListener("click", mapAllitems)
sumAll.addEventListener("click", sumAllItems)
filterAll.addEventListener("click", filterAllItems)

