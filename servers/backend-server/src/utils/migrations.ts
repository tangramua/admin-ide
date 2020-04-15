import { Schema, Connection } from 'mongoose';

export const MigrationSchema = new Schema({
    migrated_at: Date,
    name: { required: true, type: String },
});

export async function migrate(db: Connection, migrations: any[]) {
    const model = db.model('Migration', MigrationSchema);

    return Promise.all(
        migrations.map(async (migration) => {
            const exists = await model.findOne({ name: migration.constructor.name });
            if (!exists) {
                try {
                    await migration.up();
                    await model.create({ name: migration.constructor.name, migrated_at: new Date() });
                } catch (e) {
                    console.log(`Can not process migration ${migration.constructor.name}: `, e);
                }
            }

            return migration.constructor.name;
        }),
    );
}
