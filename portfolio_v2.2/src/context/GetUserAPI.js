import axios from 'axios';
const url = "https://eldessouki-api.vercel.app/auth/getuser";

export let GetUserAPI = async (dispatch) => {
    dispatch(
        {
            type: "DATA_LOADING",
        }
    )
    await axios.get(url, { withCredentials: true }).then(
        res => dispatch(
            {
                type: "DATA_SUCCESS",
                user: res.data,
            }
        )
    ).catch (
            err => (
                dispatch(
                    {
                        type: "DATA_FAILURE",
                        error: err.message,
                    }
                )
            )
    )
}
