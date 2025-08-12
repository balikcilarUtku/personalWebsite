import { NavLink } from 'react-router-dom'
import { useI18n } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
    const { t } = useI18n()

    const linkstyle = ({ isActive })=> ({
        padding:'8px 10px',
        textDecoration: 'none',
        color: isActive ? '#ffcc00' : '#fff',
        background: isActive ? '#333' : 'transparent',
        borderRadius: '8px',
        transition: 'all .2s'
    })

    return (
        <header style={{
            background: '#1f0020',
            color:'#FFBD69',
            padding:'12px 16px',
            display:'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            position:'fixed',
            top:0,left: 0,right: 0,width: '99%',
            zindex:1000
            }}>
        <div style={{fontSize: 20,fontWeight:400, display: 'flex',justifyContent: 'left',fontFamily:"Bebas-Neue,sans-serif",fontStyle:'normal'}}>
            Utku Balikcilar
        </div>

        <nav style={{
            display:'flex',
            gap:'10px',
            justifyContent: 'center',
            transform: 'translateX(-15px)',
            fontWeight:400,
            fontFamily:"Bebas-Neue,sans-serif",
            fontStyle:"normal"
        }}>
            <NavLink to="/" end style={linkstyle}>{t('navbar.home')}</NavLink>
            <NavLink to="/projects" style={linkstyle}>{t('navbar.projects')}</NavLink>
            <NavLink to="/Bio" style={linkstyle}>{t('navbar.bio')}</NavLink>
        </nav>
        <div style={{ justifySelf: 'end',transform:'translateX(-20)'}}>
            <LanguageSwitcher />
        </div>
        </header>
    )
}