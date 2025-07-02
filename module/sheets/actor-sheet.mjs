

export class FUActorSheet extends foundry.appv1.sheets.ActorSheet {
    static get defaultOptions() {
        console.log(
            "⚙ FUActorSheet defaultOptions"
        )
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ['freeformuniversal', 'sheet', 'actor'],
            width: 500,
            height: 500,
            template: "systems/freeformuniversal/templates/actor-${this.actor.type}-sheet.hbs",
        });
    }

    get template() {
        console.log(
            "🐑 FUActorSheet template"
        )
        return `systems/freeformuniversal/templates/actor/actor-${this.actor.type}-sheet.hbs`;
    }
}

console.log("🔃 actor-sheets.mjs");

