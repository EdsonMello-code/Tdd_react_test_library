import React from 'react';
import { text } from '../../__tests__/ladingPage.test';

// import { Container } from './styles';

const LadingPage: React.FC = () => {
  return (
    <div>
      <img src="" alt="Pessoa" />
      <div title="titleRight">
        <p data-testid="paragam">{text}</p>
      </div>
    </div>
  );
};

export default LadingPage;
