class Trainer{
    name: string;
    numberOfBadges: number = 0;
    pokemons : Array<Pokemon> = [];

    constructor(name:string, numberOfBadges: number, pokemons : Array<Pokemon>){
        this.name = name;
        this.numberOfBadges = numberOfBadges;
        this.pokemons = pokemons;
    }

    addPokemon(data: Pokemon): void{
        this.pokemons.push(data);

    }


}

class Pokemon{
    name: string;
    element: string;
    health: number;

    constructor(name : string, element: string, health: number){
        this.name = name;
        this.element = element;
        this.health = health;
    }
}

class Tournament{
    trainers : Array<Trainer>
    constructor(){
        this.trainers = []
    }

    getLine(data: string): void{
        let [trainerName, pokemonName, pokemonElement, pokemonHealth ] = data.split(' ');
        let newPokemon: Pokemon = new Pokemon(pokemonName, pokemonElement, Number(pokemonHealth));
        if(this.trainers.find(el=> el.name === trainerName)){
            this.trainers.forEach( el => {
                if(el.name === trainerName){
                    el.pokemons.push(newPokemon)
                }
            })
        }else{
            let newTrainer = new Trainer(trainerName, 0, []);
            newTrainer.addPokemon(newPokemon);
            this.trainers.push(newTrainer);
        }
        
        
       
    }

    getTounament(command: string) : void{
        if(command === 'Tournament'){

        }else if(command === 'Fire'){
            this.trainers.map( el => {
                let find : Pokemon= el.pokemons.find(el2 => el2.element == 'Fire')
                if(find){
                    el.numberOfBadges++
                }else{
                    el.pokemons.map(el2 => {
                        if(el2.health > 11){
                            el2.health = el2.health - 10
                        }else{
                            el.pokemons = el.pokemons.filter(el3 => el3.name !== el2.name)
                        }
                    })
                }
            })
        }else if(command === 'Water'){
            this.trainers.map( el => {
                let find: Pokemon = el.pokemons.find(el2 => el2.element == 'Water')
                if(find){
                    el.numberOfBadges++
                }else{
                    el.pokemons.map(el2 => {
                        if(el2.health > 11){
                            el2.health = el2.health - 10
                        }else{
                            el.pokemons = el.pokemons.filter(el3 => el3.name !== el2.name)
                        }
                    })
                }
            })
        }else if(command === 'Electricity'){
            this.trainers.map( el => {
                let find : Pokemon = el.pokemons.find(el2 => el2.element == 'Electricity')
                if(find){
                    el.numberOfBadges++
                }else{
                    el.pokemons.map(el2 => {
                        if(el2.health > 11){
                            el2.health = el2.health - 10
                        }else{
                            el.pokemons = el.pokemons.filter(el3 => el3.name !== el2.name)
                        }
                    })
                }
            })
        }else if(command === 'End'){
            this.trainers.sort((a, b) => b.numberOfBadges - a.numberOfBadges).forEach( el => {
                console.log(`${el.name} ${el.numberOfBadges} ${el.pokemons.length}`)
            })
        }
    }
}

let start = new Tournament();
start.getLine('Peter Charizard Fire 100');
start.getLine('George Squirtle Water 38');
start.getLine('Peter Pikachu Electricity 10');
start.getTounament('Tournament');
start.getTounament('Fire');
start.getTounament('Electricity');
start.getTounament('End');
