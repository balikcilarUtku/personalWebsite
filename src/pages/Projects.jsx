import { useI18n } from '../i18n'
import './Home.css'

export default function Projects() {
    const { t } = useI18n()
    return(
        <div className='divabi'>
            <section className='sectionBir'>
                <h1 className='Hh1'>{t('projects.title')}</h1>
                    <p>
                    </p>
            </section>
        </div>
    )
}