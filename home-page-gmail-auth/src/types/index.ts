export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture?: string;
}

export interface AuthResponse {
    accessToken: string;
    idToken: string;
    expiresIn: number;
    scope: string;
    tokenType: string;
}