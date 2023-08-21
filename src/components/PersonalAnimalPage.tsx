import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";

export function PersonalAnimalPage() {
    const { id }  = useParams();
    const [animalInfo, setAnimalInfo] = useState<IAnimal[]>([]);
    const localAnimals = localStorage.getItem('animals');

    useEffect(() => {
        if(localAnimals && animalInfo.length === 0) {
            setAnimalInfo(JSON.parse(localAnimals));
        }
    }, [localAnimals, animalInfo.length]);
    
    const chosenAnimal = animalInfo.filter((animal) => animal.id === Number(id));
    console.log('Chosen Animal', chosenAnimal);

    const animalInformation = chosenAnimal.map((animal) => {
        return(
            <div className="personalAnimalContainer" key={animal.id}>
                <h2>{animal.name}</h2>
                <img src={animal.imageUrl}></img>
                <div className="generalAnimalInfo">
                    <p className="latinName">{animal.latinName}</p>
                    <p className="longDesc">{animal.longDescription}</p>
                </div>
                <p>Född: {animal.yearOfBirth}</p>
                <p>Mediciner: {animal.medicine}</p>
                <div className="hungerStatus">
                    {animal.isFed ?
                    <div className="isFedIcons">
                        <i className="fa-solid fa-wheat-awn fa-xl"></i>
                        <i className="fa-solid fa-wheat-awn fa-xl"></i>
                    </div>
                    : 
                    <div className="isNotFedIcons">
                        <i className="fa-solid fa-wheat-awn-circle-exclamation fa-xl"></i>
                        <i className="fa-solid fa-wheat-awn fa-xl faded"></i>
                    </div>
                    }
                </div>
                <p>Senast Matad: {animal.lastFed}</p>
                <button>Mata {animal.name}</button>
            </div>
        )
    });

    return(
        <>
            {animalInformation}
        </>
    )
}