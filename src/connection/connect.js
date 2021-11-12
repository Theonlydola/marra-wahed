import axios from 'axios';

class connect {
    async getJoke(nsfwflag){
        const response = await axios.get(`/${nsfwflag}/joke`, {flag: nsfwflag});
        return response.data;
    }

    async reacttoJoke(id,reaction){ 
        console.log("Client: " + reaction); 
        let response = await axios.put(`/joke/${id}/${reaction}`, {jokeId: id, reaction: reaction } );
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

export default new connect();