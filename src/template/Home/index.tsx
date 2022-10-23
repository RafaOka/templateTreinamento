import GroupComponent from 'components/TestComponent/grupoComponent';
import FriendsComponent from 'components/TestComponent/friendsComponent';
import InterestsComponent from 'components/TestComponent/interestsComponent';
import PostComponent from 'components/TestComponent/postsComponent';
import React, { useState } from 'react';
import * as S from './styles';

const HomeTemplate = () => {
    interface AllPosts {
        photoProfile: string;
        name: string;
        job: string;
        text: string;
        photo?: string;
        myPost: boolean;
    }

    const [count, setCount] = useState(0);

    const [color, setColor] = useState(false);

    const [postArray, setPost] = useState<AllPosts[]>([
        {
            photoProfile: '/assets/fotoPerfilDireita.svg',
            name: 'Nome da pessoa',
            job: 'O que ela faz',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            photo: '/assets/exemplo.png',
            myPost: false
        }
    ]);

    const [valueInput, setvalueInput] = useState('');

    const [imgInput, setImgInput] = useState(false);

    function maxCount(valor: number, input: string) {
        setCount(valor);
        setvalueInput(input);

        if (valor > 140) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    function publicacionClick() {
        if (count <= 140 && count !== 0) {
            setPost([
                {
                    photoProfile: '/assets/fotoPerfilDireita.svg',
                    name: 'Meu nome',
                    job: 'O que ela faz',
                    text: valueInput,
                    myPost: true
                },
                ...postArray
            ]);
        }
    }

    function showInput() {
        setImgInput(!imgInput);
    }

    return (
        <S.Container>
            <S.Header>
                <S.Logo>
                    <S.LogoPhoto src="/assets/logo.png" />
                </S.Logo>
                <S.Feed>
                    <S.FeedTitulo>Seu Feed</S.FeedTitulo>
                </S.Feed>
                <S.Search>
                    <S.SearchBar placeholder="Procure seus amigos" />
                </S.Search>
            </S.Header>

            <S.Main>
                <S.MainLeft>
                    <S.GroupContainer>
                        <S.GroupTitle>Seus Grupos</S.GroupTitle>
                        <GroupComponent
                            img="/assets/grupo[0].svg"
                            title="Copa do mundo"
                        />
                        <GroupComponent
                            img="/assets/grupo[1].svg"
                            title="Poli minha vida"
                        />
                        <GroupComponent
                            img="/assets/grupo[2].svg"
                            title="Nostalgia 22"
                        />
                    </S.GroupContainer>
                    <S.FriendsContainer>
                        <S.FriendsTitle>Amigos</S.FriendsTitle>
                        <FriendsComponent
                            img="/assets/fotoPerfil.svg"
                            title="Amigos B"
                            online={false}
                        />
                        <FriendsComponent
                            img="/assets/fotoPerfil.svg"
                            title="Amigos B"
                            online
                        />
                        <FriendsComponent
                            img="/assets/fotoPerfil.svg"
                            title="Amigos B"
                            online={false}
                        />
                    </S.FriendsContainer>
                </S.MainLeft>
                <S.MainCenter>
                    <S.ForYou>Para você</S.ForYou>
                    <S.Publicacion>
                        <S.PublicacionProfile>
                            <S.PublicacionId src="/assets/fotoPerfilDireita.svg" />
                            <S.PublicacionInput
                                placeholder="Sobre o que você está pensando?"
                                value={valueInput}
                                onChange={(e) =>
                                    maxCount(
                                        e.target.value.length,
                                        e.target.value
                                    )
                                }
                            />
                        </S.PublicacionProfile>
                        <S.PublicacionLine />
                        <S.PublicacionButtons>
                            <S.PublicacionImgButton onClick={() => showInput()}>
                                <S.PublicacionImg src="/assets/imagem.png" />
                            </S.PublicacionImgButton>
                            <S.InputImg
                                placeholder="Adicione uma Imagem"
                                selected={imgInput}
                            />
                            <S.PublicacionCount selected={color}>
                                {count}/140
                            </S.PublicacionCount>
                            <S.PublicacionBottom
                                onClick={() => publicacionClick()}
                            >
                                <S.PublicationTextButton>
                                    publicar
                                </S.PublicationTextButton>
                            </S.PublicacionBottom>
                        </S.PublicacionButtons>
                    </S.Publicacion>
                    <S.PublicacionContainer>
                        {postArray.map((e) => (
                            <PostComponent
                                photoProfile={e.photoProfile}
                                name={e.name}
                                job={e.job}
                                text={e.text}
                                photo={e.photo}
                                key={`${e.name}.${e.text}`}
                                myPost={e.myPost}
                            />
                        ))}
                    </S.PublicacionContainer>
                </S.MainCenter>
                <S.MainRight>
                    <S.PhotoRight src="/assets/fotoPerfilDireita.svg" />
                    <S.NameRight>Meu nome</S.NameRight>
                    <S.BottomRight>
                        <S.TextProfile>VER PERFIL</S.TextProfile>
                    </S.BottomRight>
                    <S.DescriptionProfile>
                        Essa é minha descrição lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </S.DescriptionProfile>
                    <S.MyInterestsFrame>
                        <S.MyInterestsText>Meus interesses</S.MyInterestsText>
                        <S.MyInterestsProfile>
                            <InterestsComponent title="futebol" />
                            <InterestsComponent title="filmes" />
                            <InterestsComponent title="jogos" />
                        </S.MyInterestsProfile>
                    </S.MyInterestsFrame>
                </S.MainRight>
            </S.Main>
        </S.Container>
    );
};
export default HomeTemplate;
