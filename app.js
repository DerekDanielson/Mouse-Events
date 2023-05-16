const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== 'purple') {
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
};

const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
cosnt onMouseWheel = () => console.log('mouse wheel event');

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);