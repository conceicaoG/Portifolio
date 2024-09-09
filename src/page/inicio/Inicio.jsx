//import React from 'react'
import * as S from "./inicio_styled"
import { VerticalAlignBottomOutlined } from '@ant-design/icons';
import Header from '../../components/Header/Header';
import { Button } from 'antd';
import curriculo from '../../assets/inicio/curriculo.pdf'
import avatar from'../../assets/inicio/avatar.png'
import gitWhite from '../../assets/inicio/githubLogoWhite.png'
import insta from '../../assets/inicio/instagramLogo.png'
import linkedin from '../../assets/inicio/linkedinLogo.png'

export default function Projeto() {
    const downloadCurriculo = () => {
        window.open(curriculo, "_blank");
      };
  return (
    <S.Main>
    <Header/>
    <S.Inicio>
        <S.Curriculo>
            <Button type="primary" onClick={downloadCurriculo}>
                <VerticalAlignBottomOutlined />
                Download CV
            </Button>
        </S.Curriculo>
        <S.BemVindo>
            <S.TextosSection>
                <p>Prazer, Sou Gabriel um desenvolvedor em crescimento constante 👨‍💻</p>
                <p className='conhecimento'>“O conhecimento é a moeda mais valiosa no mundo atual.” – Geoffrey Moore</p>
                <S.Contato>
                    <a href="https://www.instagram.com/gaab_97/" target="_blank">
                        <img src={insta} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-concei%C3%A7%C3%A3o-258017172/" target="_blank">
                        <img src={linkedin} alt="" />
                    </a>
                    <a href="https://github.com/conceicaoG" target="_blank" >
                        <img src={gitWhite} alt="" />
                    </a>
                </S.Contato>
            </S.TextosSection>
            <S.AvatarSection>
                <img src={avatar} alt="" />
            </S.AvatarSection>
        </S.BemVindo>
    </S.Inicio>
</S.Main>
  )
}
