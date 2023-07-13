import axios from 'axios';
const url = "http://localhost:8000/api/v1/posts";

export let PostPostsAPI = async (post) => {
    await axios.post(
        url,
        post
    ).then (
        res => {
            console.log(res.data);
        }
    ).catch (
        res => {
            console.log(res.response.data.errors);
        }
    )
   
}

