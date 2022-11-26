import React from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MdEmail, MdAccountBox, MdLock  } from 'react-icons/md';


import { SignupContainer, Column, Wrapper, Row, Title, TitleLogin, SubtitleLogin } from "./styles"
import { useForm } from 'react-hook-form';


export const Signup = () => {

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    return (
       <>
        <Header />
        <SignupContainer>
          <Column>
            <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e 
            entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin> Crie sua conta e make the change._</SubtitleLogin>
                <form>
                    <Input placeholder="Nome Completo" leftIcon={<MdAccountBox />} name="nome" control={control}/>
                    <Input placeholder="E-email" leftIcon={<MdEmail />} name="email" control={control}/>
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                </form>
            </Wrapper>
          </Column>
        </SignupContainer>
       </>
    )
}