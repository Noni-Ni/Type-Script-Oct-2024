

function calorieObject(data: string[]): void {

    let calorieBy100 = {}
    for (let index = 0; index < data.length; index++) {
        if(index % 2 === 0){
            calorieBy100[data[index]] = data[index + 1]
        }
        
    }

    console.log(calorieBy100)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])