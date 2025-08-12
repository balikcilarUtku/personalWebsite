import { useI18n } from '../i18n'
import avatar from '../media/aseprite.png'

export default function Bio() {
    const { t } = useI18n()
    return (
        <div className='divabi'>
            <section className='sectionBir'>
                <h1 className='Hh1'>{t('bio.title')}</h1>    
            </section>
        </div>
    )
}