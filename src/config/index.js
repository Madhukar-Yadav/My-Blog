export const API = {
    'jokeApi': 'https://v2.jokeapi.dev/joke/Programming?type=single',
};
export const HeaderLinks = [
    {
        label: 'Portfolio',
        linkTo: '/my-blog'
    },
    {
        label: 'Skills',
    linkTo: '#Skills'
    }
];
export const HeaderSocialLinks = [
    {
        name: 'git',
        url: 'https://github.com/Madhukar-Yadav'
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/madhukar-yadav-44a05065/'
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/blue_beast_2992/'
    },
];
export const JSON_HEADER = {'Content-Type': 'application/json'};
export const JWT_HEADER = token => ({Authorization: `Bearer ${token}`});
