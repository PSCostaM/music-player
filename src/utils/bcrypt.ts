import * as bcrypt from 'bcrypt';

export async function encodePassword(rawpassword: string) {
    const SALT = bcrypt.genSaltSync();
    return await bcrypt.hashSync(rawpassword, SALT);
}

export function comparePassword(rawpassword: string, hashedPassword: string) {
    return bcrypt.compareSync(rawpassword, hashedPassword);
}