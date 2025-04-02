document.addEventListener('DOMContentLoaded', function () {

    const RecipesCards = document.getElementById('RecipesCards');

    const defaultButton = document.getElementById('all-button');
    const defaultCategory = defaultButton.getAttribute('alt');
    loadCards(defaultCategory, RecipesCards);

    function loadCards(category, container) {
        const url = `http://localhost:5500/api/dishes?category=${category}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Все карточки:', data);
                displayCards(data, container);
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    }

    function displayCards(dishes, container) {
        container.innerHTML = '';

        if (dishes.length === 0) {
            console.log("таких карточек нет");
            return;
        }

        dishes.forEach(dish => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'swiper-slide';

            const isVegan = dish.category.includes("vegan");
            const veganTag = isVegan ? '<img src="./images/VeganTag.svg" alt="Vegan" class="vegan-tag">' : '';

            cardDiv.innerHTML = `
            <div class="card">
                <div class="card-image">
                    <img src="${dish.image}" alt="${dish.title}">
                </div>
                ${veganTag}
                <div class="card-content">
                    <h2>${dish.title}</h2>
                    <p>${dish.description}</p>
                    <div class="card-info">
                        <h3>${dish.timePrepServ}</h3>
                        <button id="${dish.id}" alt="View Recipe" class="view-recipe_button">VIEW RECIPE</button>
                    </div>
                </div>
                </div>
            `;
            const viewRecipeButton = cardDiv.querySelector('.view-recipe_button');
            viewRecipeButton.addEventListener('click', function (event) {
                event.stopPropagation();
                const dishId = this.id;
                console.log('clicked', dishId);
                window.location.href = `OneRecipe.html?id=${dishId}`;
            });
            container.appendChild(cardDiv);
        });

    }

    document.querySelectorAll('.tab_button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.tab_button').forEach(btn => btn.classList.remove('active-tab'));
            button.classList.add('active-tab');

            const category = button.getAttribute('alt');
            console.log("category", category);

            loadCards(category, RecipesCards);
        });
    });


});