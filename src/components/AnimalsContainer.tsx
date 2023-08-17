import { IAnimal } from "../models/IAnimal"

interface IAnimalProps {
    animalList: IAnimal[]
}

export function AnimalsContainer({animalList}: IAnimalProps) {
    console.log(animalList, 'Correctly sent props');
    const animalCard = animalList.map((animal, i) => {
        return(
            <div className="animalCard" key={i}>
                <img src={animal.imageUrl}></img>
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
                <button>Läs Mer</button>
            </div>
        )
    });
    
    return(
        <>
            {animalCard}
        </>
    )
}