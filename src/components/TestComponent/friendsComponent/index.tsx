import * as S from './styles';

export type FriendsComponent = {
    img: string;
    title: string;
    online: boolean;
};

const Test: React.FC<FriendsComponent> = ({ img, title, online }) => {
    return (
        <S.Container>
            <S.Icon src={img} />
            <S.Text>{title}</S.Text>
            <S.Green
                src={online ? '/assets/online.svg' : '/assets/offline.png'}
            />
        </S.Container>
    );
};

export default Test;
