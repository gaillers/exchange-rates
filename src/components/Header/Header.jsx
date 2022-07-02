import React from 'react';
import styled from 'styled-components';
import ExchangeRates from '../../api/ExchangeRates';

const Header = () => {
  return (
    <HeaderBar>
        <ExchangeRates/>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '5px 30px',
  minHeight: 80,
  backgroundColor: 'white',
});

