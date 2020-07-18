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
}


//new obj to data array
function addData(obj) {
    data.push(obj)
}








getRandomUser()