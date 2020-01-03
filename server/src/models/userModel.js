import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String, 
    password: String, 
    uid: { type: Number, default: 0 }
});

userSchema.pre('save', function(next) {
    const user = this; 
    
    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, (hashErr, hashPass) => {
            if (hashErr) return next(hashErr);
            user.password = hashPass;
            next();
        });
    });
});   
userSchema.methods.comparePassword = function(password, done) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) return next(err);
        else return done(err, isMatch);  
    });
}

export default mongoose.model('user', userSchema);

