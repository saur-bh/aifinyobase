// URL for login
const loginUrl = 'https://stagqa.billodev.net/app/auth';

// URL to fetch headers from after login
const targetUrl = 'https://stagqa.billodev.net/app/beta';

// Login credentials
const username = 'saurabh.verma@aifinyo.de';
const password = 'welcome123';

// Data to be sent for login
const loginData = {
    username: username,
    password: password
};

// Options for the fetch request
const fetchOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' // Specify the content type
    },
    body: JSON.stringify(loginData) // Convert data to JSON string
};

// Perform login
fetch(loginUrl, fetchOptions)
    .then(response => {
        // Check if login was successful
        if (response.ok) {
            // Make a request to the target URL after login
            return fetch(targetUrl);
        } else {
            throw new Error('Login failed');
        }
    })
    .then(targetResponse => {
        // Retrieve headers from the target response
        const headers = targetResponse.headers;

        // Convert headers to an object for easier access
        const headersObject = {};
        headers.forEach((value, key) => {
            headersObject[key] = value;
        });

        // Print headers or do any further processing
        console.log('Headers after login:', headersObject);
    })
    .catch(error => {
        console.error(error);
    });
