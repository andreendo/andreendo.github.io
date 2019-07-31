function createLiElementForEvent(ul, e) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.appendChild(document.createTextNode(e.id));
    a.href = e.link;
    li.appendChild(a);
    li.appendChild(document.createTextNode(`, ${e.place} (${e.role})`));
    ul.appendChild(li);
}

window.onload = function () {
    let ul = document.getElementById('ul_events');
    events.forEach(e => createLiElementForEvent(ul, e));
};