import './appFilters.scss';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useRef } from 'react';
import { Context } from '../..';


const AppFilters = observer(() => {

    const itemRefs = useRef([]);
    const { hero } = useContext(Context);

    useEffect(() => {
        hero.setSelectedCategory(false);
    }, [])

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('active'));
        itemRefs.current[id].classList.add('active');
        itemRefs.current[id].focus();
    }

    const toggleCategory = (category, i) => {
        if (!hero.selectedCategory || hero.selectedCategory.id !== category.id) {
            hero.setSelectedCategory(category);
            focusOnItem(i)
        } else {
            hero.setSelectedCategory(false);
            itemRefs.current.forEach(item => item.classList.remove('active'));
        }
    }

    return (
        <section className="heroes-filters">
            <div className='container'>
                <ul className="heroes-filters__btns">
                    {hero.categories.map((category, i) =>
                        <li
                            className='filter-btn'
                            ref={el => itemRefs.current[i] = el}
                            onClick={() => { toggleCategory(category, i) }}
                            key={category.id}>
                            {category.name}
                        </li>)}
                </ul>
            </div>

        </section>
    )
})

export default AppFilters;