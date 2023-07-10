//CSS
import './styles.css';
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
    card: React.CSSProperties | undefined;
    titleCard: React.CSSProperties | undefined;
    buttonLogin: React.CSSProperties | undefined;
    text1: React.CSSProperties | undefined;
}


export function Home () {
    const [visible, setVisible] = useState<Boolean>(false)

    const navigate = useNavigate()

    const {
        token,
        logout
    } = useAuth()
    
    useEffect(() => {
        if (token == false) {
            navigate('/')
        }
    }, [token])

    function handleLogout() {
        logout()
    }


    return (
        <div className='container'>
            <div
                className='header-l center-l'  
            >
                <div 
                    className='button-logout center'
                    onClick={() => {handleLogout()}}
                >
                    Sair
                </div>
                <div
                    className='title-main center'
                >
                    Menu Inicial
                </div>
            </div>
            <div
                className='none center-l'
            >
                Teste
            </div>
        </div>
    )
}


const styles: CssProperties = {
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
        marginBottom: '15%',
        textAlign: 'center'
    },
    buttonLogin: {
        backgroundColor: '#0A369D',
        paddingRight: '20px',
        paddingLeft: '20px',
        paddingTop: '5px',
        paddingBottom: '5px',
        color: '#f2f2f2',
        borderRadius: '10px',
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