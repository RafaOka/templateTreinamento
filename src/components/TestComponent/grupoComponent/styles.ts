import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 8px;

    background-color: #edbd5f;
    margin-left: 10%;
    border-radius: 8px;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

export const Text = styled.h1`
    font-size: 16px;
    color: white;
`;
