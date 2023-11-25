import { User } from "firebase/auth"

export interface HeaderProps {
    handleSignOut: () => void,
    user: User | null
}