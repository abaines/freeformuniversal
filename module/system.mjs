
import { FUActorDataModel } from './documents/actor.mjs'
import { FUActorSheet } from './sheets/actor-sheet.mjs'

Hooks.once("init", () => {
    console.log("🍏 system.mjs Hooks.once init");

    game.freeformuniversal = {
        FUActorDataModel
    }

    CONFIG.Actor.documentClass = FUActorDataModel;

    Actors.registerSheet('freeformuniversal', ActorSheet, {
        makeDefault: true,
        label: 'FU.SheetLabels.Actor',
    });

    console.log("🍎 system.mjs Hooks.once init");
});
