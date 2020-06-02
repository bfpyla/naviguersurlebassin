
import {Balise} from './balise';
export const BALISES: Balise[] = [
    {
        id: 1,
        nom: 'Cardinale Nord',
        libelle: 'Passer au Nord',
        descriptif: ['couleur : noir – jaune',
                     'voyant : deux cônes noirs, pointes vers le haut',
                     'feu : scintillant blanc continu'
                    ],
        created: new Date(),
        image: '/assets/balisage/CardinaleNord.png'
    },
    {
        id: 2,
        nom: 'Cardinale Est',
        libelle: 'Passer à l\'Est',
        descriptif: ['couleur : noir – jaune – noir',
                     'voyant : deux cônes noirs, pointes oppos',
                     'feu : blanc, trois éclats groupés'
                     ],
        created: new Date(),
        image: '/assets/balisage/CardinaleEst.png'
    },
    {
        id: 3,
        nom: 'Cardinale Sud',
        libelle: 'Passer au Sud',
        descriptif: ['couleur : jaune – noir',
                    'voyant : deux cônes noirs, pointes vers le bas',
                    'feu : blancs, six éclats groupés suivis d\'un éclat long'
                    ],
        created: new Date(),
        image: '/assets/balisage/CardinaleSud.png'
    },
    {
        id: 4,
        nom: 'Cardinale Ouest',
        libelle: 'Passer à l\'Ouest',
        descriptif: ['couleur : jaune – noir – jaune',
                     'voyant : deux cônes noirs, pointes jointes',
                     'feu : blanc, neuf éclats groupés'
                    ],
        created: new Date(),
        image: '/assets/balisage/CardinaleOuest.png'
    },
    {
        id: 5,
        nom: 'Danger isolé',
        // tslint:disable-next-line: max-line-length
        libelle: 'Signale un écueil peu étendu, situé généralement à l\'endroit ou est positionnée la balise. La balise peut être laissée indifféremment à bâbord ou à tribord.',
        descriptif: ['forme : quelconque',
                     'couleur : noire, avec une ou plusieurs bandes rouges',
                     'voyant : deux boules noires',
                     'feu : blanc',
                     'rythme : deux éclats groupés'
                    ],
        created: new Date(),
        image: '/assets/balisage/DangerIsole.png'
    },
    {
        id: 6,
        nom: 'Eaux saines',
        libelle: 'Indique que les eaux sont libres de tout danger dans les parages.',
        descriptif: ['forme : Quelconque',
                     'couleur : rouge et blanc',
                     'voyant : une boule rouge',
                     'feu : blanc',
                     // tslint:disable-next-line: max-line-length
                     'rythme : isophase, à occultations, à un éclats toutes les 10 secondes ou la lettre Code Morse Morse « A » (Point/trait)'
                    ],
        created: new Date(),
        image: '/assets/balisage/EauxSaines.png'
    },
    {
        id: 7,
        nom: 'Marque spéciale',
        // tslint:disable-next-line: max-line-length
        libelle: 'Les marques spéciales sont utilisées dans différents cas : zone d\'exercice militaire, présence d\'un câble ou d\'un oléoduc sous marin, zone de dépôt de matériaux, zone réservée à la plaisance, etc.',
        descriptif: ['couleur : jaune',
                     'voyant : croix jaune',
                     'feu : jaune',
                     'rythme : quelconque, autre que ceux caractérisant les autres feux.'
                    ],
        created: new Date(),
        image: '/assets/balisage/MarqueSpeciale.png'
    },
    {
        id: 8,
        nom: 'Marque d\'épave spéciale',
        // tslint:disable-next-line: max-line-length
        libelle: 'Balise une épave, si plusieurs marques balisent une épave, les feux des différentes marques sont synchronisés',
        descriptif: ['couleur bleue et jaune (à rayures verticales)',
                     'voyant est une croix type « + » (croix droite) de couleur jaune',
                     'feu est alternativement bleu et jaune',
                     'rythme : quelconque, autre que ceux caractérisant les autres feux.'
                    ],
        created: new Date(),
        image: '/assets/balisage/EpaveUrgence.png'
    }

];
