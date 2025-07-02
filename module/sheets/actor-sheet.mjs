export class FUActorSheet extends foundry.documents.collections.Actors {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ['freeformuniversal', 'sheet', 'actor'],
            width: 500,
            height: 500,
        });
    }

}