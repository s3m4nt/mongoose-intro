const db = require('./models')
db.connect()

// 

const drinkCRUD = async () => {
    try{
        // // CREATE
        // const newDrink = await new db.Drink({
        //     name: 'Chocolate Milk',
        //     rating: 9
        // })

        // await newDrink.save()
        // console.log('new drink: ', newDrink)

        // // READ
        const foundDrink = await db.Drink.findOne({
            name: 'Chocolate Milk'
        })

        console.log('found drink: ', foundDrink)

        // UPDATE
        foundDrink.name ='Choco Milk'
        await foundDrink.save()

        console.log('updated drink: ', foundDrink)

        // DESTROY
        const deletedDrink = await db.Drink.deleteOne({
            name: 'Choco Milk'
        })

        console.log('deleted drink: ', deletedDrink)



    }
    catch (err) {
        console.log(err)
    }
}

drinkCRUD()