import * as S from './styles';

export type GroupComponent = {
    img: string;
    title: string;
};

const Test: React.FC<GroupComponent> = ({ img, title }) => {
    return (
        <S.Container>
            <S.Icon src={img} />
            <S.Text>{title}</S.Text>
        </S.Container>
    );
};

export default Test;
