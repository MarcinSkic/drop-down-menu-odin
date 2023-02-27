const dropDownButtons = document.querySelectorAll('.drop-down-button');
const dropDownContainers = document.querySelectorAll('.drop-down-container');
const dropDowns = document.querySelectorAll('.drop-down');

dropDownButtons.forEach(btn => {
    btn.addEventListener('mouseover',showDropDown);
    btn.addEventListener('mouseleave',hideDropDown);
});

dropDownContainers.forEach(cnt => {
    cnt.addEventListener('mouseover',showDropDown);
    cnt.addEventListener('mouseleave',hideDropDown);
})

function showDropDown(event){
    let container;
    if(event.target.classList.contains('drop-down-button')){
        container = document.getElementById(event.target.dataset.dropDownMenu);
    } else {
        container = event.currentTarget;
    }
    console.log(container);

    let totalHeight = 0;
    for (const child of container.children) {
        totalHeight += child.offsetHeight;
    }
    console.log(totalHeight)
    
    container.classList.remove('hidden');
    container.style.height = `${totalHeight}px`;
}

function hideDropDown(event){
    let container;
    if(event.target.classList.contains('drop-down-button')){
        container = document.getElementById(event.target.dataset.dropDownMenu);
    } else {
        container = event.target;
    }
    console.log(container);

    container.classList.add('hidden');
    container.style.height = 0;
}

