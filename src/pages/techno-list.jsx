import React,{FunctionComponent,useState,useEffect} from 'react'; 
import TECHNOSFULL from "./models/mock-techno";
import Techno from "./models/technos";


const technoList = FunctionComponent =()=>{

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

                <p>Liste des différentes {title}</p>
               
                    {initListTechno.map(({name,maitrise,NbrOfprojet})=>(
                     <div className="row">
                     <div className="col s12 m6">
                       <div className="card blue-grey darken-1">
                         <div className="card-content white-text">
                           <span className="card-title">{name}</span>
                           <div>niveau de maitrise de cette technologie : {maitrise} /{levelMax}<br/>
                           Nombre de projets effectuées : {NbrOfprojet}
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                    ))}
                   
              
      
        
        </div>
    )




}

export default technoList;