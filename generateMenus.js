let currentMenu = document.querySelector('body');

for (let i = 0; i < 6; i++){
    const container = document.createElement('div');
    container.style.height = "300px";

    const button = document.createElement('button');
    button.dataset.dropDownMenu = `menu-${i}`;
    button.classList.add("drop-down-button");
    button.textContent = `Menu #${i}`;

    let menu = document.createElement('div');
    menu.id = `menu-${i}`;
    menu.classList.add('drop-down-container','hidden');
    
    container.append(button,menu);
    currentMenu.append(container);
    currentMenu = menu;
    console.log(currentMenu);
}