const { Schema, model,} = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address']
        },
        thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }
        ],
        friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    },
    {
        toJSON: {
            virtual: true,
            getters: true
    },
    id: false
 }   
);
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;