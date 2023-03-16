const content_editor = document.querySelector("#editor");


document.getElementById('center').addEventListener('click', ()=> textAlign('center'));
document.getElementById('justify').addEventListener('click', ()=> textAlign('justify'));
document.getElementById('left').addEventListener('click', ()=> textAlign('left'));
document.getElementById('right').addEventListener('click', ()=> textAlign('right'));


function textAlign(text_align){
    let selection = document.getSelection();
    let element_selection = selection.anchorNode.parentElement;
    element_selection.style.textAlign = text_align;
}