import { getGraphData } from "./script.js"

const data = getGraphData();
const opinionData = data.opiniao;
//const justTextOpinion = function(=>({for}))

const elementoPai = document.getElementById('elemento-detalhes');
const tituloSatisfacao = document.getElementById('tituloSatisfacao');
const imgSatisfacao = document.getElementById('imgSatisfacao');
const containerSatisfacao = document.getElementById("satisfacao-container");

const mediaTotal = (data.mediaChanceRecomendar + data.mediaNotasAtendimento) / 2;
const notasMediaSatisfacao= {
    "1": ['titleBad', 'imgBad', '#ff2600', "Os clientes estão muito insatisfeitos"],
    "2": ['titleBad', 'imgBad', '#ff2600', "Os clientes estão muito insatisfeitos"],
    "3": ['titleBad', 'imgBad', '#ff2600', "Os clientes estão muito insatisfeitos"],
    "4": ['titleBad', 'imgBad', '#ff2600', "Os clientes estão muito insatisfeitos"],
    "5": ['titleNotSoGood', 'imgNotSoGood', '#ffc400ee', "Os clientes estão um pouco insatisfeitos"],
    "6": ['titleNotSoGood', 'imgNotSoGood', '#ffc400ee', "Os clientes estão um pouco insatisfeitos"],
    "7": ['titleGood', 'imgGood', '#1eb400', "Os clientes estão satisfeitos"],
    "8": ['titleGood', 'imgGood', '#1eb400', "Os clientes estão satisfeitos"],
    "9": ['titleGreat', 'imgGreat', '#1f97e7', "Os clientes estão muito satisfeitos"],
    "10": ['titleGreat', 'imgGreat', '#1f97e7', "Os clientes estão muito satisfeitos"]
};

function adicionarDiv(elemento, id, texto) {

    const newDiv = document.createElement("div");
    const newP = document.createElement("p");
    const newTitulo = document.createElement("h3");
    const newTituloContent = document.createTextNode("Cliente: " + id);
    const newPContent = document.createTextNode(texto);
    
    newP.appendChild(newPContent);
    newTitulo.appendChild(newTituloContent);

    newDiv.appendChild(newTitulo);
    newDiv.appendChild(newP);
    newDiv.setAttribute('Class', 'detalhes');

    elemento.insertBefore(newDiv, elemento.children[0]);
}

function setOpinionStatus(mediaTotal){
    let media = Math.round(mediaTotal)
    for(let i in notasMediaSatisfacao) {
        
        let nameClass = notasMediaSatisfacao[i];
        if (media == i) {
            tituloSatisfacao.classList.toggle(nameClass[0]);
            imgSatisfacao.classList.toggle(nameClass[1]);
            containerSatisfacao.style.borderColor = nameClass[2];
            tituloSatisfacao.innerText = nameClass[3]
        }
    }
}

function setDetalhes(){
    for(let i in opinionData) {
        let opinion= opinionData[i];
        adicionarDiv(elementoPai, opinion[0], opinion[1]);
    }
}

function atualizarDados(){
    setDetalhes();
    setOpinionStatus(mediaTotal);
}


function desespalhaLixo(contexto, lixo){

    
    while(contexto.indexOf(lixo) != -1){

        contexto.splice(contexto.indexOf(lixo), 1);

        console.log(contexto);

    }
    
    return contexto;

}

function limparContexto(contexto){

    const badDictionary = ["", "de", "a", "o", "que", "e", "do", "da", "em", "um", 
        "para", "é", "com", "não", "uma", "os", "no", "se", "na", "por", "mais", 
        "as", "dos", "como", "mas", "foi", "ao", "ele", "das", "tem", "à", "seu", 
        "sua", "ou", "ser", "quando", "muito", "há", "nos", "já", "está", "eu", 
        "também", "só", "pelo", "pela", "até", "isso", "ela", "entre", "era", 
        "depois", "sem", "mesmo", "aos", "ter", "seus", "quem", "nas", "me", 
        "esse", "eles", "estão", "você", "tinha", "foram", "essa", "num", 
        "nem", "suas", "meu", "às", "minha", "têm", "numa", "pelos", "elas", 
        "havia", "seja", "qual", "será", "nós", "tenho", "lhe", "deles", 
        "essas", "esses", "pelas", "este", "fosse", "dele", "tu", "te", 
        "vocês", "vos", "lhes", "meus", "minhas", "teu", "tua", "teus", 
        "tuas", "nosso", "nossa", "nossos", "nossas", "dela", "delas", 
        "esta", "estes", "estas", "aquele", "aquela", "aqueles", 
        "aquelas", "isto", "aquilo", "estou", "está", "estamos", 
        "estão", "estive", "esteve", "estivemos", "estiveram", "estava", 
        "estávamos", "estavam", "estivera", "estivéramos", "esteja", 
        "estejamos", "estejam", "estivesse", "estivéssemos", "estivessem", 
        "estiver", "estivermos", "estiverem", "hei", "há", "havemos", "hão", 
        "houve", "houvemos", "houveram", "houvera", "houvéramos", "haja", 
        "hajamos", "hajam", "houvesse", "houvéssemos", "houvessem", "houver", 
        "houvermos", "houverem", "houverei", "houverá", "houveremos", "houverão", 
        "houveria", "houveríamos", "houveriam", "sou", "somos", "são", "era", 
        "éramos", "eram", "fui", "foi", "fomos", "foram", "fora", "fôramos", 
        "seja", "sejamos", "sejam", "fosse", "fôssemos", "fossem", "for", 
        "formos", "forem", "serei", "será", "seremos", "serão", "seria", 
        "seríamos", "seriam", "tenho", "tem", "temos", "tém", "tinha", 
        "tínhamos", "tinham", "tive", "teve", "tivemos", "tiveram", "tivera", 
        "tivéramos", "tenha", "tenhamos", "tenham", "tivesse", "tivéssemos", 
        "tivessem", "tiver", "tivermos", "tiverem", "terei", "terá", "teremos", 
        "terão", "teria", "teríamos", "teriam"]; 

        for (let indexOne = 0; indexOne < badDictionary.length; indexOne++) {
                    
            contexto = desespalhaLixo(contexto, badDictionary[indexOne]);
            
        }

        return contexto;
}

function organizarObjeto(objetoDesorganizado){

    let objectToArray = [];
    let objetoOrganizado = {}

    for(var elementos in objetoDesorganizado) {
        objectToArray.push([elementos, objetoDesorganizado[elementos]]);
    }

    objectToArray.sort(function(a,b){
        return b[1] - a[1];
    });

    objectToArray.forEach(function(elemento){
        objetoOrganizado[elemento[0]] = elemento[1];
    })

    return objetoOrganizado
}

export function contarPalavras(opinionData){

    let newContexto = [];
    let palavrasDesorganizadas = {};

    for(let i in opinionData){
        
        let contexto = opinionData[i];

        let contextoDivido = contexto[1].toLowerCase().split(' ');

        contextoDivido = limparContexto(contextoDivido);

        for (const iterator of contextoDivido) {
            newContexto.push(iterator);
        }
    }

    for (const newContextoLayer1 of newContexto){

        palavrasDesorganizadas[newContextoLayer1] = newContexto.filter(element => element == newContextoLayer1).length;

    }

    const palavrasOrganizadas = organizarObjeto(palavrasDesorganizadas); 

    return palavrasOrganizadas
}

atualizarDados()
