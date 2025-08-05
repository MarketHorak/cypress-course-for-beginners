<template>
    <div class="login-container">
        <div class="login-header">
            <h1 data-testid="page-title">Login</h1>
            <p class="subtitle">Access your account</p>
        </div>

        <form @submit.prevent="handleLogin" data-testid="login-form" class="login-form">
            <div class="form-group">
                <label for="login-email">Email</label>
                <input data-testid="login-email-input" id="login-email" type="email" v-model="credentials.email"
                    placeholder="e.g., jane.doe@example.com" required />
            </div>

            <div class="form-group">
                <label for="login-password">Password</label>
                <input data-testid="login-password-input" id="login-password" type="password"
                    v-model="credentials.password" placeholder="Enter your password" required />
            </div>

            <div class="form-actions">
                <button data-testid="login-submit-button" type="submit" class="submit-button">Login</button>
            </div>
        </form>

        <div data-testid="login-result" class="result-card" v-if="loginSuccessful">
            <h2>Login Successful</h2>
            <p data-testid="result-email">Welcome back, <strong>{{ submittedEmail }}</strong>!</p>
        </div>

        <div class="login-footer">
            <p>Don't have an account? <router-link to="/registration">Register here</router-link></p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const credentials = ref({
    email: '',
    password: ''
});

const loginSuccessful = ref(false);
const submittedEmail = ref('');

const router = useRouter();

function handleLogin() {
    // Basic validation for demo
    if (credentials.value.email && credentials.value.password) {
        loginSuccessful.value = true;
        submittedEmail.value = credentials.value.email;

        // In a real app, you'd have authentication logic here
        console.log('Login attempt with:', credentials.value);

        // Reset form
        credentials.value.email = '';
        credentials.value.password = '';
    }
}
</script>

<style scoped>
:root {
    --primary-color: #4a90e2;
    --primary-color-dark: #357abd;
    --background-color: #f7f9fc;
    --surface-color: #ffffff;
    --text-color: #333;
    --text-color-light: #555;
    --border-color: #e0e0e0;
    --border-radius: 8px;
    --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
}

.login-container {
    font-family: var(--font-family);
    width: 100%;
    max-width: 450px;
    margin: 4rem auto;
    padding: 3rem;
    background-color: var(--surface-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.login-header {
    text-align: center;
    margin-bottom: 2.5rem;
}

.login-header h1 {
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.1rem;
    color: var(--text-color-light);
    margin-top: 0;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-color);
    font-size: 0.9rem;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    box-sizing: border-box;
    font-size: 1rem;
    font-family: var(--font-family);
    transition: border-color 0.2s, box-shadow 0.2s;
    color: var(--text-color);
    background-color: #fff;
}

input[type="email"]:focus,
input[type="password"]:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
}

.form-actions {
    margin-top: 1rem;
    display: flex;
}

.submit-button {
    width: 100%;
    padding: 0.9rem 2.5rem;
    background-color: var(--primary-color);
    color: white;
    font-size: 1rem;
    font-weight: 600;
    background-color: #333;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
}

.submit-button:hover {
    background-color: var(--primary-color-dark);
    transform: translateY(-2px);
    background-color: #555;
}

.submit-button:active {
    transform: translateY(0);
}

.result-card {
    margin-top: 2rem;
    padding: 2rem;
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    animation: fadeIn 0.5s ease-out;
    text-align: center;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(15px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.result-card h2 {
    color: var(--text-color);
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
}

.result-card p {
    font-size: 1.1rem;
    color: var(--text-color-light);
}

.result-card strong {
    font-weight: 600;
    color: var(--text-color);
}

.login-footer {
    margin-top: 2rem;
    text-align: center;
    color: var(--text-color-light);
}

.login-footer a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
}

.login-footer a:hover {
    text-decoration: underline;
}
</style>
