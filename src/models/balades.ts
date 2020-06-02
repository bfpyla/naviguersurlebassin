export interface Balade {
    id: number;
    nom: string;
    descriptif: string;
    destination: string;
    photo: string;
    trace: string;
    etape1: {
        description: string;
        depart: string;
        arrivee: string;
    };
    etape2: {
        description: string;
        depart: string;
        arrivee: string;
    }

}

