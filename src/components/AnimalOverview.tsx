import { useEffect, useState } from "react";
import { getAnimals } from "../services/animalService";
import { IAnimal } from "../models/IAnimal";
import { AnimalsContainer } from "./AnimalsContainer";

export function AnimalOverview() {
    const [animals, setAnimals] = useState<IAnimal[]>([]);

    useEffect(() => {
        localStorage.removeItem('animalInfo');
        const localAnimals = localStorage.getItem('animals');

        async function fetchAnimals() {
            const data = await getAnimals();
            
            localStorage.setItem('animals', JSON.stringify(data));
            setAnimals(data);
        }

        if(localAnimals) {
            setAnimals(JSON.parse(localAnimals));
        } else {
            fetchAnimals();
        }
    }, []);

    return(
        <>
            <h2>Alla våra djur</h2>
            <div className="animalContainer">
                <AnimalsContainer animalList={animals}></AnimalsContainer>
            </div>
        </>
    );
}