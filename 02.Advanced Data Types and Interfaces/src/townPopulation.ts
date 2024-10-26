type TownPopulationType = {
    [key: string] : number;
}

function townPopulation(data: string[]): void {

    let townPopulation : TownPopulationType = {}
   
    data.map(el => {
        let [townName, population] = el.split(' <-> ')
        let arr: string[] = Object.keys(townPopulation)
        let isExist: boolean = arr.some(el => el === townName)
        if (isExist) {

            townPopulation[townName] += Number(population)
        }else{
            townPopulation[townName] = Number(population)
        }
      
    })

    for (const [key, value] of Object.entries(townPopulation)) {
        console.log(`${key} : ${value}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])