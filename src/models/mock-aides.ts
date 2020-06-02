
import {Aide} from './aide';
export const AIDES: Aide[] = [
    {
        id: 1,
        titre: 'Les cardinales',
        libelle: 'Aide balisage cardinales',
        // tslint:disable-next-line: max-line-length
        descriptif: ['Les marques cardinales sont au nombre de quatre et servent à baliser un danger par rapport à un point cardinal',
                     'couleur: jaune et noir',
                     'voyant: deux triangles noirs',
                     'La disposition des couleurs et des triangles indique de quel côté laisser la balise.'
                    ],
        created: new Date(),
        image: '/assets/balisage/Cardinales.gif'
    },
    {
        id: 2,
        titre: 'Le système latéral',
        libelle: 'Passer à l\'Est',
        descriptif: ['Marque bâbord:',
                     'voyant cylindrique, couleur rouge, chiffre pair, feu rouge, rythme quelconque ;',
                     'voyant: deux triangles noirs',
                     'À laisser à bâbord en venant du large.',
                     'Marque tribord:',
                     'voyant conique, couleur verte, chiffre impair, feu vert, rythme quelconque ;',
                     'À laisser à tribord en venant du large.',
                     'arque de chenal principal à tribord ',
                     'cette bouée est une bouée bâbord qui comporte une bande verte en son milieu, la bouée marque simplement\
                      l’existence d\'un chenal secondaire de l\'autre côté ; la considérer principalement comme une bouée bâbord et donc',
                     'a laisser à bâbord pour suivre le chenal principal ;',
                     'la laisser à tribord pour prendre le chenal secondaire ;'
                    ],
        created: new Date(),
        image: '/assets/balisage/CardinaleEst.png'
    },
    {
        id: 3,
        titre: 'Cardinale Sud',
        libelle: 'Passer au Sud',
        descriptif: ['Les marques cardinales sont au nombre de quatre et servent à baliser un danger par rapport à un point cardinal',
                     'couleur: jaune et noir',
                     'voyant: deux triangles noirs',
                     'La disposition des couleurs et des triangles indique de quel côté laisser la balise.'
                    ],
        created: new Date(),
        image: '/assets/balisage/CardinaleSud.png'
    },
    {
        id: 4,
        titre: 'Cardinale Ouest',
        libelle: 'Passer à l\'Ouest',
        descriptif: ['Les marques cardinales sont au nombre de quatre et servent à baliser un danger par rapport à un point cardinal',
                     'couleur: jaune et noir',
                     'voyant: deux triangles noirs',
                     'La disposition des couleurs et des triangles indique de quel côté laisser la balise.'
                    ],
        created: new Date(),
        image: '/assets/balisage/CardinaleOuest.png'
    }

];
