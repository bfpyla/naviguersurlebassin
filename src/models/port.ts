export interface Port {
    id: number;
    nom: string;
    descriptif: string;
    photo: string;
    forum: string;
    capitainerie: {
        adresse: string;
        tel: string;
        portable: string;
        mail: string;
        website: string;
        vhf: number;
        horaireEte: string;
        horaireHiver: string;
        position: string;
    };
    accueil: {
        pontons: number;
        corpsMort: number;
        portSec: number;
        visiteur: number;
        localisationVisiteur: string;
    };
    acces: {
        horaire: string;
        longueurBateau: number;
        tirantEau: number;
    };
    carburant: {
        localisation: string;
        horaire: string;
        essence: string[];
    };
    services: {
        ravitaillement: string;
        parking: string;
        wifi: string;
        borneElectrique: string;
        recyclage: string[];
    };
    sanitaires: {
        blocSanitaire: number;
        wc: number;
        douches: number;
        mobiliteReduite: string;
    }
}

