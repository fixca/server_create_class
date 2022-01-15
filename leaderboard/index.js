const onButtonClick = () => {
    const t0d0 = document.getElementById('inputBox').value;
    if(t0d0 === "") {
        alert('할 일을 입력해주세요!');
        return;
    }
    const list = document.getElementById('list');
    const li = document.createElement('li');

    // https://hianna.tistory.com/504
    li.appendChild(document.createTextNode(t0d0));
    // https://opentutorials.org/course/1375/6761
    li.addEventListener('click', e => {
        e.target.setAttribute('style', 'text-decoration: line-through');
    });
    list.appendChild(li);
    document.getElementById('inputBox').value = "";
}

const onDeleteClick = () => {
    const list = document.getElementById('list');
    const lists = list.getElementsByTagName('li');

    // https://stackoverflow.com/questions/14003606/remove-element-by-tag-name
    while(lists[0]) {
        lists[0].remove();
    }
}

const onKey = (e) => {
    // https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
    if(e.keyCode == 13) {
        onButtonClick();
    }
}

class Player {
    constructor(name, record) {
        this.name = name;
        this.record = record;
    }
}