const addUserBtn = document.getElementById('add_user')
const doubleBtn = document.getElementById('double')
const millionairesBtn = document.getElementById('millionaires')
const richestBtn = document.getElementById('richest')
const calculateBtn = document.getElementById('calculate')
const main = document.getElementById('main')


let data = [];


//get randome user
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json()

    //console.log(data.results[0].name)

    const user = data.results[0]

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    addData(newUser)
}

//double money
function doubleMoney() {
    data = data.map(user => {
        return { ...user, money: user.money * 2 }
    })

    updateDom();
}


// sorting richest user
function sortByRichest() {
    data.sort((a, b) => b.money - a.money)

    updateDom()
}


//filtering millionaires
function showMillionaires() {
    data = data.filter(user => user.money > 1000000)

    updateDom()
}


// calculating Total money
function calculateTotal() {
    const total = data.reduce((acc, user) => (acc += user.money), 0)

    // console.log(formatMoney(total));

    const totalEl = document.createElement('div')
    totalEl.innerHTML = `<h3> Total: <strong>${formatMoney(total)}</strong></h3>`

    main.appendChild(totalEl)
}


//new obj to data array
function addData(obj) {
    data.push(obj)

    updateDom()
}


//update dom
function updateDom(providedData = data) {
    // clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'

    providedData.forEach(item => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)
            }`;
        main.appendChild(element)
    })
}




//format number as currency 
function formatMoney(number) {
    //i got this from here => https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
    return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}




//event listeners
addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleMoney)
richestBtn.addEventListener('click', sortByRichest)
millionairesBtn.addEventListener('click', showMillionaires)
calculateBtn.addEventListener('click', calculateTotal)



getRandomUser()
getRandomUser()
getRandomUser()