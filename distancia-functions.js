// -16.865917, -49.282889
//-16.865737, -49.282894

// ALDEIA DOS SONHOS -16.8668179,-49.2877177
// Localizacao atual whatsapp - Condominio Dona Ionilda
// -16.865917, -49.282889

// Rua 36, 1166 Setor marista
// -16.696646, -49.267684

// Chuck's Solution
function getDistanceFromLatLonInKm2(lat1, lon1, lat2, lon2, units) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    var miles = d / 1.609344;

    if (units == 'km') {
        return d;
    } else {
        return miles;
    }
}


function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}



$(document).ready(function() {
    //Localizacao.inicia();

    // Distancia da casa - loc no computador e do celular loc compartilhada atual via Whatsapp,  
    // 0,020 => aproximadamente 20 metros 
    //var distanc2pontos = getDistanceFromLatLonInKm2(-16.865917, -49.282889, -16.865737, -49.282894, 'km');

    // entre 2 pontos no condominio aldeia dos sonhos 0.5 ~= 500 mts
    //var distanc2pontos = getDistanceFromLatLonInKm2(-16.865917, -49.282889, -16.8668179, -49.2877177, 'km');

    // do cond ao setor marista 18.891553816484954 ~= 18,9 Km
    var distanc2pontos = getDistanceFromLatLonInKm2(-16.865917, -49.282889, -16.696646, -49.267684, 'km');


    alert(distanc2pontos);
});