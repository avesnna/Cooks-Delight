document.addEventListener('DOMContentLoaded', function () {

    const searchButtonDesktop = document.querySelector('.search_button');
    const searchButtonMobile = document.querySelector('.mob-menu .search_button');
    const searchInput = document.querySelector('.search-input');
    const dropdown = document.getElementById('search-dropdown');


    searchButtonDesktop.addEventListener('click', (event) => {
        handleSearchButtonClick(event, searchButtonDesktop);
    });

    searchButtonMobile.addEventListener('click', (event) => {
        handleSearchButtonClick(event, searchButtonMobile);
    });

    function handleSearchButtonClick(event, button) {
        event.stopPropagation();
        const isMobile = window.innerWidth <= 768.5;

        if (isMobile) {
            mobileMenu.style.display = 'none';
        }

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            searchInput.style.display = 'flex';
            searchInput.classList.add('visible');
            searchInput.focus();

        } else {
            searchInput.style.display = 'none';
            searchInput.classList.remove('visible');
            dropdown.style.display = 'none';
        }
    }

    searchInput.addEventListener('input', async function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        dropdown.style.display = 'block';
        if (searchTerm === '') {
            dropdown.style.display = 'none';
            return;
        }

        const response = await fetch('http://localhost:5500/api/dishes');
        const dishes = await response.json();

        const filteredDishes = dishes.filter(dish =>
            dish.title.toLowerCase().includes(searchTerm) ||
            dish.category.some(cat => cat.toLowerCase() === searchTerm)
        );

        dropdown.innerHTML = '';
        if (filteredDishes.length > 0) {
            filteredDishes.forEach(dish => {
                const item = document.createElement('div');
                item.className = 'search-dropdown-item';

                const title = document.createElement('p');
                title.textContent = dish.title;
                item.appendChild(title);

                const button = document.createElement('button');
                button.className = 'view-recipe_button';
                button.textContent = 'VIEW RECIPE';
                button.id = dish.id;
                button.addEventListener('click', function () {

                    const dishId = this.id;
                    console.log('clicked', dishId)
                    window.location.href = `OneRecipe.html?id=${dishId}`;
                });
                item.appendChild(button);

                dropdown.appendChild(item);
            });
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }

    });
})