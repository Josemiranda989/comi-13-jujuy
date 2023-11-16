
const getMayor = (v1,v2) => {
    if(v1 > v2) return v1;

    return v2;
}

const sumatoria = ( array ) => {
    let total = 0;
    for(let i=0; i < array.length; i++){
        total = total + array[i];
    }
    return total;
}

module.exports = {
    getMayor,
    sumatoria
};