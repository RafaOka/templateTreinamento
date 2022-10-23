import * as S from './styles';

export type InterestsComponent = {
    title: string;
};

const Test: React.FC<InterestsComponent> = ({ title }) => (
    <S.Container>
        <S.Text>{title}</S.Text>
    </S.Container>
);

export default Test;
