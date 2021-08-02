const ingredientCheck = function (bakeries, recipe) {
    for (let bIndex = 0; bIndex < bakeries.length; bIndex++) {
        const baker = bakeries[bIndex];
        if (recipe.ingredients.indexOf(baker) >= 0) {
            return recipe.name;
        }
    }
}

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
    for (let recipeIndex = 0; recipeIndex < recipes.length; recipeIndex++) {
        const recipe = recipes[recipeIndex];
        const bakery1 = ingredientCheck(bakeryA, recipe)
        const bakery2 = ingredientCheck(bakeryB, recipe)
        if (bakery1 && bakery2 && bakery1 === bakery2) {
            return bakery1;
        }
    }
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));