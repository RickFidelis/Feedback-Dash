import { getGraphData } from "./script.js"
import { contarPalavras } from "./opinion.js"

function getGraficoPalavrasData(contexto){

    const data = contarPalavras(contexto);
    let dataPalavras = [];

    Object.keys(data).forEach(function(key, val){
        dataPalavras.push([key, data[key]]);
    });

    return dataPalavras
}

const data = getGraphData();
const dataPalavra = getGraficoPalavrasData(data.opiniao); 

const graficoNotaAtendimento = document.getElementById('graficoNotaAtendimento').getContext('2d');
const graficoChanceRecomendar = document.getElementById('graficoChanceRecomendar').getContext('2d');
const graficoProblemaSolucionado = document.getElementById('graficoProblemaSolucionado').getContext('2d');
const graficoPalavras = document.getElementById('graficoPalavras').getContext('2d');

console.log(dataPalavra);

//Grafico de notas de atendimento
new Chart(graficoNotaAtendimento, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets:[{
            label: 'Notas para o Atendimento',
            data: [
                data.notasAtendimento[1],
                data.notasAtendimento[2],
                data.notasAtendimento[3],
                data.notasAtendimento[4],
                data.notasAtendimento[5],
                data.notasAtendimento[6],
                data.notasAtendimento[7],
                data.notasAtendimento[8],
                data.notasAtendimento[9],
                data.notasAtendimento[10]],
            backgroundColor:[
                'rgba(180, 223, 242, 0.8)',
                'rgba(140, 211, 242, 0.8)',
                'rgba(100, 199, 242, 0.8)',
                'rgba(68, 189, 241, 0.8)',
                'rgba(39, 179, 239, 0.8)',
                'rgba(23, 171, 236, 0.8)',
                'rgba(0, 165, 236, 0.8)',
                'rgba(0, 138, 197, 0.8)',
                'rgba(0, 121, 174, 0.8)',
                'rgba(0, 96, 138, 0.8)'
            ],
            borderColor: [
                'rgba(180, 223, 242, 0.8)',
                'rgba(140, 211, 242, 0.8)',
                'rgba(100, 199, 242, 0.8)',
                'rgba(68, 189, 241, 0.8)',
                'rgba(39, 179, 239, 0.8)',
                'rgba(23, 171, 236, 0.8)',
                'rgba(0, 165, 236, 0.8)',
                'rgba(0, 138, 197, 0.8)',
                'rgba(0, 121, 174, 0.8)',
                'rgba(0, 96, 138, 0.8)'
            ],
            borderWidth: 1
        }]
    },
    option: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//Graficos de Chance de recomendação
new Chart(graficoChanceRecomendar, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets:[{
            label: 'Chace de Recomendar os Serviços',
            data: [
                data.chanceRecomendar[1],
                data.chanceRecomendar[2],
                data.chanceRecomendar[3],
                data.chanceRecomendar[4],
                data.chanceRecomendar[5],
                data.chanceRecomendar[6],
                data.chanceRecomendar[7],
                data.chanceRecomendar[8],
                data.chanceRecomendar[9],
                data.chanceRecomendar[10]],
            backgroundColor:[
                'rgba(180, 223, 242, 0.8)',
                'rgba(140, 211, 242, 0.8)',
                'rgba(100, 199, 242, 0.8)',
                'rgba(68, 189, 241, 0.8)',
                'rgba(39, 179, 239, 0.8)',
                'rgba(23, 171, 236, 0.8)',
                'rgba(0, 165, 236, 0.8)',
                'rgba(0, 138, 197, 0.8)',
                'rgba(0, 121, 174, 0.8)',
                'rgba(0, 96, 138, 0.8)'
            ],
            borderColor: [
                'rgba(180, 223, 242, 0.8)',
                'rgba(140, 211, 242, 0.8)',
                'rgba(100, 199, 242, 0.8)',
                'rgba(68, 189, 241, 0.8)',
                'rgba(39, 179, 239, 0.8)',
                'rgba(23, 171, 236, 0.8)',
                'rgba(0, 165, 236, 0.8)',
                'rgba(0, 138, 197, 0.8)',
                'rgba(0, 121, 174, 0.8)',
                'rgba(0, 96, 138, 0.8)'
            ],
            borderWidth: 1
        }]
    },
    option: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//Grafico de Problema Solucionado
new Chart(graficoProblemaSolucionado, {
    type: 'pie',
    data: {
        labels: ['SIM', 'NÃO'],
        datasets:[{
            label: 'Problema Solucionado',
            data: [
                data.problemaSolucionado,
                data.problemaNaoSolucionado
            ],
            backgroundColor:[
                'rgba(0, 226, 138, 0.8)',
                'rgba(227, 48, 34, 0.8)'
            ]
        }]
    },
    option: {
        layout: {
            padding: 20
        }
    }
});

new Chart(graficoPalavras, {
    type: 'bar',
    data: {
        labels: [
            dataPalavra[0][0],
            dataPalavra[1][0],
            dataPalavra[2][0],
            dataPalavra[3][0],
            dataPalavra[4][0],
            dataPalavra[5][0],
            dataPalavra[6][0],
            dataPalavra[7][0],
            dataPalavra[8][0],
            dataPalavra[9][0]
        ],
        datasets:[{
            label: 'Palavras mais usadas nas opiniões',
            data: [
                dataPalavra[0][1],
                dataPalavra[1][1],
                dataPalavra[2][1],
                dataPalavra[3][1],
                dataPalavra[4][1],
                dataPalavra[5][1],
                dataPalavra[6][1],
                dataPalavra[7][1],
                dataPalavra[8][1],
                dataPalavra[9][1]
            ],
            backgroundColor:[
                'rgba(180, 223, 242, 0.8)',
                'rgba(140, 211, 242, 0.8)',
                'rgba(100, 199, 242, 0.8)',
                'rgba(68, 189, 241, 0.8)',
                'rgba(39, 179, 239, 0.8)',
                'rgba(23, 171, 236, 0.8)',
                'rgba(0, 165, 236, 0.8)',
                'rgba(0, 138, 197, 0.8)',
                'rgba(0, 121, 174, 0.8)',
                'rgba(0, 96, 138, 0.8)'
            ],
            borderColor: [
                'rgba(180, 223, 242, 0.8)',
                'rgba(140, 211, 242, 0.8)',
                'rgba(100, 199, 242, 0.8)',
                'rgba(68, 189, 241, 0.8)',
                'rgba(39, 179, 239, 0.8)',
                'rgba(23, 171, 236, 0.8)',
                'rgba(0, 165, 236, 0.8)',
                'rgba(0, 138, 197, 0.8)',
                'rgba(0, 121, 174, 0.8)',
                'rgba(0, 96, 138, 0.8)'
            ],
            borderWidth: 1
        }]
    },
    option: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})