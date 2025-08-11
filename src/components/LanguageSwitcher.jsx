import { useI18n } from '../i18n'

export default function LanguageSwitcher(){
    const { lang, setLang } = useI18n()
    return (
        <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        style={{ background:'#2b2e4a', color:'#fff', borderRadius:8, padding:'6px 8px', border:'1px solid #444' }}
        >
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
        </select>
    )
}