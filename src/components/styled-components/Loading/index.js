import React from 'react';
import { LoadWrapper, LoadingContainer, LoaderText } from './LoadingStyles';
import { FaSpinner } from 'react-icons/fa';

const Loading = ({showSpinLoader, title}) => {
  if (showSpinLoader) {
    return (
      <LoadWrapper>
        <LoadingContainer>
          <FaSpinner size='2rem' />
          <LoaderText>{title || 'Please Wait...'}</LoaderText>
        </LoadingContainer>
      </LoadWrapper>
    );
  } else {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }
};

export default Loading;