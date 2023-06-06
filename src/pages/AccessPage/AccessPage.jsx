import styled, { keyframes, css } from "styled-components";
import Box from '@mui/material/Box';
import axios from "axios";
import Swal from "sweetalert2";
import React, { useState, useEffect, useContext } from "react";
import AccessForm from '../../components/AccessForm'
import ButtonComponent from "../../components/ButtonComponent";


export default function AccessPage(){
    return (
        <AccessContainer>
            <Box
                className="formContainer"
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                //   noValidate
                autoComplete="off"
            >
                <AccessForm 
                    id={1}  
                    label = "Email"
                    type = "email"
                />
                <AccessForm 
                    id={2}  
                    label = "Senha"
                    type = "password"
                />
                <ButtonComponent
                    textButton = "Entrar"    
                />
            </Box>
        </AccessContainer>
    )
}

const AccessContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .formContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
    }
`

