import { useState, useEffect } from 'react';
import { JokeLabel, JokeContainer, QuoteContainer } from './JokeStyles';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { API, JSON_HEADER } from '../../../config';

const Meme = () => {
    const [joke, setJoke] = useState('fetching...');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const config = {
            method: 'GET',
            mode: 'cors',
            headers: Object.assign({}, JSON_HEADER),
            cache: 'default',
        };
        const res = await fetch(API.jokeApi, config)
        .then(response => response.json());
        setJoke(res?.joke);
    }, []);
    
    return ( 
        <JokeContainer>
            <JokeLabel>{`Fun with programming ;)`}</JokeLabel>
            <QuoteContainer>
                <FaQuoteLeft size='2rem' /><h2>{joke}</h2><FaQuoteRight size='2rem' />
            </QuoteContainer>
        </JokeContainer>
    );
}

export default Meme;