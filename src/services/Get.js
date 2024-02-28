class Get {
    static async getWords() {
        const resp = await fetch("http://itgirlschool.justmakeit.ru/api/words");
        if (resp.ok) { //Проверяем, что код ответа 200
            return await resp.json();
        } else {
            throw new Error('Something went wrong ...');
        }
    }
}
export default Get;





