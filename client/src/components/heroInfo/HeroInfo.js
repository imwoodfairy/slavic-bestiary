import './heroInfo.scss';
import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { motion, AnimatePresence } from 'framer-motion'


const HeroInfo = observer(() => {


    const modalVariants =
    {
        visible: { opacity: 1, },
        hidden: { opacity: 0, },
        exit: { opacity: 0 }
    }

    const { hero } = useContext(Context);

    useEffect(() => { document.body.style.overflow = hero.modalActive ? "hidden" : "unset" }, [hero.modalActive]);

    return (


        <>
            <AnimatePresence>
                {
                    hero.modalActive && (
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className='modal'
                            onClick={() => hero.setModalActive(false)}>
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
                            <span className="modal-close"
                                onClick={() => hero.setModalActive(false)}>
                                &times;
                            </span>
                        </motion.div>)

                }

            </AnimatePresence>
        </>

    )
})

export default HeroInfo;