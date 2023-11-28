import { LoginState } from "../interfaces/Interfaces";

export const LoginService =async (
    login: string,
    password: string
    ) : Promise<LoginState> => {

        const url = "http://localhost:8000/login";
        const options = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                login,
                password
            })
        };

        try {
            const result = await fetch(url, options);
            const data = await result.json();

            if (data.accessToken) {
                return {
                    accessToken: data.accessToken,
                    trainerId: data.trainerId,
                    codeStatus: 200
                }
            } else {
                return {
                    codeStatus: 400,
                    message: "Wrong username or password"
                }
            }

        } catch (error) {
            return {
                codeStatus: 404
            }
        }
}