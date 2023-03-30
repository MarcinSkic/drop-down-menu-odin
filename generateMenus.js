let currentMenu = document.querySelector('body');

for (let i = 0; i < 20; i += 1) {
    const container = document.createElement('div');
    // container.style.height = '300px';

    const button = document.createElement('button');
    button.dataset.dropDownMenu = `menu-${i}`;
    button.classList.add('drop-down-button');
    button.textContent = `Menu #${i}`;

    const menu = document.createElement('div');
    menu.id = `menu-${i}`;
    menu.classList.add('drop-down-container', 'hidden');

    if (i === 2) {
        const image = document.createElement('img');
        image.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg';

        container.append(image);
    }

    container.append(button, menu);
    currentMenu.append(container);
    currentMenu = menu;
    console.log(currentMenu);
}
