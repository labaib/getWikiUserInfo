/**
* Ottieni informazioni utente da sessione Wikidata
* @param {string} endpoint - Istanza wiki ["www.wikidata.org"]
* @returns {Object|null} - Ritorna una stringa o null
*/

// Verifica stato di autenticazione
const getWikiUserInfo = async (endpoint) => {

    // Parametri URL
    const params = new URLSearchParams({
        action: "query",
        meta: "userinfo",
        format: "json"
    });

    try {
        const proxy = "https://cors-proxy.readinmonkey.workers.dev/?url="
        const url = `https://${endpoint}/w/api.php?${params.toString()}`
        const response = await fetch(proxy+url);
        const data = await response.json();

        if (data.query?.userinfo) {
            return data.query.userinfo
        } else {
            return null
        }

    } catch (error) {
        console.error("Errore durante la verifica dello stato di login:", error);
        return null
    }
}

export { getWikiUserInfo };
