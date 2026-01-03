import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const NewsFetch = async () => {
    try {
        const response = await axios.get(
            `https://newsapi.org/v2/everything?q=tesla&from=2025-12-02&sortBy=publishedAt&apiKey=${API_KEY}`
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};


export const TechNewsFetch = async () => {
    try{
      const response=await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`);
      console.log(response.data);
    }catch (e) {
        console.error(e);
        return null;
    }
};



