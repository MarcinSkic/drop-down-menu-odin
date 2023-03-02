window.onload = function(){
    const dropDownButtons = document.querySelectorAll('.drop-down-button');
    const dropDownContainers = document.querySelectorAll('.drop-down-container');
    const dropDowns = document.querySelectorAll('.drop-down');

    dropDownButtons.forEach(btn => {
        btn.addEventListener('mouseover',showDropDown);
        btn.addEventListener('mouseleave',hideDropDown);
        btn.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    });

    dropDownContainers.forEach(cnt => {
        cnt.addEventListener('mouseover',showDropDown);
        cnt.addEventListener('mouseleave',hideDropDown);
    })

    function showDropDown(event){
        let container;
        if(this.classList.contains('drop-down-button')){
            container = document.getElementById(this.dataset.dropDownMenu);
        } else {
            container = event.currentTarget;
        }

        let totalHeight = 0;
        for (const child of container.children) {
            totalHeight += child.offsetHeight;
        }
        
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

        container.classList.add('hidden');
        container.style.height = 0;
    }
}
