document.addEventListener('DOMContentLoaded', function () {

    const urlParams = new URLSearchParams(window.location.search);
    const dishId = urlParams.get('id');

    async function loadDish() {
        try {
            const response = await fetch(`http://localhost:5500/api/dishes/${dishId}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const dish = await response.json();

            if (dish) {
                updateRecipeSection(dish);
            }
        } catch (error) {
            console.error('Ошибка при загрузке блюда:', error);
        }
    }

    loadDish();

    function updateRecipeSection(dish) {

        document.querySelector('.one-recipe h1').textContent = dish.title;
        document.querySelector('.one-recipe p').textContent = dish.description;

        const timePrepServ = dish.timePrepServ;

        const [time, difficulty, serves] = timePrepServ.split(' - ');

        const cardInfoTime = document.querySelectorAll('.card-info-part .time ');
        const cardInfoPrep = document.querySelectorAll('.card-info-part .prep ');
        const cardInfoServ = document.querySelectorAll('.card-info-part .serves ');

        cardInfoTime[0].textContent = time;
        cardInfoPrep[0].textContent = difficulty;
        cardInfoServ[0].textContent = serves;

        document.querySelector('.main-image img').src = dish.image;

        const ingredientsList = document.querySelector('.ingredients ul');
        ingredientsList.innerHTML = '';
        dish.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });

        const nutritionList = document.querySelector('.nutrition ul');
        nutritionList.innerHTML = '';
        Object.keys(dish.nutrition).forEach(key => {
            const li = document.createElement('li');
            li.textContent = `${dish.nutrition[key]}`;
            nutritionList.appendChild(li);
        });

        document.querySelector('.dish-recipe p').textContent = dish.recipe;
    }

})