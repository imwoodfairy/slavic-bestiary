import './heroInfo.scss';
import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { CSSTransition } from 'react-transition-group';

const HeroInfo = observer(() => {



    const { hero } = useContext(Context);

    useEffect(() => { document.body.style.overflow = hero.modalActive ? "hidden" : "unset" }, [hero.modalActive]);

    return (
        <CSSTransition in={hero.modalActive} classNames='my-node' timeout={5000} unmountOnExit>

            <div className={hero.modalActive ? 'modal opened' : 'modal'}
                onClick={() => hero.setModalActive(false)}>

                <CSSTransition in={hero.modalActive} classNames='my-node' timeout={5000} unmountOnExit>
                    <div className='hero-info'
                        onClick={(e) => e.stopPropagation()}>

                        <div className='hero-info__photo'>
                            <img src={process.env.REACT_APP_API_URL + hero.selectedHero.img}
                                alt={hero.selectedHero.alt} />
                        </div>
                        <div className='hero-info__descr'>
                            <h2> {hero.selectedHero.name}</h2>
                            {hero.selectedHero.description}
                        </div>
                    </div>
                </CSSTransition>

                <span className="modal-close"
                    onClick={() => hero.setModalActive(false)}>
                    &times;
                </span>
            </div>
        </CSSTransition>
    )
})

export default HeroInfo;