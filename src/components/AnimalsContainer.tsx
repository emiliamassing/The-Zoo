import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import errorImage from "../assets/errorImage.png";
import { useEffect } from "react";

interface IAnimalProps {
    animalList: IAnimal[]
}

export function AnimalsContainer({animalList}: IAnimalProps) {
    const navigate =  useNavigate();
    
    useEffect(() => {
        checkIfFourHoursHavePassed();
    })

    function directToPage(id: number) {
       navigate(`/animals/${id}`);
    }

    function checkIfFourHoursHavePassed() {
        const currentTime = new Date();
        const animalsRequiringFood: string[]= [];

        animalList.forEach((animal) => {
            const lastFedTime = new Date(animal.lastFed);
            const timeDifferenceInMilliseconds = currentTime.getTime() - lastFedTime.getTime();
            const hoursPassed = timeDifferenceInMilliseconds / (1000 * 60 * 60)

            if(hoursPassed >=4) {
                animalsRequiringFood.push(animal.name);
            }
        });

        if(animalsRequiringFood.length > 0) {
            const mentionAllAnimals = animalsRequiringFood.join(', ');
            alert(`Följande djur är hungriga och har inte fått mat på över 4h: ${mentionAllAnimals}`);
        }
    }

    const animalCard = animalList.map((animal) => {
        return(
            <div className="animalCard" key={animal.id}>
                <img 
                    src={animal.imageUrl} 
                    alt={animal.name} 
                    loading="lazy" 
                    onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = errorImage;
                }}>
                </img>
                <h3>{animal.name}</h3>
                <p>{animal.shortDescription}</p>
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
                <button onClick={() => directToPage(animal.id)}>Läs Mer</button>
            </div>
        )
    });
    
    return(
        <>
            {animalCard}
        </>
    )
}