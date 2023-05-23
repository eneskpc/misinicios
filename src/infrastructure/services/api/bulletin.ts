const ENDPOINT = "https://nesine-case-study.onrender.com";
const STORE = "COMPETITIONS";

export default {
  getAllCompetitions: async () => {
    try {
      const competitionsInJSON = localStorage.getItem(STORE);
      if (competitionsInJSON) {
        return JSON.parse(competitionsInJSON);
      }
      const response = await fetch(`${ENDPOINT}/bets`);
      const JSONresponse = await response.json();
      localStorage.setItem(STORE, JSON.stringify(JSONresponse));
      return JSONresponse;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  },
};
