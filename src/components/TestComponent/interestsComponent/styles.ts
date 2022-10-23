import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 10px;

    border: 1px solid #edbd5f;
    border-radius: 8px;
`;

export const Text = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #edbd5f;
    text-transform: uppercase;
`;
