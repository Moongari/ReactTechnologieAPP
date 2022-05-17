import React,{FunctionComponent,useState,useEffect} from 'react'; 
import TECHNOSFULL from "./models/mock-techno";
import Techno from "./models/technos";


const App: FunctionComponent=() =>{

    const[title,setName] = useState<string>('TECHNOLOGIE');// on definit un type les données String sauvegarder dans notre state
    const[technos] = useState<Techno[]>(TECHNOSFULL);
    const[initListTechno,setInitListTechno] = useState<Techno[]>([]);
    const[levelMax, setLevelMax] = useState<string>("5");
    useEffect(()=>{
        setInitListTechno(TECHNOSFULL);
    },[]);
    

    return(
        <div>
            <div className="col s12 m4 l3">
            <p><h3>NOMBRE DE {title} CONTENU DANS LA BASE :</h3></p>
            </div>
            
           <p>il y a {technos.length} technologies dans la liste sans hookEffect</p>
           <p> il y a {initListTechno.length} technologies avec HookEffect</p>
           <div className='col s6'>
                <p>Liste des différentes {title}</p>
                <ul>
                    {initListTechno.map(({name,id,maitrise})=>(
                        <li key={name}>{id} = {name} : niveau de maitrise : {maitrise}/{levelMax}</li>
                    ))}
                </ul>
           </div>
        
        </div>
    )


}

export default App;