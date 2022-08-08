const figuras = [
    {
        id: 1,
        name: "Man-Spider",
        imagen: "../images/Man-Spider.jpeg",
        stock: 20,
        price: 95
    },
    {
        id: 2,
        name: "SpiderMan",
        imagen: "../images/SpiderMan.jpeg",
        stock: 17,
        price: 55
    },
    {
        id: 3,
        name: "Simbionte",
        imagen: "../images/Simbionte.jpeg",
        stock: 24,
        price: 62
    },
    {
        id: 4,
        name: "Venom",
        imagen: "../images/venom-4206.jpeg",
        stock: 31,
        price: 51
    },
    {
        id: 5,
        name: "Daredevil",
        imagen: "../images/Daredevil.jpeg",
        stock: 39,
        price: 22
    },
    {
        id: 6,
        name: "Rhino",
        imagen: "../images/Rhino.jpeg",
        stock: 44,
        price: 36
    },
    {
        id: 7,
        name: "Scarlet-Spider",
        imagen: "../images/Scarlet-Spider.jpeg",
        stock: 12,
        price: 147
    },
    {
        id: 8,
        name: "SpiderMan 2099",
        imagen: "../images/SpiderMan 2099.jpeg",
        stock: 19,
        price: 449
    }
];

 const getFetch = new Promise((resolve, reject) => {
    let condition = true;
    if(condition) {
        setTimeout(() => {
            resolve(figuras)
            console.log(figuras)
        }, 2000);
    }
    else {
        reject(console.log("No data"));
    }
 });

 export default getFetch;