import axios from 'axios';
axios.defaults.baseURL = process.env.APP_URL || `https://peaceful-plateau-96606.herokuapp.com`
class adminconnect {
    async login (code){
        let response = await axios.post(`/admin`, {code: code});
        return response.data;
    }
    
    async getAllJokes(){
        const response = await axios.get(`/admin/alljokes`);
        return response.data;
    }

    async getUserJokes(){
        const response = await axios.get(`/admin/userjokes`);
        return response.data;
    }

    async editJoke(joke){ 
        let response = await axios.put(`/admin/${joke._id}`, {joke: joke.joke, nsfw: joke.nsfw} );
        return response.data;
    }

    async addJoke(joke){
        let response = await axios.post(`/admin/addjoke`, {joke: joke.joke, nsfw: joke.nsfw, author: joke.author} );
        return response.data;
    }

    async deleteJoke(joke){
        let response = await axios.delete(`/admin/${joke._id}`);
        return response.data;
    }


    async unreacttoJoke(id,reaction){ 
        console.log("Client: " + reaction); 
        let response = await axios.put(`/joke/${id}/${reaction}/unreact`, {jokeId: id, reaction: reaction } );
        return response.data;
    }

    async reportJoke(id,comment){ 
        console.log(id, comment);
        let response = await axios.post(`/joke/${id}/report/${comment}`, {jokeId: id, comment: comment} );
        return response.data;
    }
    
    async sendJoke(name,joke,nsfw){ 
        console.log(name,joke,nsfw);
        let response = await axios.post(`/userjoke/${name}/${joke}/${nsfw}`, {name: name, joke: joke, nsfw:nsfw});
        return response.data;
    }
}

export default new adminconnect();