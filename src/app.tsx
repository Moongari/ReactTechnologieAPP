import React,{FunctionComponent,useState} from 'react'; 
import TECHNOSFULL from "./models/mock-techno";
import Techno from "./models/technos";


const App: FunctionComponent=() =>{

    const[name,setName] = useState<string>('Techno');
    const[title,SetName] = useState<String>('POKEMONS'); // on definit un type les données String sauvegarder dans notre state
    const[technos] = useState<Techno[]>(TECHNOSFULL);

    return(
        <div>
           <p>il y a {technos.length} technologies dans la liste</p>
        
        </div>
    )

}

export default App;