export interface UserStateTypes {
    token: string | null,
    userInfo: IUser
    roleType: string
    userBtn: any[]
}

export interface IUser {
    [key: string]: any
}
