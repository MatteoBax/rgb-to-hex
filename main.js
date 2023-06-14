function zFill(n){
    return n.padStart(2, '0');
}
function convertToHex(r,g,b){
    // Converto ad int i valori delle variabili r g b a causa di un bug con le stringhe
    r = parseInt(r);
    g = parseInt(g);
    b = parseInt(b);

    var hex = "";
    if((r>=0 && r<=255) && (g>=0 && g<=255) && (b>=0 && b<=255)){
        r = zFill(r.toString(16));
        g = zFill(g.toString(16));
        b = zFill(b.toString(16));
        hex = "#" + r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
        return hex;
    }else{
        return false;
    }
    
    
}
module.exports = {
    convertToHex
}