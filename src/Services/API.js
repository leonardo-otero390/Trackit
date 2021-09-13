import axios from "axios";

const API_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";
const LOGIN_URL = API_URL + "/auth/login";
const SIGNUP_URL = API_URL + "/auth/sign-up";
const HABITS_URL = API_URL + "/habits";

function RequestDeleteHabit(HabitId,token,setHabits) {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    axios.delete(HABITS_URL + HabitId, config).then(()=>RequestHabits(setHabits, token))

}
function RequestHabits(setHabits, token) {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    axios.get(HABITS_URL, config).then(response => { setHabits(response.data) })
}
function RequestLogIn(request, history, setFunctions) {
    const { setLoading, setUserData } = setFunctions;
    setLoading(true);
    axios.post(LOGIN_URL, request)
        .then((res) => {
            setUserData(res.data);
            history.push("/hoje");
        })
        .catch(() => {
            alert("Não foi possível conectar");
            setLoading(false);
        })
}

function RequestSignUp(request, history, setLoading) {
    setLoading(true);
    axios.post(SIGNUP_URL, request)
        .then(() => history.push("/"))
        .catch(() => {
            alert("Não foi possível realizar o cadastro");
            setLoading(false);
        })
}
export { RequestSignUp, RequestLogIn, RequestHabits, RequestDeleteHabit }