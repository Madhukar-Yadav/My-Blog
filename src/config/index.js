export const API = {
    'jokeApi': 'https://v2.jokeapi.dev/joke/Programming?type=single',
};

export const JSON_HEADER = {'Content-Type': 'application/json'};
export const JWT_HEADER = token => ({Authorization: `Bearer ${token}`});
