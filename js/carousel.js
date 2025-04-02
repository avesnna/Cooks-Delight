document.addEventListener('DOMContentLoaded', function () {

    const FeaturedCarousel = document.getElementById('swiper-wrapper');

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


        if (container === FeaturedCarousel) {
            let swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                spaceBetween: 16,
                slidesPerGroup: 2,
                navigation: {
                    nextEl: ".featured_navigation-arrow-right",
                    prevEl: ".featured_navigation-arrow-left"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                        slidesPerGroup: 1,

                    },
                    769: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },

                },
            });

            function updateNavigationButtons() {
                const nextButton = document.querySelector('.featured_navigation-arrow-right');
                const prevButton = document.querySelector('.featured_navigation-arrow-left');

                if (swiper.isEnd) {
                    nextButton.classList.add('disabled');
                } else {
                    nextButton.classList.remove('disabled');
                }

                if (swiper.isBeginning) {
                    prevButton.classList.add('disabled');
                } else {
                    prevButton.classList.remove('disabled');
                }
            }
            swiper.on('reachEnd', updateNavigationButtons);
            swiper.on('reachBeginning', updateNavigationButtons);
            swiper.on('slideChange', updateNavigationButtons);

            updateNavigationButtons();
        }
    }

    loadCards('featured', FeaturedCarousel);
})