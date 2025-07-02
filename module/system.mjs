
import { FUActorDataModel } from './documents/actor.mjs'
//import { FUActorSheet } from './sheets/actor-sheet.mjs'

Hooks.once("init", () => {
    console.log("🍏 system.mjs Hooks.once init");

    game.freeformuniversal = {
        FUActorDataModel
    }

    //CONFIG.Actor.documentClass = FUActorDataModel;

    CONFIG.Actor.trackableAttributes = {
        character: {
            bar: ["resources.health", "resources.power"],
            value: ["level"]
        },
        npc: {
            bar: ["resources.health", "resources.power"],
            value: []
        }
    };

    /*
    foundry.documents.collections.Actors.registerSheet('freeformuniversal', FUActorSheet, {
        makeDefault: true,
        label: 'FU.SheetLabels.Actor',
    });
    */

    console.log("🍎 system.mjs Hooks.once init");
});
