/*const fill = document.querySelector('')
const empties = document.querySelectorAll('')

fill.addEventListener('dragstart', )
fill.addEventListener('dragend', )

for(const empty of empties) {

}

// function dragStart() {

    setTimeout()
}

function dragEnd() {
    this.
}

function dragOver(e) {

}

function dragEnter(e) {

}

function dragLeave() {

}

function dragDrop() {

}*/
var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function (event) {}, false);

document.addEventListener(
    "dragstart",
    function (event) {
        // store a ref. on the dragged elem
        dragged = event.target;
        // make it half transparent
        event.target.style.opacity = 0.5;
    },
    false
);

document.addEventListener(
    "dragend",
    function (event) {
        // reset the transparency
        event.target.style.opacity = "";
    },
    false
);

/* events fired on the drop targets */
document.addEventListener(
    "dragover",
    function (event) {
        // prevent default to allow drop
        event.preventDefault();
    },
    false
);

document.addEventListener(
    "dragenter",
    function (event) {
        // highlight potential drop target when the draggable element enters it
        if (event.target.className == "dropzone") {
            event.target.style.background = "black";
            event.target.style.border = "dotted white 2px";
        }
    },
    false
);

document.addEventListener(
    "dragleave",
    function (event) {
        // reset background of potential drop target when the draggable element leaves it
        if (event.target.className == "dropzone") {
            event.target.style.background = "";
        }
    },
    false
);

document.addEventListener(
    "drop",
    function (event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged elem to the selected drop target
        if (event.target.className == "dropzone") {
            event.target.style.background = "";
            event.target.style.border = "black solid 1px";
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    },
    false
);
