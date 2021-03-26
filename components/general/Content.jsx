import React from 'react'
import styled from '@emotion/styled';

const DivContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Content = ({ children }) => {
    return (
        <DivContent>
            { children }
        </DivContent>
    )
}

export default Content;
