const fs = require('fs');

function readJSON(path){
    let fileJSON = fs.readFileSync(path, 'utf-8')
    return JSON.parse(fileJSON)
}

function writeJSON(path, dataJS){
    let fileJSON = JSON.stringify(dataJS, null, ' ')
    fs.writeFileSync(path, fileJSON)
}

let prints = readJSON('./data/prints.json')
let newPrints = readJSON('./data/prints copy.json')


const printsController = {
    /* list: () => {
        prints.forEach(print => {
            console.log(`La impresora ${print.name} es modelo ${print.model} y su precio es U$D ${print.price}`);
        });
    }, */
    list: function(){
        prints.forEach(function(print) {
            console.log(`La impresora ${print.name} es modelo ${print.model} y su precio es U$D ${print.price}`);
        });
    }, 
    filterByPrice: (price) => {
        let results = prints.filter(function(print){
            return print.price <= price
        })
        if (results.length > 0) {
            console.log(results);
        } else {
            console.log('No hay productos con ese precio');
        }
    },
    newPrice: function(percent){
        let newPrices = prints.map(function(print){
            return {
                ...print,
                price : print.price * percent
            }
        })
        return writeJSON('./data/prints.json', newPrices)
    }

}


// printsController.filterByPrice(100)
printsController.newPrice(1.2);
printsController.list()