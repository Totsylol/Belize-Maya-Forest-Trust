const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    user_id: { type: String, required: true },
    user_name: { type: String, required: true },
    first_name: { type: String, maxlength: 50 },
    last_name: { type: String, maxlength: 50 },
    email: { type: String, required: true, unique: true, match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'] },
    password_hash: { type: String, required: true },
    verification_status: { type: Boolean, default: false },
    verification_token: { type: String },
    reset_token: { type: String },
    preferences: { type: Map, of: Schema.Types.Mixed, default: {} }, 
    joined_date: { type: Date, default: () => new Date().toISOString() },
});

userSchema.methods.serialize = function() {
    return {
        user_id: this.user_id,
        user_name: this.user_name,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        verification_status: this.verification_status,
        verification_token: this.verification_token,
        reset_token: this.reset_token,
        preferences: Object.fromEntries(this.preferences),
        joined_date: this.joined_date ? this.joined_date.toISOString() : null,
    };
};

module.exports = mongoose.model('User', userSchema);