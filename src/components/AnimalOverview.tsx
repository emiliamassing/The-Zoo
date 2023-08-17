import { useEffect, useState } from "react";
import { getAnimals } from "../services/animalService";
import { IAnimal } from "../models/IAnimal";
import { AnimalsContainer } from "./AnimalsContainer";

//Lagra och hämta djur med Localstorage istället

export function AnimalOverview() {
    const [animals, setAnimals] = useState<IAnimal[]>([]);

    async function fetchAnimals() {
        const data = await getAnimals();
        
        setAnimals(data);
    }

    console.log('Animals:', animals);

    useEffect(() => {
        if(animals.length < 1) {
            fetchAnimals();
        } else {
            console.log('djur hämtade');
        }
    })

    return(
        <>
            <h2>Alla våra djur</h2>
            <div className="animalContainer">
                <AnimalsContainer animalList={animals}></AnimalsContainer>
            </div>
        </>
    );
}