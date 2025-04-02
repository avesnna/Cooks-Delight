const express = require('express');
const app = express();
const PORT = 5500;
const cors = require('cors');

const dishes = [
    {
        id: 1,
        title: "Lemon Garlic Grilled Chicken",
        description: "Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe.",
        category: ["allrep", "dinner"],
        image: "./images/dishes/Lemon Garlic Grilled Chicken.jpg",
        timePrepServ: "1 HOUR - HARD PREP - 4 SERVES",
        ingredients: [
            "4 boneless, skinless chicken breasts",
            "1/4 cup olive oil",
            "1/4 cup fresh lemon juice (about 2 lemons)",
            "4 garlic cloves, minced",
            "1 teaspoon dried oregano",
            "1 teaspoon dried thyme",
            "Salt and pepper to taste",
            "Lemon slices (for garnish)",
            "Fresh parsley (for garnish)"
        ],
        nutrition: [
            "Calories: 250",
            "Protein: 30g",
            "Fat: 12g",
            "Carbohydrates: 2g",
            "Fiber: 0g",
            "Sugar: 0g",
            "Sodium: 220mg"
        ],
        recipe: "In a large mixing bowl, whisk together the olive oil, lemon juice, minced garlic, dried oregano, dried thyme, salt, and pepper until well combined. Place the chicken breasts in a ziplock bag or shallow dish. Pour the marinade over the chicken, ensuring each piece is well coated. Seal the bag or cover the dish and marinate in the refrigerator for at least 30 minutes, preferably 2 hours, or up to overnight for more flavor. Preheat your grill or grill pan to medium-high heat. If using a grill, oil the grates to prevent sticking. Remove the chicken from the marinade and let the excess marinade drip off. Discard the leftover marinade. Place the chicken breasts on the grill and cook for about 6-7 minutes on one side. Flip the chicken breasts using tongs and cook for an additional 6-7 minutes on the other side, or until the internal temperature reaches 165°F (75°C). Once cooked, remove the chicken from the grill and let it rest for 5 minutes. This allows the juices to redistribute, keeping the chicken moist. Slice the chicken if desired and serve it garnished with lemon slices and fresh parsley. Enjoy your flavorful Lemon Garlic Grilled Chicken!"
    },
    {
        id: 2,
        title: "Quinoa Veggie Stir-Fry",
        description: "Quick, wholesome, and bursting with flavors, it's perfect for a healthy weeknight dinner.",
        category: ["allrep", "vegan", "lunch", "featured"],
        image: "./images/dishes/Quinoa Veggie Stir-Fry.jpg",
        timePrepServ: "30 MIN - EASY PREP - 3 SERVES",
        ingredients: [
            "1 cup quinoa",
            "2 cups vegetable broth or water",
            "1 tablespoon olive oil",
            "1 bell pepper, diced",
            "1 zucchini, diced",
            "1 cup broccoli florets",
            "2 cloves garlic, minced",
            "2 tablespoons soy sauce",
            "Salt and pepper to taste",
            "Fresh cilantro for garnish (optional)"
        ],
        nutrition: [
            "Calories: 280",
            "Protein: 10g",
            "Fat: 10g",
            "Carbohydrates: 40g",
            "Fiber: 5g",
            "Sugar: 3g",
            "Sodium: 500mg"
        ],
        recipe: "Rinse the quinoa under cold water to remove any bitterness. In a pot, combine the quinoa and vegetable broth (or water) and bring to a boil. Reduce to a simmer, cover, and cook for about 15 minutes, or until the quinoa is fluffy and the liquid is absorbed. In a large skillet, heat the olive oil over medium heat. Add the bell pepper, zucchini, and broccoli. Sauté the vegetables for about 5-7 minutes until they are tender. Add the minced garlic and stir for an additional minute. Stir in the cooked quinoa and soy sauce. Mix well and season with salt and pepper. Cook for another 2-3 minutes until everything is heated through. Serve garnished with fresh cilantro, if desired. Enjoy your Quinoa Veggie Stir-Fry!"

    },
    {
        id: 3,
        title: "Savory Herb-Infused Chicken",
        description: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken.",
        category: ["allrep", "dinner", "featured"],
        image: "./images/dishes/Savory Herb-Infused Chicken.jpg",
        timePrepServ: "40 MIN - EASY PREP - 3 SERVES",
        ingredients: [
            "4 boneless, skinless chicken breasts",
            "1/4 cup olive oil",
            "4 garlic cloves, minced",
            "1 teaspoon dried oregano",
            "1 teaspoon dried thyme",
            "Salt and pepper to taste",
            "Fresh parsley (for garnish)"
        ],
        nutrition: [
            "Calories: 250",
            "Protein: 30g",
            "Fat: 12g",
            "Carbohydrates: 2g",
            "Fiber: 0g",
            "Sugar: 0g",
            "Sodium: 220mg"
        ],
        recipe: "In a large mixing bowl, whisk together the olive oil, minced garlic, dried oregano, dried thyme, salt, and pepper until well combined. Place the chicken breasts in a ziplock bag or shallow dish. Pour the marinade over the chicken, ensuring each piece is well coated. Seal the bag or cover the dish and marinate in the refrigerator for at least 30 minutes, preferably 2 hours, or up to overnight for more flavor. Preheat your grill or grill pan to medium-high heat. If using a grill, oil the grates to prevent sticking. Remove the chicken from the marinade and let the excess marinade drip off. Discard the leftover marinade. Place the chicken breasts on the grill and cook for about 6-7 minutes on one side. Flip the chicken breasts using tongs and cook for an additional 6-7 minutes on the other side, or until the internal temperature reaches 165°F (75°C). Once cooked, remove the chicken from the grill and let it rest for 5 minutes. This allows the juices to redistribute, keeping the chicken moist. Slice the chicken if desired and serve it garnished with fresh parsley. Enjoy your flavorful Savory Herb-Infused Chicken!"
    },
    {
        id: 4,
        title: "Berry Bliss Smoothie Bowl",
        description: "This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants.",
        category: ["allrep", "vegan", "breakfast"],
        image: "./images/dishes/Berry Bliss Smoothie Bowl.jpg",
        timePrepServ: "10 MIN - EASY PREP - 2 SERVES",
        ingredients: [
            "1 cup mixed berries (strawberries, blueberries, raspberries)",
            "1 banana",
            "1 cup spinach (optional)",
            "1/2 cup almond milk (or any milk of choice)",
            "1 tablespoon honey or maple syrup (optional)",
            "Toppings: sliced fresh fruits, granola, chia seeds, shredded coconut"
        ],
        nutrition: [
            "Calories: 300",
            "Protein: 5g",
            "Fat: 7g",
            "Carbohydrates: 60g",
            "Fiber: 8g",
            "Sugar: 25g",
            "Sodium: 130mg"
        ],
        recipe: "In a blender, combine the mixed berries, banana, spinach (if using), almond milk, and honey or maple syrup (if desired). Blend until smooth and creamy. If the mixture is too thick, add a little more almond milk to reach your desired consistency. Pour the smoothie mixture into a bowl. Arrange your favorite toppings on top, such as sliced fresh fruits, granola, chia seeds, and shredded coconut. Serve immediately and enjoy your delicious Berry Bliss Smoothie Bowl!"
    },
    {
        id: 5,
        title: "Spaghetti Aglio e Olio",
        description: "A minimalist yet flavorful dish with garlic, olive oil, and a hint of red pepper flakes.",
        category: ["allrep", "vegan", "dinner", "featured"],
        image: "./images/dishes/Spaghetti Aglio e Olio.jpg",
        timePrepServ: "20 MIN - EASY PREP - 2 SERVES",
        ingredients: [
            "400g spaghetti",
            "6 cloves garlic, thinly sliced",
            "1/2 cup extra virgin olive oil",
            "1 teaspoon red pepper flakes (adjust to taste)",
            "Salt to taste",
            "Fresh parsley, chopped (for garnish)",
            "Grated Parmesan cheese (optional)"
        ],
        nutrition: [
            "Calories: 400",
            "Protein: 10g",
            "Fat: 18g",
            "Carbohydrates: 55g",
            "Fiber: 3g",
            "Sugar: 1g",
            "Sodium: 200mg"
        ],
        recipe: "Bring a large pot of salted water to a boil. Add the spaghetti and cook according to package instructions until al dente. Reserve 1 cup of pasta water, then drain the spaghetti. In a large skillet over medium heat, add the olive oil and sliced garlic. Sauté until the garlic is golden but not browned, about 2 minutes. Add the red pepper flakes and sauté for an additional 30 seconds. Add the drained spaghetti to the skillet and toss to combine, adding reserved pasta water a little at a time if needed to help coat the spaghetti. Season with salt to taste. Remove from heat and stir in fresh parsley. Serve immediately, garnished with grated Parmesan cheese if desired. Enjoy your Spaghetti Aglio e Olio!"
    },
    {
        id: 6,
        title: "Grilled Veggies with Sauce",
        description: "Served with a zesty chimichurri sauce its a perfect addition to your outdoor gatherings.",
        category: ["allrep", "vegan", "dinner", "featured"],
        image: "./images/dishes/Grilled Veggies with Sauce.jpg",
        timePrepServ: "25 MIN - MEDIUM PREP - 6 SERVES",
        ingredients: [
            "2 bell peppers (any color), cut into strips",
            "1 zucchini, sliced",
            "1 yellow squash, sliced",
            "1 red onion, cut into wedges",
            "1 cup cherry tomatoes",
            "3 tablespoons olive oil",
            "1 teaspoon dried oregano",
            "1 teaspoon garlic powder",
            "Salt and pepper to taste",
            "Fresh basil (for garnish)"
        ],
        nutrition: [
            "Calories: 150",
            "Protein: 3g",
            "Fat: 7g",
            "Carbohydrates: 20g",
            "Fiber: 5g",
            "Sugar: 4g",
            "Sodium: 150mg"
        ],
        recipe: "Preheat the grill to medium-high heat. In a large mixing bowl, combine the bell peppers, zucchini, yellow squash, red onion, and cherry tomatoes. Drizzle with olive oil, then sprinkle with oregano, garlic powder, salt, and pepper. Toss to evenly coat the vegetables with the oil and spices. Place the vegetables on the grill, arranging them in a single layer. Grill for about 5-7 minutes per side, or until they are tender and have grill marks. Remove the veggies from the grill and transfer them to a serving dish. Garnish with fresh basil and serve with your favorite sauce (balsamic glaze, tahini, or a yogurt sauce) drizzled on top. Enjoy your delicious Grilled Veggies with Sauce!"
    },
    {
        id: 7,
        title: "Zesty Lemon Garlic Shrimp",
        description: "Experience a burst of freshness and zest with our Zesty Lemon Garlic Shrimp. This dish is delivering a delightful taste that dances on your palate.",
        category: ["quickbite", "featured"],
        image: "./images/dishes/Zesty Lemon Garlic Shrimp.jpg",
        timePrepServ: "30 MIN - EASY PREP - 2 SERVES",
        ingredients: [
            "1 lb (450g) large shrimp, peeled and deveined",
            "4 cloves garlic, minced",
            "1/4 cup olive oil",
            "Juice of 1 lemon",
            "Zest of 1 lemon",
            "1 teaspoon red pepper flakes",
            "Salt and pepper to taste",
            "Fresh parsley, chopped (for garnish)"
        ],
        nutrition: [
            "Calories: 280",
            "Protein: 24g",
            "Fat: 15g",
            "Carbohydrates: 6g",
            "Fiber: 0g",
            "Sugar: 1g",
            "Sodium: 400mg"
        ],
        recipe: "In a large skillet, heat the olive oil over medium heat. Add the minced garlic and sauté for 1-2 minutes until fragrant, being careful not to burn it. Add the shrimp to the skillet, along with the lemon juice, lemon zest, red pepper flakes, salt, and pepper. Cook for about 3-4 minutes, stirring occasionally, until the shrimp are pink and cooked through. Remove from heat and garnish with fresh parsley. Serve immediately, and enjoy your Zesty Lemon Garlic Shrimp over pasta, rice, or with a fresh salad!"
    },
    {
        id: 8,
        title: "Decadent Chocolate Mousse",
        description: "Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!",
        category: ["vegan", "dessert", "featured"],
        image: "./images/dishes/Decadent Chocolate Mousse.jpg",
        timePrepServ: "30 MIN - MEDIUM PREP - 4 SERVES",
        ingredients: [
            "8 oz (225g) dark chocolate (70% cocoa), chopped",
            "2 tablespoons unsalted butter",
            "4 large eggs, separated",
            "1/4 cup granulated sugar",
            "1 teaspoon vanilla extract",
            "1 cup heavy cream",
            "A pinch of salt",
            "Chocolate shavings or berries (for garnish)"
        ],
        nutrition: [
            "Calories: 350",
            "Protein: 6g",
            "Fat: 25g",
            "Carbohydrates: 30g",
            "Fiber: 4g",
            "Sugar: 20g",
            "Sodium: 50mg"
        ],
        recipe: "Melt the chopped dark chocolate and butter together in a double boiler or in the microwave in short bursts, stirring until smooth. Allow the mixture to cool slightly. In a large bowl, whisk the egg yolks, granulated sugar, and vanilla extract until pale and fluffy. Gradually add the melted chocolate mixture to the egg yolk mixture, stirring until well combined. In a separate bowl, beat the heavy cream until stiff peaks form. In another bowl, whisk the egg whites with a pinch of salt until they hold stiff peaks. Gently fold the whipped cream into the chocolate mixture, followed by the egg whites, until no white streaks remain. Divide the mousse into serving dishes and refrigerate for at least 2 hours or until set. Serve chilled, garnished with chocolate shavings or fresh berries. Enjoy your rich and creamy Decadent Chocolate Mousse!"
    },
    {
        id: 9,
        title: "Spicy Roasted Vegetable Medley",
        description: "Delight in the vibrant flavors of our Spicy Roasted Vegetable Medley. A colorful assortment of seasonal vegetables.",
        category: ["vegan", "lunch"],
        image: "./images/dishes/Spicy Roasted Vegetable Medley.jpg",
        timePrepServ: "45 MIN - EASY PREP - 4 SERVES",
        ingredients: [
            "2 cups broccoli florets",
            "1 cup bell peppers (any color), chopped",
            "1 cup carrots, sliced",
            "1 zucchini, diced",
            "1 red onion, chopped",
            "3 tablespoons olive oil",
            "1 teaspoon chili powder",
            "1 teaspoon smoked paprika",
            "1/2 teaspoon cayenne pepper (adjust to taste)",
            "Salt and pepper to taste",
            "Fresh cilantro or parsley (for garnish)"
        ],
        nutrition: [
            "Calories: 180",
            "Protein: 5g",
            "Fat: 10g",
            "Carbohydrates: 20g",
            "Fiber: 7g",
            "Sugar: 4g",
            "Sodium: 200mg"
        ],
        recipe: "Preheat the oven to 425°F (220°C). In a large bowl, combine the broccoli, bell peppers, carrots, zucchini, and red onion. Drizzle with olive oil and sprinkle with chili powder, smoked paprika, cayenne pepper, salt, and pepper. Toss until the vegetables are evenly coated. Spread the vegetables in a single layer on a baking sheet. Roast in the preheated oven for 20-25 minutes, stirring halfway through, until the vegetables are tender and slightly charred. Remove from the oven and garnish with fresh cilantro or parsley before serving. Enjoy your Spicy Roasted Vegetable Medley!"
    },
    {
        id: 10,
        title: "Creamy Spinach and Mushroom Risotto",
        description: "Savor the luxurious blend of creamy textures and earthy flavors in our Creamy Spinach and Mushroom Risotto.",
        category: ["vegan", "lunch"],
        image: "./images/dishes/Creamy Spinach and Mushroom Risotto.jpg",
        timePrepServ: "45 MIN - MEDIUM PREP - 4 SERVES",
        ingredients: [
            "1 cup Arborio rice",
            "4 cups vegetable or chicken broth",
            "1 cup mushrooms, sliced",
            "2 cups fresh spinach, chopped",
            "1 medium onion, finely chopped",
            "3 cloves garlic, minced",
            "1/2 cup grated Parmesan cheese",
            "1/4 cup heavy cream",
            "2 tablespoons olive oil",
            "Salt and pepper to taste",
            "Fresh parsley, chopped (for garnish)"
        ],
        nutrition: [
            "Calories: 400",
            "Protein: 12g",
            "Fat: 14g",
            "Carbohydrates: 55g",
            "Fiber: 3g",
            "Sugar: 2g",
            "Sodium: 600mg"
        ],
        recipe: "In a saucepan, heat the broth and keep it warm on low heat. In a separate large skillet, heat the olive oil over medium heat. Add the chopped onion and sauté until translucent, about 5 minutes. Stir in the garlic and sliced mushrooms, and sauté for an additional 3-4 minutes until the mushrooms are softened. Add the Arborio rice to the skillet and stir for 1-2 minutes until lightly toasted. Gradually add warm broth, one ladle at a time, stirring frequently, until each ladle is absorbed before adding the next. Continue this process for about 18-20 minutes or until the rice is creamy and al dente. Stir in the chopped spinach, grated Parmesan cheese, and heavy cream. Season with salt and pepper to taste. Remove from heat and let it sit for a few minutes. Serve garnished with fresh parsley. Enjoy your Creamy Spinach and Mushroom Risotto!"
    },
    {
        id: 11,
        title: "Spicy Honey-Glazed Salmon",
        description: "Delight in the perfect harmony of sweet and spicy with our Spicy Honey-Glazed Salmon. This dish features flaky salmon fillets drizzled with a sticky honey glaze.",
        category: ["dinner"],
        image: "./images/dishes/Spicy Honey-Glazed Salmon.jpg",
        timePrepServ: "25 MIN - EASY PREP - 2 SERVES",
        ingredients: [
            "4 salmon fillets (6 oz each)",
            "1/4 cup honey",
            "2 tablespoons soy sauce",
            "1 tablespoon sriracha (adjust for spice preference)",
            "1 tablespoon lemon juice",
            "2 cloves garlic, minced",
            "Salt and pepper, to taste",
            "2 green onions, chopped (for garnish)",
            "Sesame seeds (for garnish, optional)"
        ],
        nutrition: [
            "Calories: 350",
            "Protein: 35g",
            "Fat: 20g",
            "Carbohydrates: 15g",
            "Fiber: 0g",
            "Sugar: 10g",
            "Sodium: 600mg"
        ],
        recipe: "Preheat your oven to 400°F (200°C). In a small bowl, whisk together honey, soy sauce, sriracha, lemon juice, and minced garlic. Line a baking sheet with parchment paper and place the salmon fillets on it. Season the fillets with salt and pepper. Brush the honey glaze generously over the top of each fillet. Bake in the preheated oven for 12-15 minutes or until the salmon is cooked through and flakes easily with a fork. For a caramelized finish, you can broil the salmon for an additional 2-3 minutes. Remove from the oven and garnish with chopped green onions and sesame seeds, if using. Serve hot and enjoy your Spicy Honey-Glazed Salmon!"
    },
    {
        id: 12,
        title: "Savory Balsamic Beef Stew",
        description: "Enjoy a hearty bowl of Savory Balsamic Beef Stew, featuring tender chunks of beef simmered with root vegetables in a rich balsamic sauce, perfect for a cozy dinner.",
        category: ["dinner"],
        image: "./images/dishes/Savory Balsamic Beef Stew.jpg",
        timePrepServ: "2 HOURS - HARD PREP - 6 SERVES",
        ingredients: [
            "2 lbs (900g) beef chuck, cut into 1-inch cubes",
            "2 tablespoons olive oil",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "4 carrots, sliced",
            "4 potatoes, diced",
            "1 cup mushrooms, sliced",
            "2 cups beef broth",
            "1/2 cup balsamic vinegar",
            "1 teaspoon dried thyme",
            "1 teaspoon dried rosemary",
            "Salt and pepper, to taste",
            "Fresh parsley, chopped (for garnish)"
        ],
        nutrition: [
            "Calories: 450",
            "Protein: 40g",
            "Fat: 20g",
            "Carbohydrates: 30g",
            "Fiber: 5g",
            "Sugar: 6g",
            "Sodium: 800mg"
        ],
        recipe: "In a large pot or Dutch oven, heat olive oil over medium-high heat. Add the beef cubes and brown on all sides. Remove the beef and set aside. In the same pot, add onions and garlic, sautéing until soft. Add the carrots, potatoes, and mushrooms, cooking for an additional 5 minutes. Return the beef to the pot and pour in the beef broth and balsamic vinegar. Stir in thyme, rosemary, salt, and pepper. Bring to a boil, then reduce heat to low, cover, and simmer for about 1.5 to 2 hours, or until the beef is tender. Adjust seasoning as needed. Serve hot, garnished with fresh parsley. Enjoy your Savory Balsamic Beef Stew!"
    },
    {
        id: 13,
        title: "Coconut Cream Pie",
        description: "Indulge in the tropical flavors of our Coconut Cream Pie, featuring a creamy coconut filling and a flaky crust, topped with light coconut whipped cream.",
        category: ["vegan", "dessert"],
        image: "./images/dishes/Coconut Cream Pie.jpg",
        timePrepServ: "45 MIN - MEDIUM PREP - 8 SERVES",
        ingredients: [
            "1 pre-baked pie crust",
            "1 cup coconut milk",
            "1 cup heavy cream",
            "3/4 cup granulated sugar",
            "1/4 cup cornstarch",
            "1/4 teaspoon salt",
            "4 large egg yolks",
            "1 teaspoon vanilla extract",
            "1 cup shredded coconut (toasted for garnish)",
            "Whipped cream (for topping)"
        ],
        nutrition: [
            "Calories: 450",
            "Protein: 5g",
            "Fat: 30g",
            "Carbohydrates: 38g",
            "Fiber: 2g",
            "Sugar: 20g",
            "Sodium: 350mg"
        ],
        recipe: "In a medium saucepan, whisk together coconut milk, heavy cream, sugar, cornstarch, and salt. Cook over medium heat, stirring constantly until the mixture thickens and starts to bubble. In a separate bowl, whisk the egg yolks. Gradually add a small amount of the hot mixture to the egg yolks, whisking continuously to temper them. Then slowly pour the egg mixture back into the saucepan, stirring constantly until fully combined. Remove from heat and stir in vanilla extract and shredded coconut (reserve some for garnish). Pour the filling into the pre-baked pie crust and refrigerate for at least 4 hours, or until set. Top with whipped cream and toasted shredded coconut before serving. Enjoy your delicious Coconut Cream Pie!"
    },
    {
        id: 14,
        title: "Raw Chocolate Energy Bites",
        description: "Fuel your day with our Raw Chocolate Energy Bites, a delightful blend of nuts, dates, and cocoa.",
        category: ["vegan", "dessert", "quickbite"],
        image: "./images/dishes/Raw Chocolate Energy Bites.jpg",
        timePrepServ: "15 MIN - EASY PREP - 12 SERVES",
        ingredients: [
            "1 cup pitted dates",
            "1 cup raw almonds",
            "1/2 cup cocoa powder",
            "1/4 cup almond butter",
            "1/4 cup chia seeds",
            "1 teaspoon vanilla extract",
            "A pinch of salt",
            "Optional: shredded coconut, hemp seeds, or chopped nuts for rolling"
        ],
        nutrition: [
            "Calories: 150",
            "Protein: 4g",
            "Fat: 7g",
            "Carbohydrates: 20g",
            "Fiber: 3g",
            "Sugar: 10g",
            "Sodium: 5mg"
        ],
        recipe: "In a food processor, combine pitted dates and raw almonds. Process until finely chopped and starting to stick together. Add cocoa powder, almond butter, chia seeds, vanilla extract, and salt. Process until everything is well combined and forms a sticky dough. If the mixture is too dry, add a little water or more almond butter. Scoop out small portions and roll them into bite-sized balls. If desired, roll the bites in shredded coconut, hemp seeds, or chopped nuts for an extra touch. Refrigerate for at least 30 minutes to firm up. Enjoy your delicious and energizing Raw Chocolate Energy Bites!"
    },
    {
        id: 15,
        title: "Classic New York Cheesecake",
        description: "Delight in the rich and creamy texture of our Classic New York Cheesecake, baked to perfection and served with a luscious berry compote.",
        category: ["dessert"],
        image: "./images/dishes/Classic New York Cheesecake.jpg",
        timePrepServ: "1 HOUR - MEDIUM PREP - 8 SERVES",
        ingredients: [
            "1 1/2 cups graham cracker crumbs",
            "1/4 cup granulated sugar",
            "1/2 cup unsalted butter, melted",
            "4 (8 oz) packages cream cheese, softened",
            "1 cup granulated sugar",
            "1 teaspoon vanilla extract",
            "4 large eggs",
            "1 cup sour cream",
            "1/4 cup all-purpose flour",
            "1/4 teaspoon salt"
        ],
        nutrition: [
            "Calories: 450",
            "Protein: 8g",
            "Fat: 30g",
            "Carbohydrates: 38g",
            "Fiber: 1g",
            "Sugar: 24g",
            "Sodium: 500mg"
        ],
        recipe: "Preheat your oven to 325°F (160°C). In a medium bowl, combine graham cracker crumbs, 1/4 cup sugar, and melted butter. Press the mixture firmly into the bottom of a greased 9-inch springform pan to form the crust. In a large mixing bowl, beat the softened cream cheese and 1 cup of sugar until smooth and creamy. Add the vanilla extract, and mix well. Add the eggs one at a time, mixing on low speed until just combined. Stir in the sour cream, flour, and salt, mixing until smooth. Pour the cheesecake batter over the crust in the springform pan. Bake for about 55-60 minutes or until the edges are set and the center is slightly jiggly. Turn off the oven and leave the cheesecake in the oven for an additional hour to cool gradually. Remove from the oven and let it cool to room temperature. Refrigerate for at least 4 hours or overnight before serving. Top with your favorite fruit or sauce if desired. Enjoy your Classic New York Cheesecake!"
    },
    {
        id: 16,
        title: "Chocolate Lava Cake",
        description: "Experience the molten magic of our Chocolate Lava Cake, featuring a rich chocolate exterior with a gooey, flowing center that’s simply irresistible.",
        category: ["dessert"],
        image: "./images/dishes/Chocolate Lava Cake.jpg",
        timePrepServ: "30 MIN - MEDIUM PREP - 2 SERVES",
        ingredients: [
            "1/2 cup unsalted butter (1 stick)",
            "1 cup semi-sweet chocolate chips",
            "2 large eggs",
            "2 large egg yolks",
            "1/4 cup granulated sugar",
            "2 tablespoons all-purpose flour",
            "1 teaspoon vanilla extract",
            "A pinch of salt",
            "Powdered sugar (for dusting)",
            "Vanilla ice cream (for serving, optional)"
        ],
        nutrition: [
            "Calories: 350",
            "Protein: 6g",
            "Fat: 22g",
            "Carbohydrates: 35g",
            "Fiber: 2g",
            "Sugar: 20g",
            "Sodium: 180mg"
        ],
        recipe: "Preheat your oven to 425°F (220°C). Grease four ramekins with butter and place them on a baking sheet. In a microwave-safe bowl, combine the butter and chocolate chips. Melt in the microwave in 30-second intervals, stirring until smooth. In a separate bowl, whisk together the eggs, egg yolks, and granulated sugar until thick and pale. Stir in the melted chocolate mixture and vanilla extract. Gently fold in the flour and a pinch of salt until just combined. Divide the batter evenly among the prepared ramekins. Bake for about 12-14 minutes, until the edges are firm but the center is soft. Let them cool for 1 minute, then invert onto plates. Dust with powdered sugar and serve immediately, ideally with a scoop of vanilla ice cream. Enjoy your delicious Chocolate Lava Cake!"
    },
    {
        id: 17,
        title: "Tiramisu",
        description: "Savor the layers of coffee-soaked ladyfingers and creamy mascarpone in our classic Tiramisu, dusted with cocoa for an elegant finish.",
        category: ["dessert"],
        image: "./images/dishes/Tiramisu.jpg",
        timePrepServ: "45 MIN - MEDIUM PREP - 6 SERVES",
        ingredients: [
            "1 cup strong brewed coffee, cooled",
            "3 tablespoons coffee liqueur (optional)",
            "3 large egg yolks",
            "1/2 cup granulated sugar",
            "1 cup mascarpone cheese",
            "1 cup heavy cream",
            "1 teaspoon vanilla extract",
            "24 ladyfinger cookies",
            "Cocoa powder (for dusting)",
            "Dark chocolate shavings (for garnish, optional)"
        ],
        nutrition: [
            "Calories: 400",
            "Protein: 7g",
            "Fat: 28g",
            "Carbohydrates: 34g",
            "Fiber: 1g",
            "Sugar: 20g",
            "Sodium: 120mg"
        ],
        recipe: "In a shallow dish, combine the cooled coffee and coffee liqueur. In a mixing bowl, whisk together the egg yolks and granulated sugar until pale and creamy. Gently fold in the mascarpone cheese until smooth. In a separate bowl, whip the heavy cream and vanilla extract until stiff peaks form. Carefully fold the whipped cream into the mascarpone mixture. Dip each ladyfinger briefly into the coffee mixture (do not soak) and layer them in the bottom of a baking dish. Spread half of the mascarpone mixture over the ladyfingers. Repeat with another layer of dipped ladyfingers and the remaining mascarpone mixture. Cover and refrigerate for at least 4 hours or overnight to allow the flavors to meld. Before serving, dust the top with cocoa powder and garnish with chocolate shavings, if desired. Enjoy your delightful Tiramisu!"
    },
    {
        id: 18,
        title: "Fluffy Pancakes",
        description: "Start your day with our Fluffy Pancakes, light and airy stacks served with maple syrup and fresh berries.",
        category: ["breakfast"],
        image: "./images/dishes/Fluffy Pancakes.jpg",
        timePrepServ: "20 MIN - EASY PREP - 4 SERVES",
        ingredients: [
            "1 cup all-purpose flour",
            "2 tablespoons granulated sugar",
            "2 teaspoons baking powder",
            "1/2 teaspoon baking soda",
            "1/4 teaspoon salt",
            "1 cup buttermilk",
            "1 large egg",
            "2 tablespoons unsalted butter, melted",
            "1 teaspoon vanilla extract",
            "Butter or oil for cooking",
            "Maple syrup and fresh fruit for serving (optional)"
        ],
        nutrition: [
            "Calories: 200",
            "Protein: 6g",
            "Fat: 8g",
            "Carbohydrates: 28g",
            "Fiber: 1g",
            "Sugar: 2g",
            "Sodium: 400mg"
        ],
        recipe: "In a mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt. In another bowl, mix the buttermilk, egg, melted butter, and vanilla extract until well combined. Pour the wet ingredients into the dry ingredients and stir gently until just combined (do not overmix; it's okay if there are some lumps). Heat a skillet or griddle over medium heat and grease it with butter or oil. Pour 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface and the edges look set, about 2-3 minutes. Flip and cook for an additional 1-2 minutes until golden brown. Remove from the skillet and keep warm. Serve with maple syrup and fresh fruit if desired. Enjoy your fluffy pancakes!"
    },
    {
        id: 19,
        title: "Avocado Toast",
        description: "Enjoy a nutritious start with our Avocado Toast, featuring ripe avocados smashed on whole-grain bread, topped with cherry tomatoes and a sprinkle of salt.",
        category: ["breakfast"],
        image: "./images/dishes/Avocado Toast.jpg",
        timePrepServ: "10 MIN - EASY PREP - 2 SERVES",
        ingredients: [
            "2 ripe avocados",
            "4 slices of bread (whole grain, sourdough, or your choice)",
            "1 tablespoon lemon juice",
            "Salt and pepper to taste",
            "Red pepper flakes (for garnish, optional)",
            "Olive oil (for drizzling, optional)",
            "Toppings such as cherry tomatoes, radishes, feta cheese, or poached eggs (optional)"
        ],
        nutrition: [
            "Calories: 250",
            "Protein: 6g",
            "Fat: 15g",
            "Carbohydrates: 26g",
            "Fiber: 10g",
            "Sugar: 1g",
            "Sodium: 150mg"
        ],
        recipe: "Toast the slices of bread until golden brown and crispy. In a bowl, scoop out the flesh of the avocados and mash them with a fork. Add lemon juice, salt, and pepper to taste, mixing until combined. Spread the mashed avocado generously over each slice of toasted bread. If desired, drizzle with olive oil and sprinkle with red pepper flakes for added flavor. Top with your choice of additional toppings, such as sliced cherry tomatoes, radishes, crumbled feta cheese, or a poached egg. Serve immediately and enjoy your delicious avocado toast!"
    },
    {
        id: 20,
        title: "Breakfast Burrito",
        description: "Kick off your morning with our Breakfast Burrito, packed with scrambled eggs, cheese, and fresh veggies, all wrapped in a warm tortilla.",
        category: ["breakfast", "quickbite"],
        image: "./images/dishes/Breakfast Burrito.jpg",
        timePrepServ: "25 MIN - MEDIUM PREP - 2 SERVES",
        ingredients: [
            "4 large flour tortillas",
            "4 large eggs",
            "1/2 cup milk",
            "1 cup cooked and crumbled sausage or bacon (optional)",
            "1 cup shredded cheese (cheddar or your preference)",
            "1 medium bell pepper, diced",
            "1/2 medium onion, diced",
            "1 cup cooked diced potatoes or hash browns",
            "Salt and pepper to taste",
            "Fresh cilantro or green onions for garnish (optional)",
            "Salsa or hot sauce for serving (optional)"
        ],
        nutrition: [
            "Calories: 450",
            "Protein: 20g",
            "Fat: 25g",
            "Carbohydrates: 35g",
            "Fiber: 3g",
            "Sugar: 2g",
            "Sodium: 800mg"
        ],
        recipe: "In a skillet, sauté the diced bell pepper and onion until soft. In a bowl, whisk together the eggs and milk, and season with salt and pepper. Pour the egg mixture into the skillet with the peppers and onions, and scramble until fully cooked. If using, add the cooked sausage or bacon and cooked potatoes to the skillet and mix well. Warm the tortillas in a separate pan or microwave until pliable. Spoon the egg mixture onto each tortilla, sprinkle with shredded cheese, and roll tightly to form a burrito. Garnish with cilantro or green onions if desired, and serve with salsa or hot sauce on the side. Enjoy your hearty breakfast burrito!"
    },
    {
        id: 21,
        title: "Greek Yogurt Parfait",
        description: "Indulge in our Greek Yogurt Parfait, layered with creamy yogurt, granola, and fresh fruits for a refreshing breakfast treat.",
        category: ["breakfast"],
        image: "./images/dishes/Greek Yogurt Parfait.jpg",
        timePrepServ: "15 MIN - EASY PREP - 2 SERVES",
        ingredients: [
            "2 cups Greek yogurt (plain or flavored)",
            "1 cup granola",
            "1 cup mixed berries (strawberries, blueberries, raspberries)",
            "1 tablespoon honey or maple syrup (optional)",
            "Mint leaves for garnish (optional)"
        ],
        nutrition: [
            "Calories: 300",
            "Protein: 20g",
            "Fat: 7g",
            "Carbohydrates: 45g",
            "Fiber: 5g",
            "Sugar: 15g",
            "Sodium: 100mg"
        ],
        recipe: "In a glass or bowl, layer half of the Greek yogurt at the bottom. Add a layer of granola followed by a layer of mixed berries. Repeat the layers with the remaining yogurt, granola, and berries. Drizzle with honey or maple syrup if desired. Garnish with mint leaves for a fresh touch. Serve immediately and enjoy your delicious Greek yogurt parfait!"
    },
    {
        id: 22,
        title: "Oatmeal with Fresh Fruit",
        description: "Warm up with our Oatmeal with Fresh Fruit, a hearty bowl of oats topped with seasonal fruits and a drizzle of honey.",
        category: ["breakfast"],
        image: "./images/dishes/Oatmeal with Fresh Fruit.jpg",
        timePrepServ: "10 MIN - EASY PREP - 2 SERVES",
        ingredients: [
            "1 cup rolled oats",
            "2 cups water or milk (or a combination)",
            "1/2 teaspoon salt",
            "1 tablespoon honey or maple syrup (optional)",
            "1/2 teaspoon cinnamon (optional)",
            "1 banana, sliced",
            "1/2 cup mixed berries (strawberries, blueberries, raspberries)",
            "1 apple, diced",
            "Nuts or seeds for topping (optional)",
            "Yogurt for topping (optional)"
        ],
        nutrition: [
            "Calories: 250",
            "Protein: 7g",
            "Fat: 4g",
            "Carbohydrates: 45g",
            "Fiber: 8g",
            "Sugar: 10g",
            "Sodium: 180mg"
        ],
        recipe: "In a medium saucepan, bring the water or milk to a boil. Stir in the rolled oats and salt. Reduce the heat to low and simmer for about 5 minutes, stirring occasionally, until the oats are cooked and creamy. Remove from heat and stir in honey or maple syrup and cinnamon, if desired. Divide the oatmeal into bowls and top with fresh fruit such as banana slices, mixed berries, and diced apple. Add nuts, seeds, or yogurt for additional texture and flavor. Serve warm and enjoy your nutritious oatmeal with fresh fruit!"
    },
    {
        id: 23,
        title: "Beef Tacos",
        description: "Enjoy our Beef Tacos, filled with seasoned ground beef, fresh toppings, and wrapped in soft or crunchy tortillas for a satisfying lunch.",
        category: ["lunch"],
        image: "./images/dishes/Beef Tacos.jpg",
        timePrepServ: "30 MIN - MEDIUM PREP - 4 SERVES",
        ingredients: [
            "1 pound ground beef",
            "1 small onion, diced",
            "2 cloves garlic, minced",
            "1 packet taco seasoning (or homemade mixture)",
            "1/2 cup water",
            "8 small corn or flour tortillas",
            "1 cup shredded lettuce",
            "1 cup diced tomatoes",
            "1 cup shredded cheese (cheddar or your preference)",
            "Sour cream and salsa for serving (optional)",
            "Fresh cilantro for garnish (optional)"
        ],
        nutrition: [
            "Calories: 320",
            "Protein: 22g",
            "Fat: 18g",
            "Carbohydrates: 24g",
            "Fiber: 2g",
            "Sugar: 3g",
            "Sodium: 600mg"
        ],
        recipe: "In a large skillet, cook the diced onion and minced garlic over medium heat until softened. Add the ground beef and cook until browned, breaking it apart with a spoon. Drain excess fat if necessary. Stir in taco seasoning and water, and simmer for about 5 minutes until the mixture thickens. Warm the tortillas in a separate skillet or microwave. To assemble the tacos, spoon the beef mixture onto each tortilla and top with shredded lettuce, diced tomatoes, and shredded cheese. Serve with sour cream, salsa, and fresh cilantro, if desired. Enjoy your delicious beef tacos!"
    },
    {
        id: 24,
        title: "Chicken Noodle Soup",
        description: "Enjoy the comforting flavors of our Chicken Noodle Soup, featuring tender chicken, fresh vegetables, and egg noodles in a savory broth.",
        category: ["lunch"],
        image: "./images/dishes/Chicken Noodle Soup.jpg",
        timePrepServ: "45 MIN - MEDIUM PREP - 6 SERVES",
        ingredients: [
            "1 tablespoon olive oil",
            "1 medium onion, diced",
            "2 carrots, sliced",
            "2 celery stalks, sliced",
            "3 cloves garlic, minced",
            "6 cups chicken broth",
            "2 cups cooked chicken, shredded",
            "1 teaspoon dried thyme",
            "1 bay leaf",
            "Salt and pepper to taste",
            "2 cups egg noodles or pasta of your choice",
            "Fresh parsley for garnish (optional)"
        ],
        nutrition: [
            "Calories: 280",
            "Protein: 25g",
            "Fat: 8g",
            "Carbohydrates: 30g",
            "Fiber: 2g",
            "Sugar: 2g",
            "Sodium: 700mg"
        ],
        recipe: "In a large pot, heat the olive oil over medium heat. Add the diced onion, sliced carrots, and sliced celery, and sauté until the vegetables are tender, about 5-7 minutes. Add the minced garlic and cook for an additional minute. Pour in the chicken broth, and add shredded chicken, dried thyme, and bay leaf. Season with salt and pepper. Bring the soup to a boil, then reduce the heat and let it simmer for about 15 minutes. Stir in the egg noodles and cook according to package instructions until tender. Remove the bay leaf before serving. Garnish with fresh parsley if desired. Enjoy your comforting chicken noodle soup!"
    },
    {
        id: 25,
        title: "Chicken Tortilla Soup",
        description: "Experience the bold flavors of our Chicken Tortilla Soup, featuring shredded chicken, tomatoes, and spices, topped with crispy tortilla strips and avocado.",
        category: ["lunch"],
        image: "./images/dishes/Chicken Tortilla Soup.jpg",
        timePrepServ: "30 MIN - MEDIUM PREP - 4 SERVES",
        ingredients: [
            "1 tablespoon olive oil",
            "1 medium onion, diced",
            "2 cloves garlic, minced",
            "1 bell pepper, diced",
            "2 cans (14.5 oz each) diced tomatoes (with green chilies, if desired)",
            "4 cups chicken broth",
            "2 cups cooked chicken, shredded",
            "1 can (15 oz) black beans, rinsed and drained",
            "1 cup corn (frozen or canned)",
            "1 teaspoon ground cumin",
            "1 teaspoon chili powder",
            "Salt and pepper to taste",
            "1/4 cup fresh cilantro, chopped (for garnish)",
            "Tortilla strips or chips (for serving)",
            "Lime wedges (for serving)"
        ],
        nutrition: [
            "Calories: 300",
            "Protein: 25g",
            "Fat: 8g",
            "Carbohydrates: 40g",
            "Fiber: 10g",
            "Sugar: 5g",
            "Sodium: 600mg"
        ],
        recipe: "In a large pot, heat the olive oil over medium heat. Add the diced onion and minced garlic, and sauté until softened. Stir in the diced bell pepper and cook for an additional few minutes. Add the diced tomatoes, chicken broth, shredded chicken, black beans, corn, cumin, chili powder, salt, and pepper. Bring the soup to a boil, then reduce the heat and let it simmer for about 20 minutes to allow the flavors to meld. Serve the soup hot, topped with tortilla strips or chips, fresh cilantro, and lime wedges. Enjoy your flavorful chicken tortilla soup!"
    },
    {
        id: 26,
        title: "Mini Sliders",
        description: "Enjoy our Mini Sliders, bite-sized burgers topped with cheese, lettuce, and special sauce, perfect for a quick and satisfying snack.",
        category: ["quickbite"],
        image: "./images/dishes/Mini Sliders.jpg",
        timePrepServ: "15 MIN - EASY PREP - 4 SERVES",
        ingredients: [
            "1 pound ground beef (or turkey)",
            "1/2 teaspoon salt",
            "1/2 teaspoon black pepper",
            "1/2 teaspoon garlic powder",
            "1/2 teaspoon onion powder",
            "8 small slider buns",
            "4 slices cheese (cheddar or your choice), halved",
            "Lettuce leaves (for topping)",
            "Tomato slices (for topping)",
            "Pickles (for topping)",
            "Ketchup and mustard (for serving)"
        ],
        nutrition: [
            "Calories: 200 per slider",
            "Protein: 12g",
            "Fat: 10g",
            "Carbohydrates: 18g",
            "Fiber: 1g",
            "Sugar: 2g",
            "Sodium: 400mg"
        ],
        recipe: "In a large bowl, combine the ground beef, salt, pepper, garlic powder, and onion powder. Mix gently until combined, then form into small patties (about 2-3 inches in diameter). Heat a skillet or grill over medium heat and cook the patties for about 3-4 minutes on each side, or until cooked through. During the last minute of cooking, place a half slice of cheese on each patty to melt. Toast the slider buns lightly if desired. Assemble the sliders by placing each patty on a bun and topping with lettuce, tomato, pickles, ketchup, and mustard. Serve warm and enjoy your delicious mini sliders!"
    },
    {
        id: 27,
        title: "Stuffed Jalapeño Poppers",
        description: "Indulge in our Stuffed Jalapeño Poppers, filled with cream cheese and spices, then baked to perfection for a spicy, cheesy treat.",
        category: ["quickbite"],
        image: "./images/dishes/Stuffed Jalapeño Poppers.jpg",
        timePrepServ: "20 MIN - MEDIUM PREP - 4 SERVES",
        ingredients: [
            "12 fresh jalapeños",
            "8 oz cream cheese, softened",
            "1 cup shredded cheese (cheddar or mozzarella)",
            "1/2 cup cooked bacon, crumbled (optional)",
            "1/4 teaspoon garlic powder",
            "1/4 teaspoon onion powder",
            "Salt and pepper to taste",
            "1/2 cup breadcrumbs (for topping, optional)",
            "Cooking spray or olive oil (for greasing)"
        ],
        nutrition: [
            "Calories: 150 per popper",
            "Protein: 6g",
            "Fat: 12g",
            "Carbohydrates: 5g",
            "Fiber: 1g",
            "Sugar: 1g",
            "Sodium: 200mg"
        ],
        recipe: "Preheat the oven to 400°F (200°C). Cut the jalapeños in half lengthwise and remove the seeds and membranes (use gloves!). In a mixing bowl, combine the softened cream cheese, shredded cheese, crumbled bacon (if using), garlic powder, onion powder, salt, and pepper. Mix until well combined. Stuff each jalapeño half with the cheese mixture and place on a baking sheet. If desired, sprinkle breadcrumbs on top of each stuffed jalapeño for added crunch. Lightly spray with cooking spray or drizzle with olive oil. Bake for 20-25 minutes, or until the jalapeños are tender and the cheese is bubbly and golden. Serve warm and enjoy your delicious stuffed jalapeño poppers!"
    },
    {
        id: 28,
        title: "Ham and Cheese Pinwheels",
        description: "Enjoy our Ham and Cheese Pinwheels, made with savory ham and melted cheese rolled in a tortilla and sliced into bite-sized pieces.",
        category: ["quickbite"],
        image: "./images/dishes/Ham and Cheese Pinwheels.jpg",
        timePrepServ: "15 MIN - EASY PREP - 4 SERVES",
        ingredients: [
            "1 large flour tortilla (10-inch size)",
            "4 oz cream cheese, softened",
            "1 teaspoon Dijon mustard (optional)",
            "4 oz sliced ham",
            "4 oz sliced cheese (Swiss, cheddar, or your choice)",
            "1/4 cup spinach leaves or lettuce (optional)",
            "1/4 teaspoon black pepper",
            "1/4 teaspoon garlic powder (optional)"
        ],
        nutrition: [
            "Calories: 250 per pinwheel (based on 4 pinwheels)",
            "Protein: 12g",
            "Fat: 15g",
            "Carbohydrates: 20g",
            "Fiber: 2g",
            "Sugar: 1g",
            "Sodium: 600mg"
        ],
        recipe: "In a bowl, mix the softened cream cheese and Dijon mustard (if using) until well combined. Spread the cream cheese mixture evenly over the tortilla. Layer the sliced ham and cheese on top of the cream cheese, and add spinach leaves or lettuce if desired. Sprinkle with black pepper and garlic powder, if using. Starting from one side, carefully roll the tortilla tightly into a log. Once rolled, slice into pinwheels (about 1-inch thick). Serve immediately or refrigerate until ready to serve. Enjoy your tasty ham and cheese pinwheels!"
    }

];

app.use(cors());
app.use(express.json());

app.get('/api/dishes', (req, res) => {
    const category = req.query.category;
    if (category) {
        const filteredCards = dishes.filter(dish =>
            dish.category.includes(category)
        );
        return res.json(filteredCards);
    }
    res.json(dishes);
});

app.get('/api/dishes/:id', (req, res) => {
    const dishId = parseInt(req.params.id, 10);
    const dish = dishes.find(dish => dish.id === dishId);

    if (dish) {
        return res.json(dish);
    }

    res.status(404).json({ message: 'Dish not found' });
});
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});