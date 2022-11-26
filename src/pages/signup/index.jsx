import React from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MdEmail, MdAccountBox, MdLock  } from 'react-icons/md';


import { SignupContainer, Column, Wrapper, Row, Title, TitleLogin, SubtitleLogin } from "./styles"
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';


export const Signup = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const login = () => {
        navigate("/login")
    }

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
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <SubtitleLogin> 
                  o clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                </SubtitleLogin>
                <SubtitleLogin> 
                Já tenho conta. <button onClick={login}>Fazer Login</button>
                </SubtitleLogin>
            </Wrapper>
          </Column>
        </SignupContainer>
       </>
    )
}