//Menu de naveegacion mobil
let btnOpen = document.getElementById('btnOpen');
let navMobile = document.getElementById('navMobile');
let contentItem = document.getElementById('contentMobile');

btnOpen.addEventListener('click', () => {
    navMobile.classList.add('active');
    setTimeout(() => {
        contentItem.classList.add('active');
    }, 300);
});

navMobile.addEventListener('mouseup', () => {
    contentItem.classList.remove('active');
    setTimeout(() => {
        navMobile.classList.remove('active');
    }, 400);
});

const contentCard = new Muuri('.main__section', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {
    contentCard.refreshItems().layout();

    document.getElementById('mainSection').classList.add('card__load')

    const category = document.querySelectorAll('#category ul li a');
    //agregar active en la lista de categorias
    category.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            category.forEach((collbak) => collbak.classList.remove('active'))
            item.classList.add('active');
            //Filtro de elementos
            const options = e.target.innerHTML.toLowerCase();
            options === 'todos' ? contentCard.filter('[data-category]') : contentCard.filter(`[data-category="${options}"]`);
        });
    });

 
});