import * as S from './styles';

export type FriendsComponent = {
    img: string;
    title: string;
    online: boolean;
};

const Test: React.FC<FriendsComponent> = ({ img, title, online }) => (
    <S.Container>
        <S.Icon src={img} />
        <S.Text>{title}</S.Text>
        <S.Green src={online ? '/assets/online.svg' : undefined} />
    </S.Container>
);

export default Test;
