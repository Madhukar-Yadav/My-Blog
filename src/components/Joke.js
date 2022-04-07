/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { JokeLabel, JokeContainer, QuoteContainer } from 'components/styled-components/JokeStyles';
// import { fetchAJoke } from 'core/hooks';
import { fetchAJoke, getJoke } from 'redux/modules/home';

const Joke = (props) => {
    const {joke, fetchAJoke} = props;
    // const [joke, setJoke] = useState('fetching...');
    const [timer, setTimer] = useState(0);

    useEffect(async () => {
        setTimeout(() => setTimer(timer+1), 15000);
    }, [joke]);

    useEffect(async () => {
        // const res = await fetchAJoke();
        // setJoke(res?.joke);
        // setTimeout(() => setTimer(timer+1), 15000);
        // ;
        // return () => {
        //     setTimer(0);
        //     setJoke('fetching...');
        // }
        fetchAJoke();
        return () => {
            setTimer(0);
        }
    }, [timer]);
    
    return (
        <JokeContainer>
            <JokeLabel>{`<> Funny Quotes 😉 </>`}</JokeLabel>
            <QuoteContainer>
                <FaQuoteLeft size='2rem' /><h2>{joke}</h2><FaQuoteRight size='2rem' />
            </QuoteContainer>
        </JokeContainer>
    );
}

const mapStateToDrops = (state) => ({
    joke: getJoke(state),
});

export default connect(mapStateToDrops, {
    fetchAJoke
})(Joke);