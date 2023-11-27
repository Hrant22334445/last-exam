import { User } from "firebase/auth"

export interface BoardsProps {
    handleSignOut: () => void,
    user: User | null

}