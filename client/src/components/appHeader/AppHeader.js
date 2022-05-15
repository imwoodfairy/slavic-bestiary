import './appHeader.scss';
import AppLogo from '../appLogo/AppLogo';
import { Link, animateScroll as scroll } from "react-scroll";


const AppHeader = () => {
    return (

        <div className="main-page">

            <header className="main-page__header header">
                <div className="container">
                    <div className='header__wrapper'>
                        <div className="header__logo">
                            <AppLogo />
                        </div>
                        <nav className="header__menu menu">
                            <ul>
                                <li className="menu__item"><a href="#heroes">Персонажи</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>


            <section className="main-page__banner banner">
                <div className="container">
                    <div className="banner__description">
                        Мифологические представления древних славян — настоящий кладезь мудрости наших предков. Это не
                        только дохристианские божества, но также представления о космосе и земле, о природе и ее законах, о
                        жизни зверей и птиц, о человеческой судьбе, о домашнем очаге, его устройстве и украшении, об одежде,
                        утвари и т. п. Славянская мифология — отражение знаний, выработанных столетиями, а быть может, и
                        тысячелетиями человеческой практики. Для того, чтобы узнать больше о персонаже, нажмите на него. Чтобы сбросить выбранную категорию, кликните по ней еще раз.
                    </div>
                    <a className="banner__btn" href="#heroes">Попробовать!</a>
                </div>
            </section>
        </div>
    )
}

export default AppHeader;