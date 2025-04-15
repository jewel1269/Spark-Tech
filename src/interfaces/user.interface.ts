/**
 * Interface representing a user
 */
export interface IUser {
    name: string;
    email: string;
    password: string;
    role: 'student' | 'teacher';
}
