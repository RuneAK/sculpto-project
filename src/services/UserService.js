export const userService = {
    login,
    logout,
    getToken
};

function login(username, password) {
    console.log('login called')
    var proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ username: username, password: password })
    };

    return fetch(proxyUrl+'https://api.sculpto.dk/auth/login/', requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
        
}

function logout() {
    if(localStorage.getItem('user')){
        localStorage.removeItem('user');
        return true;
    } else {
        return false;
    }
        
}

function handleResponse(response) {
    console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    }).catch( e => {
        return;
    });
}

function getToken(){
    const user =  JSON.parse(localStorage.getItem('user'));
    if(user){
        console.log(user.token);
        return user.token;
    }   
}