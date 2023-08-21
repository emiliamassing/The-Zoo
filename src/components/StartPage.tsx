export function StartPage() {
    localStorage.removeItem('animalInfo');

    return (
        <>
            <h1>Nordiska Djurriket</h1>

            <section className="informationContainer">
                <p>
                    Välkommen till vårt fantastiska zooäventyr! Upplev magin med en värld av fascinerande djur från hela jorden samlade på ett ställe. 
                    Vår djurpark är en plats där lärande och nöje förenas för hela familjen. 
                    Utforska en mångfald av livsformer, från majestätiska rovdjur till färgsprakande exotiska fåglar och lekfulla däggdjur.
                </p>
                <p>
                    Stig in i en värld av spännande möten och lärorika stunder. 
                    Våra erfarna guider står redo att dela med sig av intressanta fakta om våra fyrbenta vänner och deras naturliga miljöer. 
                    Vi är stolta över att inte bara underhålla, utan också engagera våra besökare i bevarandet av vårt värdefulla djurliv.
                </p>
                <p>
                    Utforska våra noggrant utformade utställningar som återskapar autentiska livsmiljöer. 
                    Gå på safari genom savannen, utforska regnskogens mystik eller beundra korallrevets skönhet. 
                    För de yngre upptäckarna finns interaktiva områden där de kan lära sig genom lek.
                </p>
                <p>
                    Ditt besök hos oss stödjer också viktiga bevarandeprojekt och forskning som hjälper hotade arter och deras naturliga livsmiljöer. 
                    Tillsammans kan vi göra en verklig skillnad.
                </p>
                <p>
                    Upplev äventyret, närma dig naturen och skapa minnen för livet på vårt enastående zoo. 
                    Köp dina biljetter idag och ge hela familjen en oförglömlig dag fylld med spännande upplevelser och djurupptäckter!
                </p>
            </section>
        </>
    );
}