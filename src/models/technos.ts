export default class Techno {
 // 1. Typage des propiétés d'une techno
 id: number;
 maitrise: number;
 NbrOfprojet: number;
 name: string;
 picture: string;
 types: Array<string>;
 created: Date;
 sampleExample:Map<number,string>;


  // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
  constructor(
    id: number,
    maitrise: number = 2,
    NbrOfprojet: number = 0,
    name: string = 'name',
    picture: string = 'http://...',
    types: Array<string> = ['Normal'],
    created: Date = new Date(),
    sampleExample:Map<1,"JAVA 8">
   ) {
    // 3. Initialisation des propiétés d'un pokémons.
    this.id = id;
    this.maitrise = maitrise;
    this.NbrOfprojet = NbrOfprojet;
    this.name = name;
    this.picture = picture;
    this.types = types;
    this.sampleExample = sampleExample;
    this.created = created;
   }






}