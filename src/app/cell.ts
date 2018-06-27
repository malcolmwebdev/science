export class Cell {
    constructor(type: String) {
        this.type = type;
        this.description = '';
        this.typicalOrganisms = [];
        this.subCellularComponants = {
            geneticMaterial: null,
            membrane: null,
            motileAppendages: null,
            cytoplasm: null,
            geneticMaterials: null,
            organelles: null,
        }
    }
    public description: String
    public typicalOrganisms: Array<String>
    public type: String
    public subCellularComponants:  {
        geneticMaterial: Array<Object>
        membrane: Object
        motileAppendages: Object
        cytoplasm: Object
        geneticMaterials: Object
        organelles: Array<Object>
    }
    replicate = (): void => {
    }
    metabolize = (): void => {
    }
    specificAction = (): void => {
    }
}

export class Eukaryot extends Cell {
    constructor(type: String) {
        super(type);
    }
}

export class Prokaryot extends Cell {
    constructor(type: String) {
        super(type);
        this.description = "Prokaryotes include bacteria and archaea, two of the three domains of life. Prokaryotic cells were the first form of life on Earth, characterised by having vital biological processes including cell signaling. They are simpler and smaller than eukaryotic cells, and lack membrane-bound organelles such as a nucleus. The DNA of a prokaryotic cell consists of a single chromosome that is in direct contact with the cytoplasm. The nuclear region in the cytoplasm is called the nucleoid. Most prokaryotes are the smallest of all organisms ranging from 0.5 to 2.0 µm in diameter.";
        this.subCellularComponants.membrane = this.cellEnvelope;
    }
    cilia: Object
    private cellEnvelope: {
        plasmaMembrane: Object
        cellWall: Object
        capsule: Object
    } 
}

export class Bacteria extends Prokaryot {
    constructor(type: String) {
        super(type);
    }
}

export class Archaea extends Prokaryot {
    constructor(type: String) {
        super(type);
    }
}

export class Protist extends Eukaryot {
    constructor(type: String) {
        super(type);
    }
}

export class Fungi extends Eukaryot {
    constructor(type: String) {
        super(type);
    }
}

export class PlantCell extends Eukaryot {
    constructor(type: String) {
        super(type);
    }
}

export class AnimalCell extends Eukaryot {
    constructor(type: String) {
        super(type);
    }
}

export class Nucleus {
    constructor() {
    }
    public type: string = 'Nucleus';
    public image: string = 'https://commons.wikimedia.org/wiki/File:Diagram_human_cell_nucleus.svg';

}
