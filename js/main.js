function birja(narx, toNimaga) {
    if(isNaN(narx)) {
        console.log('Raqam kiriting!!!');
    }

    if(toNimaga === "d") {
        return narx * 0.000088;
    }
    if(toNimaga === "r") {
        return narx * 0.0074;
    }

    if(toNimaga === "e") {
        return narx * 0.000081;
    }

    if(toNimaga === "ua") {
        return narx * 0.0026;
    }

    if(toNimaga === "t") {
        return narx * 0.0013;
    }
    
    else {
        console.log('Boshqa narsaga qodir emasman!');
    }
} 

let sum = Number(prompt('Narxini kiriting!!'));
let symbol = prompt('To convert dollar enter = "d", ruble = "r", euro = "e", ukrainian grivn = "ua", Turkish Lira = "t"');

// let birj = birja(sum,symbol);
console.log(birja(sum,symbol));;
