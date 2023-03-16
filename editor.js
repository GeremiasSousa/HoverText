const content_editor = document.querySelector("#editor");



document.getElementById('center').addEventListener('click', ()=> textAlign('center'));
document.getElementById('justify').addEventListener('click', ()=> textAlign('justify'));
document.getElementById('left').addEventListener('click', ()=> textAlign('left'));
document.getElementById('right').addEventListener('click', ()=> textAlign('right'));

function text() {
    let res_tag = content_editor.innerText.split('\n')
        .filter(content => content.trim())
        .map((content, count) => `<p id='${count}'>${content}</p>`);
    content_editor.innerHTML = '';
    res_tag.forEach(element => {
        content_editor.innerHTML += element;
    });
}


function textAlign(text_align){
    text();
    let selection = document.getSelection();
    console.log(getSelection());
    // let element_selection = selection.anchorNode.parentElement;
    // element_selection.style.textAlign = text_align;
}