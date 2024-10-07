import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useUser } from "../../hooks/UserContext";
import LoginImg from "../../assets/login-image.svg";
import Logo from "../../assets/logo.svg"
import Button from "../../components/Button";
import api from "../../services/api";
import { Container, LoginImage, ContainerItens, Label, Input, SignInLink, ErrorMessage } from "./styles"

function Login() {
    const { putUserData } = useUser()


    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail valido").required("O e-mail é obrigatório"),
        password: Yup.string().required("A senha é obrigatória").min(6, "Senha no mínimo 6 dígitos"),
    });


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = async (clientData) => {
        try {
            const { data } = await toast.promise(
                api.post("/session", {
                    email: clientData.email,
                    password: clientData.password
                }),

                {
                    pending: "Verificando seus dados 🔄",
                    success: "Seja bem-vindo(a)! ✅",
                    error: "Verifique seu email e senha 🤯"

                }

            );

            putUserData(data)
            /*console.log()*/
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            <LoginImage src={LoginImg} alt="login-image" />
            <ContainerItens>
                <img src={Logo} alt="logo-code-burger" />
                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password"
                        {...register("password")} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type="submit" style={{ marginTop: 20, marginBottom: 10 }}>Sign In</Button>
                </form>

                <SignInLink>
                    Não possui conta? <i>Sign Up</i>
                </SignInLink>
            </ContainerItens>
        </Container>

    )
}

export default Login;






