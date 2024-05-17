import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        localStorage.setItem('i18nextLng', lng);
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <div className="dropdown dropdown-end">
                <div
                    tabIndex={0}
                    role="button"
                    className=" hover:text-emerald-500 cursor-pointer mt-2"
                >
                    <span className="material-symbols-outlined">
                        translate
                    </span>
                </div>
                <ul
                    tabIndex={0}
                    className="mt-2 menu dropdown-content z-[1] cursor-pointer bg-gray-600 rounded-lg "
                >
                    <li className='mb-1 text-white text-lg hover:text-emerald-500' onClick={() => { changeLanguage("en"); document.getElementById('languageChanged').showModal() }}>

                        {t('english')}

                    </li>
                    <li className='text-white text-lg hover:text-emerald-500' onClick={() => { changeLanguage("es"); document.getElementById('languageChanged').showModal() }}>

                        {t('spanish')}

                    </li>
                </ul>
            </div>

        </div>
    );
}