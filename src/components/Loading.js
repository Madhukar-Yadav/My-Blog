import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { LoadWrapper, LoadingContainer, LoaderText } from 'components/styled-components/LoadingStyles';

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