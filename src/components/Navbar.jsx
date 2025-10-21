import { Link } from 'react-scroll' 
import { useI18n } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'
import './Navbar.css'

export default function Navbar() {
  const { t } = useI18n()

  return (
    <header className="navbar-header">
      <div className="navbar-brand">
        Utku Balikcilar
      </div>

      <nav className="navbar-nav">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" activeClass="active">{t('navbar.home')}</Link>
        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" activeClass="active">{t('navbar.projects')}</Link>
        <Link to="bio" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" activeClass="active">{t('navbar.bio')}</Link>
        <Link to="iletisim" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" activeClass="active">{t('navbar.iletisim')}</Link>
        <Link to="cv" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" activeClass="active">{t('navbar.cv')}</Link>
      </nav>

      <div className="language-switcher-container">
        <LanguageSwitcher />
      </div>
    </header>
  )
}