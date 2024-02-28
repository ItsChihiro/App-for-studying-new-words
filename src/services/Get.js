class Get {
    static async getWords() {
        try {
            const resp = await fetch("/api/words");
            return await resp.json();
        } catch (e) {
            console.error(e)
        }
    }
}
export default Get;





