const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;
/* -------------------------------------------- */
/*  Actor Models                                */
/* -------------------------------------------- */

export class FUActorDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        // All Actors have resources.
        return {
            resources: new SchemaField({
                health: new SchemaField({
                    min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                    value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
                    max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
                }),
                power: new SchemaField({
                    min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                    value: new NumberField({ required: true, integer: true, min: 0, initial: 1 }),
                    max: new NumberField({ required: true, integer: true, min: 0, initial: 3 })
                }),
                biography: new HTMLField({ required: true, blank: true }),
                bodyDescriptor: new StringField({ required: true, blank: true }),
                mindDescriptor: new StringField({ required: true, blank: true }),
                edgeDescriptor: new StringField({ required: true, blank: true }),
                flawDescriptor: new StringField({ required: true, blank: true })
            })
        };
    }
}

console.log("🔃 actor.mjs");

