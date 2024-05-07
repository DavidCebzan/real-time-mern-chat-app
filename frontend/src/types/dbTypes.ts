export type User = {
    _id: string,
    fullName: string,
    username: string,
    gender: 'male' | 'female',
    profilePic: string,
}

export type Message = {
    _id: string,
    senderId: string,
    recieverId: string,
    message: string,
    createdAt?: string,
    updatedAt?: string,
}
