let txt;
let index = [];
let chapterValue = [];
let paragraph = [];


function preload(){
    txt = loadStrings("les-chiendent.txt");
}

function setup(){
    noCanvas();
    // createDiv(join(txt, '</br>'));
    txt.forEach((value, i) => {
        if (value.match("CHAPITRE")){
            
            index.push(i)
            chapterValue.push(value);
        }
    });
    // createElement('h3', txt[index[0]]);
    for (let i=0, size = index.length; i<size; i++){
        paragraph.push(txt.slice(index[i]+1, index[i+1]).join('<br/>'));
    }
}


