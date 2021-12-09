const keyToken = 'TOKEN';
let token = null;

async function loadToken() {
    try {
        const value = sessionStorage.getItem(keyToken);
        if (value !== null && value !== undefined) {
            DataLocal.token = value.toString();
        } else {
            DataLocal.token = null;
        }
    } catch(e) {
        console.log(e);
        DataLocal.token = null;
    }
}

async function saveToken(data) {
    try {
        return sessionStorage.setItem(keyToken, data.toString());
    } catch (e) {
        console.log(e);
        return false;
    }
}


const DataLocal = {

    saveToken,
    loadToken,

    token,
};

export default DataLocal;