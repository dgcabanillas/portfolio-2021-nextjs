import React from 'react';
import styled from '@emotion/styled';

const DivContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 80px 0 30px;
`;

const Container = ({ children }) => {
    return (
        <DivContainer>
            { children }
        </DivContainer>
    )
}

export default Container;
