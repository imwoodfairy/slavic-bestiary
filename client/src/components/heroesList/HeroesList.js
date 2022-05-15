import './heroesList.scss';
import { useEffect, useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { fetchHeroes, fetchTypes } from '../../http/heroesApi';



const HeroesList = observer(() => {


    const [offset, setOffset] = useState(6);
    const { hero } = useContext(Context);


    useEffect(() => {
        fetchTypes().then(data => hero.setCaterogies(data));
    }, [])


    useEffect(() => {
        onRequest(6)
    }, [hero.selectedCategory.id])


    const onRequest = (offset) => {
        fetchHeroes(hero.selectedCategory.id, offset).then(data => hero.setHeroes(data.rows))
        setOffset(offset + 6)
    }



    return (
        <>
            <section className="heroes" id="heroes">
                <div className="container">
                    <ul className="heroes__heroes-list heroes-list">
                        {hero.heroes.map(item =>
                            <li className="heroes-list__item item"
                                key={item.id}
                                onClick={() => { hero.setSelectedHero(item); hero.setModalActive(true) }}>
                                <div className="item__photo">
                                    <img src={process.env.REACT_APP_API_URL + item.img} alt={item.alt} />
                                </div>
                                <div className="item__descr descr">
                                    <div className="descr__name">
                                        {item.name}
                                    </div>
                                    <div className="descr__category">
                                        {hero.categories[item.categoryId - 1].name}
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                    <button className="heroes__btn" onClick={() => { onRequest(offset); }}>Загрузить еще</button>
                </div>
            </section >
        </>
    )
})

export default HeroesList;