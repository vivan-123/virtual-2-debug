class Food
{
    constructor()
    {
        this.milk = loadImage("images/Milk.png");
        this.foodStock;
        this.lastFed;
    }

    getFoodStock() 
    {
        var foodref = database.ref("food");
        foodref.on("value", readpos, errorpos);

        var foodstockref = database.ref("foodstock");
        foodstockref.on("value", readpos2, errorpos);

        database.ref("/").set({ foodstock : 50,
        food : 0 }) 
        
        function readpos(data) 
        {
            food = data.val();
            console.log("food = "+food)
        }
  
  
        function readpos2(data) 
        {
            foodstock = data.val();  
        }
  
        function errorpos() 
        {
            console.log("crashedddd!!!!")
        }    
    }

    updateFoodStock(x)
    {
        if (foodstock<1)
        {
            database.ref("/").update({ food : food + 0,
            foodstock : 0})
        }
        else
        {
            doggo.changeImage("happydogoog",happydog)  
            database.ref("/").update({ food : food + 1,
            foodstock : foodstock -x })
        }
    }

    refillFoodStock()
    {
        database.ref("/").update({ foodstock : foodstock + 1,
        food : food })
    }

    display()
    {
 
        
    }
}