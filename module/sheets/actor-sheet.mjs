export class FUActorSheet extends ActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ['freeformuniversal', 'sheet', 'actor'],
            width: 500,
            height: 500,
        });
    }

}