import { useState, useEffect } from 'react';
import { JokeLabel, JokeContainer, QuoteContainer } from './JokeStyles';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { fetchAJoke } from '../../../core/hooks';

const Joke = () => {
    const [joke, setJoke] = useState('fetching...');
    const [timer, setTimer] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const res = await fetchAJoke();
        setJoke(res?.joke);
        setTimeout(() => setTimer(timer+1), 15000);
        ;
        return () => {
            setTimer(0);
            setJoke('fetching...');
        }
    }, [timer]);
    
    return ( 
        <JokeContainer>
            <JokeLabel>{`Fun with programming ;)`}</JokeLabel>
            <QuoteContainer>
                <FaQuoteLeft size='2rem' /><h2>{joke}</h2><FaQuoteRight size='2rem' />
            </QuoteContainer>
        </JokeContainer>
    );
}

export default Joke;