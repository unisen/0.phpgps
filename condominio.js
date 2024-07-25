// Objeto Condominio com os dados da Condominio
// rua 36 setor marista -16.696646, -49.267684 / -16.6972777,-49.2681933
// -16.6972777,-49.2681933,
// T62 SETOR BELA VISTA -16.712235,-49.2674021

// ALDEIA DOS SONHOS -16.8668179,-49.2877177
// Localizacao atual whatsapp - Condominio Dona Ionilda
// -16.865917, -49.282889
// moon club \ ~= 

var Condominio = {
    posicao: {
        latitude: -16.865917, //-16.6972777, // -16.696646, //-16.7122402, //-25.435946,
        longitude: -49.282889 //-49.2681933 //-49.267684 //-49.2648218 //-49.273365	
    },
    valorPorKM: 5,
    distanciaMaxima: 8,

    // Funcao que ira verificar se o cliente esta por perto e ira calcular o valor do servico
    calculaOPreco: function(posicao) {
        var distancia = Distancia.distanciaEntreDoisPontos(posicao, this.posicao);
        // Verifica se o cliente nao estah muito longe
        if (distancia <= this.distanciaMaxima) {
            // Duas casas decimais e troca o . por ,
            var valor = (this.valorPorKM * distancia).toFixed(2).toString().replace('.', ',');
            // Somente duas cadas decimais ja eh o suficiente
            distancia = distancia.toFixed(2);

            if (confirm('Você está a ' + distancia + ' KM. O custo do guincho será R$ ' + valor + '. Posso mandar?')) {
                alert('O guincho chegará em alguns minutos!');
            }
        } else {
            // Somente duas cadas decimais ja eh o suficiente
            distancia = distancia.toFixed(2);
            alert('Ops, você está muito longe, a distância máxima que atendemos é ' + this.distanciaMaxima + ' KM e você está há ' + distancia + ' KM!');
        }
    }
};

// Objeto localizacao, aqui estao as funcoes para trabalhar com a api geolocation
var Localizacao = {

    // Inicia
    inicia: function() {

        // Funcao que serah chamada quando o browser retornar a posicao do usuario
        var sucesso = function(posicao) {
            Condominio.calculaOPreco(posicao.coords);
        };

        // Funcao que serah chamada caso de algum erro nesse processo de obter a posicao
        var erro = function(erro) {
            var erroDescricao = 'Ops, ';
            switch (erro.code) {
                case erro.PERMISSION_DENIED:
                    erroDescricao += 'usuário não autorizou a Geolocation.';
                    break;
                case erro.POSITION_UNAVAILABLE:
                    erroDescricao += 'localização indisponível.';
                    break;
                case erro.TIMEOUT:
                    erroDescricao += 'tempo expirado.';
                    break;
                case erro.UNKNOWN_ERROR:
                    erroDescricao += 'não sei o que foi, mas deu erro!';
                    break;
            }
            alert(erroDescricao)
        };

        // Verifica se o browser do usuario tem suporte a geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(sucesso, erro);
        } else {
            erro();
        }
    }
};

// Objeto para calcular a distancia entre dois pontos
// Adaptado dessa formula http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points
var Distancia = {
    distanciaEntreDoisPontos: function(pontoInicial, pontoFinal) {
        var R = 6371; // Radio da Terra
        var dLat = this.graus2Radianos(pontoFinal.latitude - pontoInicial.latitude);
        var dLon = this.graus2Radianos(pontoFinal.longitude - pontoInicial.longitude);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.graus2Radianos(pontoInicial.latitude)) * Math.cos(this.graus2Radianos(pontoFinal.latitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    },
    graus2Radianos: function(graus) {
        return graus * (Math.PI / 180)
    }
};

$(document).ready(function() {
    Localizacao.inicia();
});

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