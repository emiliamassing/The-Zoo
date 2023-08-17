import { useEffect } from "react";
import { getAnimals } from "../services/animalService";

export function AnimalOverview() {
    useEffect(() => {
        getAnimals();
    });

    return(
        <>
            <h2>All Of Our Animals!</h2>
        </>
    );
}