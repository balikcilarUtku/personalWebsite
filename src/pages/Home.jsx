import { useI18n } from '../i18n'
import './Home.css'

export default function Home() {
    const { t } = useI18n()
    return (
        <div className='divabi'>
            <section className='sectionBir'>
                <h1 className='Hh1'>{t('home.title')}</h1>
                    <p>
                        {t('home.desc')}
                    </p>
            </section>
        </div>    
    )

}