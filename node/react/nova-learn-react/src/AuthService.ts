

import axios from 'axios';
import type { LoginDto } from './dto/LoginDto';
const AUTH_BASE_URL = 'http://localhost:8080/api/auth';


export const loginApicall = async (loginDto: LoginDto) => {
    return axios.post(`${AUTH_BASE_URL}/login`, loginDto);
}

export const logoutApicall = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('loggedInUserName');
    sessionStorage.removeItem('loggedInUserRole');
}

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
}

export const getToken = () => {
    return localStorage.getItem('token');
}

export const setLoggedInUserName = (username: string) => {
    sessionStorage.setItem('loggedInUserName', username);
}

export const getLoggedInUserName = () => {
    return sessionStorage.getItem('loggedInUserName');
}

export const isLoggedIn = () => getLoggedInUserName() !== null;


export const getLoggedInUserRole = () => {
    return sessionStorage.getItem('loggedInUserRole');
}

export const setLoggedInUserNameRole = (role: string) => {
    sessionStorage.setItem('loggedInUserRole', role);
}

export const isStudent = () => {
    const role = getLoggedInUserRole();
    if (role) {
        return role.trim() === 'ROLE_STUDENT';
    }
    return false;
}

export const isTeacher = () => {
    const role = getLoggedInUserRole();
    if (role) {
        return role.trim() === 'ROLE_TEACHER';
    }
    return false;
}

export const isSiteOwner = () => {
    const role = getLoggedInUserRole();
    if (role) {
        return role.trim() === 'ROLE_SITE_OWNER';
    }
    return false;
}


