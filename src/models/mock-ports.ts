
import {Port} from './port';
export const PORTS: Port[] = [
    {
        id: 1,
        nom: 'Arcachon',
        // tslint:disable-next-line: max-line-length
        descriptif: 'Il dispose d\'une capacité d\'accueil de 2600 bateaux sur pontons et de 650 sur corps mort. 250 places sont disponible pour les escales. Le port est réservé aux bateaux de moins de 15 m et d\'un tirant d\'eau maxximal de 1,5 m.',
        photo: '/assets/cartePort/Arcachon.png',
        forum: '',
        capitainerie: {
            adresse: 'Quai Goslar CS 01 ARCACHON',
            tel: '0890711733',
            portable: '',
            mail: 'plaisance@port-arcachon.com',
            website: 'http://www.port-arcachon.com',
            vhf: 9,
            horaireEte: '8h30 à 19h',
            horaireHiver: '8h30-12h / 14h-17h',
            position: '-1.145543, 44.657791',
        },
        accueil: {
            pontons: 2600,
            corpsMort: 630,
            portSec: 108,
            visiteur: 250,
            localisationVisiteur: 'A côté de la capitainerie',
        },
        acces: {
            horaire: 'Toutes heures de marée',
            longueurBateau: 15,
            tirantEau: 1.5,
        },
        carburant: {
            localisation: 'A l\'entrée du port',
            horaire: '7j/7, 24h/24',
            essence: ['SP95', 'Gasoil'],
        },
        services: {
            ravitaillement: 'Eau, électricité',
            parking: 'Remorque autorisée',
            wifi: 'A la capitainerie',
            borneElectrique: '16 A',
            recyclage: ['Huile usagée', 'Peinture', 'Eaux noires'],
        },
        sanitaires: {
            blocSanitaire: 2,
            wc: 7,
            douches: 8,
            mobiliteReduite: 'Oui',
        }
    },
    {
        id: 2,
        nom: 'La Teste de Buch',
        descriptif: 'Il dispose d\'une capacité d\'accueil de 196 bateaux sur pontons. Le port est réservé aux bateaux de moins de 12 m.',  
        photo: '/assets/cartePort/LaTeste.png',
        forum: '',
        capitainerie: {
            adresse: 'Quai du port 33260 LA TESTE DE BUCH',
            tel: '05 56 22 21 86',
            portable: '06 03 61 78 07',
            mail: '',
            website: '',
            vhf: 9,
            horaireEte: 'Jeudi de 9h-12h',
            horaireHiver: '',
            position: '-1.145821, 44.640240',
        },
        accueil:{
            pontons: 196,
            corpsMort: 0,
            portSec: 0,
            visiteur: 0,
            localisationVisiteur: '',
        },
        acces:{
            horaire: 'Suivant la marée',
            longueurBateau: 12,
            tirantEau: 0,
        },
        carburant:{
            localisation: 'A Arcachon',
            horaire: '7j/7, 24h/24',
            essence: ['SP95', 'Gasoil'],
        },
        services: {
            ravitaillement: 'Eau, électricité',
            parking: '',
            wifi: '',
            borneElectrique: '',
            recyclage: [''],
        },
        sanitaires: {
            blocSanitaire: 0,
            wc: 0,
            douches: 0,
            mobiliteReduite: '',
        }
    },
    {
        id: 3,
        nom: 'La Hume',
        descriptif: 'Il dispose d\'une capacité d\'accueil de 450 bateaux sur pontons. Le port est réservé aux bateaux de moins de 7,5 m.',  
        photo: '/assets/cartePort/LaHume.png',
        forum: '',
        capitainerie: {
            adresse: 'Quai Port de la Hume 33470 Gujan-Mestras',
            tel: '05 56 66 71 60',
            portable: '',
            mail: 'contact@ville-gujanmestras.fr',
            website: '',
            vhf: 9,
            horaireEte: '8h-18h du 1/06 au 15/09',
            horaireHiver: '',
            position: '-1.185646, 44.662952',
        },
        accueil:{
            pontons: 450,
            corpsMort: 0,
            portSec: 0,
            visiteur: 1,
            localisationVisiteur: '',
        },
        acces:{
            horaire: 'Suivant la marée',
            longueurBateau: 12,
            tirantEau: 0,
        },
        carburant:{
            localisation: 'A Arcachon',
            horaire: '7j/7, 24h/24',
            essence: ['SP95', 'Gasoil'],
        },
        services: {
            ravitaillement: 'Eau, électricité',
            parking: '',
            wifi: '',
            borneElectrique: '',
            recyclage: [''],
        },
        sanitaires: {
            blocSanitaire: 0,
            wc: 0,
            douches: 0,
            mobiliteReduite: '',
        }
    },
    {
        id: 4,
        nom: 'La Vigne',
        descriptif: 'Il dispose d\'une capacité d\'accueil de 300 bateaux sur pontons. Le port est réservé aux bateaux de moins de 7,5 m.',  
        photo: '/assets/cartePort/LaVigne.png',
        forum: '',
        capitainerie: {
            adresse: 'Port de la Vigne 33950 Cap-Ferret',
            tel: '05 56 60 54 36',
            portable: '',
            mail: '',
            website: '',
            vhf: 9,
            horaireEte: '8h-19h',
            horaireHiver: '8h-12 h, 14h-18 h',
            position: '-1.240480, 44.674992',
        },
        accueil:{
            pontons: 300,
            corpsMort: 0,
            portSec: 0,
            visiteur: 1,
            localisationVisiteur: '',
        },
        acces:{
            horaire: 'Suivant la marée',
            longueurBateau: 12,
            tirantEau: 0,
        },
        carburant:{
            localisation: '',
            horaire: '7j/7, 24h/24',
            essence: ['SP95', 'Gasoil'],
        },
        services: {
            ravitaillement: 'Eau, électricité',
            parking: '',
            wifi: '',
            borneElectrique: '',
            recyclage: ['Huile usagée', 'Eaux noires'],
        },
        sanitaires: {
            blocSanitaire: 0,
            wc: 0,
            douches: 0,
            mobiliteReduite: '',
        }
    }
]