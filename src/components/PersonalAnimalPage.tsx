import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import errorImage from "../assets/errorImage.png";

export function PersonalAnimalPage() {
    const { id }  = useParams();
    const [animalInfo, setAnimalInfo] = useState<IAnimal[]>([]);
    const localAnimals = localStorage.getItem('animals');
    const chosenAnimal = animalInfo.filter((animal) => animal.id === Number(id));
    const animalIndex = animalInfo.findIndex(animal => animal.id === Number(id));
    const currentTime = new Date();

    useEffect(() => {
        if(localAnimals && animalInfo.length === 0) {
            setAnimalInfo(JSON.parse(localAnimals));
        }
    }, [localAnimals, animalInfo]);

    function feedAnimal() {
        if(animalIndex !== -1) {
            const updatedAnimalInfo = [...animalInfo];

            updatedAnimalInfo[animalIndex].isFed = true;
            updatedAnimalInfo[animalIndex].lastFed = currentTime.toISOString();

            setAnimalInfo(updatedAnimalInfo);

            localStorage.setItem('animals', JSON.stringify(updatedAnimalInfo));
        }
    }

    useEffect(() => {
        if(chosenAnimal.length !== 0 && (animalInfo[animalIndex].isFed === true)) {
            checkIfThreeHoursHavePassed(chosenAnimal[0].lastFed);
        }
    });

    function checkIfThreeHoursHavePassed(lastFed: string) {
        const lastFedTime = new Date(lastFed);
        const timeDifferenceInMilliseconds = currentTime.getTime() - lastFedTime.getTime();
        const hoursPassed = timeDifferenceInMilliseconds / (1000 * 60 * 60);

        if(hoursPassed >= 3) {
            const updatedAnimalInfo = [...animalInfo];
            updatedAnimalInfo[animalIndex].isFed = false;
            setAnimalInfo(updatedAnimalInfo);

            localStorage.setItem('animals', JSON.stringify(updatedAnimalInfo));
            console.log('3h har passerat');
        } else {
            console.log('Mindre än 3h har gått');
        }
    }

    const animalInformation = chosenAnimal.map((animal) => {
        return(
            <div className="personalAnimalContainer" key={animal.id}>
                <h2>{animal.name}</h2>
                <img 
                    src={animal.imageUrl} 
                    alt={animal.name} 
                    loading="lazy" 
                    onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = errorImage;
                }}>
                </img>
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
                {animal.isFed ? 
                    <button onClick={feedAnimal} disabled={true}>Mata {animal.name}</button>
                : 
                    <button onClick={feedAnimal}>Mata {animal.name}</button>
                }
                
            </div>
        )
    });

    return(
        <>
            {animalInformation}
        </>
    )
}