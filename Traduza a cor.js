/*
Receba o nome de uma cor em inglês e traduza para outra língua usando switch (por exemplo, inglês para francês).
*/

function traduzaCor(cor) {
    switch(cor) {

        case "Yellow":
            console.log("C'est Jaune");
                break;

        case "Green":
            console.log("C'est Vert");
                break;

        case "Red":
            console.log("C'est Rouge");
                 break;

        case "Purple":
            console.log("C'est Violet");
                 break;

        case "White":
            console.log("C'est Blanc");
                 break;

        default: 
            console.log("Desculpe, algo está errado!")
            
    }

}

traduzaCor("Red");