const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            let jsonRes = await response.json();
            if(jsonRes.errors) {
                alert(jsonRes.errors[0].message);
            } else if (jsonRes.message) {
                alert(jsonRes.message);
            }
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);