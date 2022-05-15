import { makeAutoObservable } from 'mobx';


export default class HeroStore {
    constructor() {

        this._categories = [];
        this._heroes = [];



        this._selectedHero = {};
        this._selectedCategory = {};
        this._modalActive = false;

        makeAutoObservable(this);
    }

    setSelectedCategory(category) {
        this._selectedCategory = category;
    }

    setSelectedHero(selectedHero) {
        this._selectedHero = selectedHero;
    }

    setModalActive(modalActive) {
        this._modalActive = modalActive;
    }

    setCaterogies(categories) {
        this._categories = categories;
    }

    setHeroes(heroes) {
        this._heroes = heroes;
    }





    get categories() {
        return this._categories;
    }

    get heroes() {
        return this._heroes;
    }

    get selectedCategory() {
        return this._selectedCategory;
    }

    get selectedHero() {
        return this._selectedHero;
    }



    get modalActive() {
        return this._modalActive
    }


}
