import { useParams } from "react-router-dom"
import { getAnimalById } from "../services/animalService";
import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";

export function PersonalAnimalPage() {
    const { id }  = useParams();
    const [animalInfo, setAnimalInfo] = useState<IAnimal[]>([]);
    const localAnimalInfo = localStorage.getItem('animalInfo');

    useEffect(() => {
        async function fetchAnimalById() {
            if(id !== undefined) {
                const data =  await getAnimalById(id);

                localStorage.setItem('animalInfo', JSON.stringify(data));
                setAnimalInfo(data);
            }
        }

        if(localAnimalInfo) {
            setAnimalInfo([JSON.parse(localAnimalInfo)]);
        } else {
            fetchAnimalById();
        }
    }, [id, localAnimalInfo]);

    const animalInformation = animalInfo.map((animal) => {
        return(
            <section className="personalAnimalContainer" key={animal.id}>
                <h2>{animal.name}</h2>
                <img src={animal.imageUrl}></img>
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
                <div className="generalAnimalInfo">
                    <p className="latinName">{animal.latinName}</p>
                    <p>{animal.longDescription}</p>
                </div>
                <p>Född: {animal.yearOfBirth}</p>
                <p>Mediciner: {animal.medicine}</p>
                <p>Senast Matad: {animal.lastFed}</p>
                <button>Mata {animal.name}</button>
            </section>
        )
    });

    return(
        <>
            <h3>Animal: {id}</h3>
            {animalInformation}
        </>
    )
}