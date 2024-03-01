class Api {
    static async getWords() {
        const resp = await fetch("http://itgirlschool.justmakeit.ru/api/words");
        if (resp.ok) { //Проверяем, что код ответа 200
            return await resp.json();
        } else {
            throw new Error('Failed to fetch data...');
        }
    }


    static async getIdWord(id) {
        const resp = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}`);
        if (resp.ok) { //Проверяем, что код ответа 200
            return await resp.json();
        } else {
            throw new Error('Failed to fetch data...');
        }
    }


    static async addWord(id, data) {
        data = {
            id: state.id,
            english: state.english,
            transcription: state.transcription,
            russian: state.russian,
            tags: state.tags,
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const resp = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/add`, options);
        if (resp.ok) { //Проверяем, что код ответа 200
            // return await resp.json();
            return data;
        } else {
            throw new Error('Failed to fetch data...');
        }
    }


    static async updateWord(id, data) {
        data = {
            english: data.wordValue,
            transcription: data.transcriptionValue,
            russian: data.translationValue,
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const resp = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, options);
        if (resp.ok) { //Проверяем, что код ответа 200
            // return await resp.json();
            return data;
        } else {
            throw new Error('Failed to fetch data...');
        }
    }


    static async deleteWord(id) {
        console.log(id)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const resp = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, options);
        if (resp.ok) { //Проверяем, что код ответа 200
            return await resp.json();
        } else {
            throw new Error('Failed to fetch data...');
        }
    }
}
export default Api;





