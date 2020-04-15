import { Schema } from 'mongoose';

export const RegistrySchema = new Schema({
    credentials: Schema.Types.Mixed,
    url: { type: String, requierd: true },
    name: { type: String, requierd: true },
    owner_id: { type: String, required: true },
    is_public: { type: Boolean, default: false },
});

export const RegistryModelFunc = db => db.model('MonocularRegistry', RegistrySchema);
