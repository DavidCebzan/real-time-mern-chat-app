export interface IUser {
    fullName: string,
    username: string,
    password: string,
    gender: 'male' | 'female',
    profilePic?: string,
}