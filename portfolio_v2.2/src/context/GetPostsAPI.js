import axios from 'axios';
const url = "http://localhost:8000/api/v1/posts";

export let GetPostsAPI = async (dispatch) => {
    dispatch(
        {
            type: "POSTS_LOADING",
        }
    )
    await axios.get(url).then(
        res => dispatch(
            {
                type: "POSTS_SUCCESS",
                posts: res.data,
            }
        )
    ).catch (
            err => (
                dispatch(
                    {
                        type: "POSTS_FAILURE",
                        error: err.message,
                    }
                )
            )
    )
}