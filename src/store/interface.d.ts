import { UserStateTypes } from "./modules/user/interface";

export default interface RootStateTypes { }

export interface AllStateTypes extends RootStateTypes {
    user: UserStateTypes
}
