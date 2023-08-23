import { get } from "./serviceBase";
import { IAnimal } from "../models/IAnimal";

const BASEURL = import.meta.env.VITE_ANIMAL_API_URL;

export async function getAnimals() {
    const response = await get<IAnimal[]>(`${BASEURL}`);
    return response;
}

export function alertIfFourHoursHavePassed(animalList: IAnimal[]) {
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