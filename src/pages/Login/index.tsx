//DEFAULTS
import React, {
    useEffect, 
    useState
} from 'react';
//ROUTES
import {
    Route,
    Link,
    useNavigate
} from 'react-router-dom';
//COMPONENTS
import { Card } from '../../components/Card';
import { TextInput } from '../../components/TextInput';
//CONTEXTS
import { useAuth } from '../../contexts/AuthContext';

interface CssProperties {
    container: React.CSSProperties | undefined;
    leftPage: React.CSSProperties | undefined;
    rightPage: React.CSSProperties | undefined;
    card: React.CSSProperties | undefined;
    titleCard: React.CSSProperties | undefined;
    buttonLogin: React.CSSProperties | undefined;
    text1: React.CSSProperties | undefined;
}


export function Login () {
    const [visible, setVisible] = useState<Boolean>(false)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate();

    const {
        token,
        login
    } = useAuth()

    function handleLogin() {
        login({ email, password })
    }

    useEffect(() => {
        if (token != false) {
            navigate('/home')
        }
        if (token == false) {
            setVisible(true)
        }
    }, [token])


    return (
        <>
            {visible ?
                <div style={styles.container}>
                    <form style={styles.card}>
                        <div style={styles.titleCard}>Bem vindo à Integração WhatsTalk! { token }</div>
                        <div>
                            <div style={styles.text1}>Email</div>
                            <TextInput 
                                value={email} 
                                onChange={setEmail} 
                                width={'100%'}
                                />
                        </div>
                        <div>
                            <div style={styles.text1}>Senha</div>
                            <TextInput 
                                value={password} 
                                onChange={setPassword} 
                                width={'100%'}
                                typeInput={'password'} 
                            />
                        </div>

                        <div onClick={handleLogin} style={styles.buttonLogin}>Entrar</div>
                    </form>
                </div>
                :
                <div>Loading...</div>
            }
        </>
    )
}


const styles: CssProperties = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh'
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '70%',
        height: '60%',
        borderRadius: '20px',
        background: '#CFDEE7',
    },
    titleCard: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#2f2f2f',
        marginBottom: '10%',
        textAlign: 'center'
    },
    buttonLogin: {
        backgroundColor: '#0A369D',
        paddingRight: '20px',
        paddingLeft: '20px',
        paddingTop: '5px',
        paddingBottom: '5px',
        color: '#f2f2f2',
        borderRadius: '5px',
        textDecoration: 'unset',
        fontSize: '14px'

    },
    text1: {
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#2f2f2f',
        margin: 0,
        padding: 0,
        lineHeight: '10px'
    }
}