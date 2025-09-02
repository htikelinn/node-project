export type RegisterDto = {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;   
    qualifications?: string[]; 
    education?: string; 
}