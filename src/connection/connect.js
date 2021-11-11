import axios from 'axios';

class connect {
    async getJoke(nsfwflag){
        const response = await axios.get(`http://localhost:5000/${nsfwflag}/joke`, {flag: nsfwflag});
        return response.data;
    }

    async reacttoJoke(id,reaction){ 
        console.log("Client: " + reaction); 
        let response = await axios.put(`http://localhost:5000/joke/${id}/${reaction}`, {jokeId: id, reaction: reaction } );
        return response.data;
    }

    async unreacttoJoke(id,reaction){ 
        console.log("Client: " + reaction); 
        let response = await axios.put(`http://localhost:5000/joke/${id}/${reaction}/unreact`, {jokeId: id, reaction: reaction } );
        return response.data;
    }

    async reportJoke(id,comment){ 
        console.log(id, comment);
        let response = await axios.post(`http://localhost:5000/joke/${id}/report/${comment}`, {jokeId: id, comment: comment} );
        return response.data;
    }
    
    async sendJoke(name,joke,nsfw){ 
        console.log(name,joke,nsfw);
        let response = await axios.post(`http://localhost:5000/userjoke/${name}/${joke}/${nsfw}`, {name: name, joke: joke, nsfw:nsfw});
        return response.data;
    }
}

export default new connect();