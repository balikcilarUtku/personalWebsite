import { useI18n } from '../i18n'
import avatar from '../media/aseprite.png'

export default function Bio() {
    const { t } = useI18n()
    return (
        <section>
            <h1>{t('bio.title')}</h1>
            <div>
                <img src={avatar} alt="" width={400} height={400} style={{borderRadius:12}} />
            </div>
        </section>
    )
}