export interface UserStateTypes {
    token: string | null,
    userInfo: IUser
}

export interface IUser {
    [key: string]: any
}
