import { action, observable, makeAutoObservable, runInAction } from "mobx";
import Api from "../services/Api";

export default class WordsStore {
    words = [];
    isLoaded = false;
    isLoading = false;
    error = '';

    constructor() {
        makeAutoObservable(this);
    }

    loadData = async () => {
        if (this.isLoaded && this.isLoading) return;

        try {
            this.isLoading = true;
            const data = await Api.getWords();

            runInAction(() => {
                this.isLoading = false;
                this.words = data;
                this.isLoaded = true;
            });
        } catch (e) {
            this.error = e.message;
            console.error(e);
        } finally {
            this.isLoading = false;
        }
    }


    //функция добавления слова
    add = async (data) => {
        try {
            const newWord = await Api.addWord(data);
            this.words = [...this.words, newWord];
        } catch (e) {
            this.error = e.message;
            console.error(e);
        } finally {
            this.isLoading = false;
        }
    }


    //функция обновления слова
    update = async (id, data) => {
        try {
            const updatedWord = await Api.updateWord(id, data)
            this.words = this.words.map((item) => {
                if (item.id === id) {
                    return { ...item, ...updatedWord }
                }
                return item;
            })
        } catch (e) {
            this.error = e.message;
            console.error(e);
        } finally {
            this.isLoading = false;
        }
    }


    //функция удаления слова
    deleteWord = async (id) => {
        try {
            await Api.deleteWord(id);
            this.loadData();
        } catch (e) {
            this.error = e.message;
            console.error(e);
        } finally {
            this.isLoading = false;
        }
    }

}