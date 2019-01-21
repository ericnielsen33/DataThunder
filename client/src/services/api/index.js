import axios from "axios";
const AUTH_URL = "http://localhost:5000/api/auth";
export async function login(email, password) {
    const response = await axios.post(`${AUTH_URL}/login`, {
        email,
        password
    });
    const token = response.headers.authorization;
    const user = response.data;
    return ({ token, user })
}

export async function registerNewUser(email, firstName, lastName, password) {
    const response = await axios.post(
        `${AUTH_URL}/register`,
        {
            newUser: {
                email,
                firstName,
                lastName,
                password
            }
        }
    );

    const token = response.headers.authorization;
    const user = response.data;
    return ({ token, user });
}