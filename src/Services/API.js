import axios from "axios";

const API_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth";

function RequestLogIn(request, history, setLoading) {
    setLoading(true);
    axios.post(API_URL + "/login", request)
        .then(() => history.push("/hoje"))
        .catch(() => {
            alert("Não foi possível realizar o cadastro");
            setLoading(false);
        })
}

function RequestSignUp(request, history, setLoading) {
    setLoading(true);
    axios.post(API_URL + "/sign-up", request)
        .then(() => history.push("/"))
        .catch(() => {
            alert("Não foi possível realizar o cadastro");
            setLoading(false);
        })
}
export { RequestSignUp, RequestLogIn }