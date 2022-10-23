import { useState } from 'react';
import * as S from './styles';

export type PostComponent = {
    photoProfile: string;
    name: string;
    job: string;
    text: string;
    photo?: string;
    myPost: boolean;
};

const Test: React.FC<PostComponent> = ({
    photoProfile,
    name,
    job,
    text,
    photo,
    myPost
}) => {
    const [colorBird, setColorBird] = useState(false);
    const [colorHeart, setColorHeart] = useState(false);
    const [colorPalmas, setColorPalmas] = useState(false);
    const [removeItens, setRemoveItens] = useState(false);

    function changeColorBird() {
        setColorBird(!colorBird);
    }

    function changeColorHeart() {
        setColorHeart(!colorHeart);
    }

    function changeColorPalmas() {
        setColorPalmas(!colorPalmas);
    }

    function remove() {
        setRemoveItens(!removeItens);
    }

    return (
        <S.Post selected={removeItens}>
            <S.Profile>
                <S.ImageProfile src={photoProfile} />
                <S.PersonalProfile>
                    <S.NameProfile>{name}</S.NameProfile>
                    <S.JobProfile>{job}</S.JobProfile>
                </S.PersonalProfile>
                <S.ButtonRemove selected={myPost} onClick={() => remove()}>
                    Excluir
                </S.ButtonRemove>
            </S.Profile>
            <S.TextPost>{text}</S.TextPost>
            <S.ImagePost src={photo} />
            <S.ReactionPost>
                <S.ButtonBird onClick={() => changeColorBird()}>
                    <S.ImageBird
                        src={
                            colorBird
                                ? '/assets/bird.svg'
                                : '/assets/birdPNG.svg'
                        }
                    />
                </S.ButtonBird>
                <S.ButtonHeart onClick={() => changeColorHeart()}>
                    <S.ImageHeart
                        src={
                            colorHeart
                                ? '/assets/heart.svg'
                                : '/assets/heartPNG.svg'
                        }
                    />
                </S.ButtonHeart>
                <S.ButtonPalmas onClick={() => changeColorPalmas()}>
                    <S.ImagePalmas
                        src={
                            colorPalmas
                                ? '/assets/palmas.svg'
                                : '/assets/palmasPNG.svg'
                        }
                    />
                </S.ButtonPalmas>
            </S.ReactionPost>
        </S.Post>
    );
};

export default Test;
