import axios from "axios";

const API_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

function RequestSignUp(request,history,setLoading) {
    setLoading(true);
    axios.post(API_URL,request)
    .then(()=>history.push("/"))
    .catch(()=> {
        alert("Não foi possível realizar o cadastro");
        setLoading(false);
    })
}
export { RequestSignUp}