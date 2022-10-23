import styled from 'styled-components';

interface RemovePost {
    selected?: boolean;
}

export const Post = styled.div<RemovePost>`
    display: ${({ selected }) => (selected ? 'none' : 'flex')};
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 32px;
    gap: 16px;

    background: #f4f2ee;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    //padding: 8px 16px;
    gap: 24px;
`;

export const ImageProfile = styled.img`
    width: 40px;
    height: 40px;
`;

export const JobProfile = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    display: flex;
    align-items: flex-end;
    letter-spacing: 0.5px;

    color: #949494;
`;

export const NameProfile = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;

    color: #322c1e;
`;

export const PersonalProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
`;

interface ControleButton {
    selected?: boolean;
}

export const ButtonRemove = styled.button<ControleButton>`
    display: ${({ selected }) => (selected ? 'flex' : 'none')};

    width: 64px;
    height: 24px;

    color: white;
    background-color: #edbd5f;
    border: 0px;

    font-size: 16px;
    border-radius: 8px;

    align-items: center;
    justify-content: center;
`;

export const TextPost = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    display: flex;
    align-items: flex-end;
    letter-spacing: 0.5px;
`;

export const ImagePost = styled.img`
    width: 100%;
    height: 100%;
`;

export const ReactionPost = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    //padding: 0px 16px;
    gap: 32px;
`;

export const ButtonBird = styled.button`
    border: 0px solid black;
`;

export const ImageBird = styled.img``;

export const ButtonHeart = styled.button`
    border: 0px solid black;
`;

export const ImageHeart = styled.img``;

export const ButtonPalmas = styled.button`
    border: 0px solid black;
`;

export const ImagePalmas = styled.img``;
