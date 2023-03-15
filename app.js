
let text = document.getElementById('text-content');

class Editor {
    constructor() {
        this.startEdit('#text-content');
    }

    startEdit(text_area) {
        this.text_area = text_area;
        this.text_area_source, this.container;
        this.initEditor();
    }

    initEditor(){
        this.text_area_source = document.querySelector(this.text_area);
        this.text_area_source.style.display = 'none';
        this.container = this.text_area_source.parentElement;
        this.initFrame(this.container, this.text_area_source);
        this.selectionTextTag(this.CDE_frame, this.container);
    }

    selectionTextTag(CDE_frame, container){
        let selection = CDE_frame.contentDocument.getSelection();
        console.log(selection);
    }

    initFrame(container, text_area_source){
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'about:blank');
        iframe.setAttribute('contenteditable', 'true');
        iframe.setAttribute('id', 'CDEditorIframe');
        iframe.setAttribute('name', 'CDEditorIframe');
        iframe.classList.add('cd-editor');
        container.appendChild(iframe);
        this.CDE_frame = document.getElementById('CDEditorIframe');
        this.CDE_frame.contentDocument.body.innerText = text_area_source.value;
        this.CDE_frame.contentDocument.designMode = 'on';
        this.CDE_frame.contentDocument.body.style.margin = 0;
        this.CDE_frame.contentDocument.body.style.wordWrap = 'break-word';
        document.getElementById('btn').addEventListener('click', this.tranformTextToTag);
    }

    tranformTextToTag(){
        let content = this.innerText;
        let res_tag = content.split('\n')
        .filter( content => content.trim())
        .map((content) => `<p>${content}</p>`);
        this.innerHTML = res_tag;
        res_tag = '';
        console.log(res_tag);
    }
}


const editor = new Editor();
