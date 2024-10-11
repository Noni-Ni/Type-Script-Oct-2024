function towns(data: string[]){
    interface TownInt {
        name: string;
        latitude: number;
        longitude: number;
    }

    class Town implements TownInt{
        public name: string;
        public latitude: number;
        public longitude: number;
        constructor(name: string, latitude: number, longitude: number){
            this.name = name;
            this.latitude = latitude;
            this.longitude = longitude;
        }
      
    }

    let result: Array<Town> = []
    data.map(el => {
        let [name, latitude, longitude] = el.split(" | ")
        let properLati = Number(Number(latitude).toFixed(2))
        let properLongi = Number(Number(longitude).toFixed(2))
        let town1 = new Town(name,properLati, properLongi)
        result.push(town1)
    })

    return result.map(el => JSON.stringify(el)).join('\n')
}

console.log(towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    ))
console.log(towns(['Plovdiv | 136.45 | 812.575']))