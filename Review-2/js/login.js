/* General Reset and Base Styling */
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    margin: 0;
    padding: 0;
}

/* Container Styling */
.container {
    max-width: 500px;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 50px auto;
}

/* Headings */
h2 {
    font-size: 2rem;
    color: #444;
    text-align: center;
    margin-bottom: 20px;
}

/* Input Fields */
form .form-control {
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 10px;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
}

form .form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Labels */
form .form-label {
    font-weight: bold;
    margin-bottom: 5px;
}

/* Buttons */
.btn-primary {
    background: linear-gradient(45deg, #007bff, #0056b3);
    border: none;
    padding: 10px 15px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 25px;
    transition: all 0.3s ease-in-out;
    color: #fff;
}

.btn-primary:hover {
    background: linear-gradient(45deg, #0056b3, #003f7f);
    transform: scale(1.05);
}

/* Error Messages */
.invalid-feedback {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: 5px;
}

/* Form Spacing */
form .mb-3 {
    margin-bottom: 1.5rem;
}

/* Footer Link */
footer {
    text-align: center;
    margin-top: 20px;
    font-size: 0.9rem;
}

footer a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}

footer a:hover {
    text-decoration: underline;
}
