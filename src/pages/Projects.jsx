import { useI18n } from '../i18n'

export default function Projects() {
    const { t } = useI18n()
    return(
        <section>
            <h1>{t('projects.title')}</h1>
            <p>
                {t('projects.desc')}
            </p>
        </section>
    )
}