import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 16px;
    color: black;
`;

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    background-color: #ffffff;
    //overflow-y: auto;
`;

export const Header = styled.div`
    height: 100px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    //justify-content: center;
    //gap: 384px;
    background-color: #fafafa;
    padding: 16px 32px;
`;

export const Logo = styled.div`
    //width: 10%;
    background-color: #fafafa;
`;

export const LogoPhoto = styled.img`
    //width: 60%;
`;

export const Feed = styled.div`
    display: flex;
`;

export const FeedTitulo = styled.h1`
    font-family: 'Poppins';
    font-size: 28px;

    color: #322c1e;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20%;
    height: 64px;

    padding: 0px 0px;
`;

export const SearchBar = styled.input`
    width: 100%;
    height: 64%;
    padding-left: 24px;

    border: 1px solid #949494;
    border-radius: 32px;
`;

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 32px;

    width: 100%;
    height: 980px;
    padding: 12px 24px 12px 24px;

    overflow-y: auto;
`;

export const MainLeft = styled.div`
    width: 20%;
    height: 100%;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fafafa;
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const GroupContainer = styled.div`
    width: 80%;
    height: 40%;

    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    gap: 1.74%;
`;

export const GroupTitle = styled.h1`
    margin-left: 12.5%;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;

    color: #000000;
`;

export const FriendsContainer = styled.div`
    width: 80%;
    height: 60%;

    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    gap: 1.74%;
`;

export const FriendsTitle = styled.h1`
    margin-left: 12.5%;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;

    color: #000000;
`;

export const MainRight = styled.div`
    width: 21%;
    height: 100%;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fafafa;
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3%;
    padding-bottom: 3%;
    gap: 1.74%;

    overflow: auto;
`;

export const PhotoRight = styled.img`
    width: 32%;
    height: 19%;
`;

export const NameRight = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;

    color: #322c1e;
`;

export const BottomRight = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 10px;
    border: 0cm;

    background: #edbd5f;
    border-radius: 8px;
`;

export const TextProfile = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: white;
`;

export const DescriptionProfile = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    text-align: center;
    letter-spacing: 0.5px;

    padding-top: 8px;
    padding-left: 12px;
    padding-right: 12px;
`;

export const MyInterestsText = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;

    display: flex;
    align-items: flex-end;

    color: #322c1e;
`;

export const MyInterestsProfile = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 8px;
`;

export const MyInterestsFrame = styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
`;

export const MainCenter = styled.div`
    display: flex;
    flex-direction: column;
    width: 56%;
    height: 100%;

    padding-left: 16px;
    padding-right: 16px;
    padding-top: 24px;
    gap: 16px;

    background-color: #fafafa;
    border-radius: 16px 16px 0px 0px;

    overflow: auto;
`;

export const ForYou = styled.text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;

    color: #322c1e;
`;

export const Publicacion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: flex-start;
    padding: 16px 32px;
    gap: 16px;

    width: 100%;

    background-color: #f4f2ee;
    border-radius: 16px;
`;

export const PublicacionProfile = styled.div`
    display: flex;
    flex-direction: row;

    gap: 24px;
`;

export const PublicacionId = styled.img`
    width: 40px;
    height: 40px;
`;

export const PublicacionInput = styled.input`
    width: 86%;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 32px;
    gap: 10px;

    border: 1px solid #545454;
    border-radius: 32px;

    background-color: #f4f2ee;
`;

export const PublicacionLine = styled.div`
    width: 100%;
    height: 0%;

    border: 1px solid #949494;
`;

export const PublicacionButtons = styled.div`
    display: flex;
    justify-content: space-between;
`;

interface DecisionImg {
    selected?: boolean;
}

export const InputImg = styled.input<DecisionImg>`
    display: ${({ selected }) => (selected ? 'flex' : 'none')};
    width: 40%;

    flex-direction: row;
    align-items: center;
    padding: 16px 32px;
    gap: 10px;

    border: 1px solid #545454;
    border-radius: 32px;

    background-color: #f4f2ee;
`;

export const PublicacionImgButton = styled.button`
    border: 0cm;
`;

export const PublicacionImg = styled.img``;

export const PublicacionBottom = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 12px;

    background: #edbd5f;

    border: 1px solid #ffffff;
    border-radius: 8px;
`;

export const PublicationTextButton = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;

    text-transform: uppercase;

    color: white;
`;

interface DecisionText {
    selected?: boolean;
}

export const PublicacionCount = styled.p<DecisionText>`
    color: ${({ selected }) => (selected ? 'red' : 'black')};
`;

export const PublicacionContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    //overflow-y: auto;
    gap: 32px;
`;
