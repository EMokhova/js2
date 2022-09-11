const goods = [
    {
        id: 1,
        name: "Блуза женская",
        description: "Белая изяжная офисная блуза для женщин",
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 1500,
        available: true,
    },
    {
        id: 2,
        name: "Юбка женская",
        description: "Черная юбка-карандаш",
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 2000,
        available: true,
    },
    {
        id: 3,
        name: "Джемпер",
        description: "Стильный синий демпер сруящегося силуэта",
        sizes: ["S", "M", "L"],
        price: 2500,
        available: true,
    },
    {
        id: 4,
        name: "Джемпер мужской",
        description: "Мужской бежевый джемпер из натуральной шерсти",
        sizes: ["M", "L", "XL", "XXL", "XXXL"],
        price: 3500,
        available: true,
    },
    {
        id: 5,
        name: "<Брюки мужские",
        description: "Классические мужские брюки со стрелками",
        sizes: ["L", "XL", "XXXL"],
        price: 2800,
        available: true,
    } 
];

const basket = [
    {
        good:1,
        amount:2,
    },
    {
        good:3,
        amount:3,
    },
    {
        good:5,
        amount:1,
    },
];

function addGood(goodId, amount) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].good === goodId) {
            basket[i].amount += amount;
            return basket;
            }
        }
    basket.push({"good":goodId, "amount": amount});
    return basket;
}

function clearBasket() {
    basket.splice(0, basket.length);
    return basket;

}

function deleteGood(goodId) {
    for(let i = 0; i < basket.length; i++) {
        if (basket[i].good == goodId) {
            basket.splice(i, 1);
            return basket;
        }
    }
}

function totalAll() {
    result = {
        totalAmount: 0,
        totalSum: 0
    }
    for(let i = 0; i < basket.length; i++) {
        result.totalAmount += basket[i].amount;
        for (let count = 0; count < goods.length; count++) {
            if (goods[count].id === basket[i].good) {
                result.totalSum += goods[count].price * basket[i].amount;
            }
        }
        

    }
    return result;
}


//console.log(addGood(1,5));
//console.log(deleteGood(1));
//console.log(clearBasket());
console.log(totalAll());
