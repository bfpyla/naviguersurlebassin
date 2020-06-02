
import {Beaufort} from './beaufort';
    
export const BEAUFORTS: Beaufort[]= [
    {
        id : 1,
        degre : 0,        
        descriptif : "Calme",
        vitesseNoeud : "<1",
        vitesseKm : "<1",
        observationEnMer : "La mer est comme un mirroir.",
        observationATerre : "Pas de vent, fumée verticale.",
    },
    {
        id : 2,
        degre : 1,        
        descriptif : "Très légère brise",
        vitesseNoeud : "de 1 à 3",
        vitesseKm : "de 1 à 3",
        observationEnMer : "Quelques rides en écaille de poissons mais pas d'écume.",
        observationATerre : "Très peu de vent, sa direction est relevée par la fumée qu'il entraîne, mais non par les girouettes.",
    },  
    {
        id : 3,
        degre : 2,        
        descriptif : "Petite brise",
        vitesseNoeud : "de 4 à 6",
        vitesseKm : "de 6 à 11",
        observationEnMer : "Vaguelettes courtes aux crêtes d'apparence vitreuse, ne déferlant pas.",
        observationATerre : "Le vent est perçu au visage, les feuilles frémissent, les girouettes tournent.",
    }
 ];