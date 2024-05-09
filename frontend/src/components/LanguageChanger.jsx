import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const changeLanguage = (lng) => {
        localStorage.setItem('i18nextLng', lng);
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <div className="dropdown">
                <div
                    tabIndex={0}
                    role="button"
                    className="py-1 px-3 text-[0.7rem] phone:text-[0.9rem] tablet:text-[1.1rem] cursor-pointer  z-10  border-none text-opacity-100 text-black bg-white bg-opacity-70   rounded-xl active:scale-95"
                >
                    {t('language')}
                </div>
                <ul
                    tabIndex={0}
                    className="mt-2 shadow menu dropdown-content w-full z-[1] text-[0.7rem] phone:text-[0.9rem] tablet:text-[1.1rem] cursor-pointer border-none bg-white bg-opacity-70  text-black text-center transition-all duration-200  rounded-xl active:scale-95 "
                >
                    <li className='mb-1 hover:text-gray-600' onClick={() => { changeLanguage('en'); document.getElementById('languageChanged').showModal() } }> 

                        {t('english')}

                    </li>
                    <li className='hover:text-gray-600' onClick={() => { changeLanguage('es'); document.getElementById('languageChanged').showModal() }}>

                        {t('spanish')}

                    </li>
                </ul>
            </div>

        </div>
    );
}