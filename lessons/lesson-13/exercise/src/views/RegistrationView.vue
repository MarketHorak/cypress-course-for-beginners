<template>
  <div class="registration-container">
    <div class="registration-header">
      <h1 data-testid="page-title">User Registration</h1>
      <p class="subtitle">Create your account to get started</p>
    </div>

    <form @submit.prevent="handleRegistration" data-testid="registration-form" class="registration-form">
      <div class="form-grid">
        <div class="form-group">
          <label for="reg-name">Name</label>
          <input data-testid="reg-name-input" id="reg-name" type="text" v-model="user.name" placeholder="e.g., Jane Doe"
            required />
        </div>

        <div class="form-group">
          <label for="reg-email">Email</label>
          <input data-testid="reg-email-input" id="reg-email" type="email" v-model="user.email"
            placeholder="e.g., jane.doe@example.com" required />
        </div>

        <div class="form-group">
          <label for="reg-role">Role</label>
          <select data-testid="reg-role-select" id="reg-role" v-model="user.role" required>
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>

        <div class="form-group">
          <label for="reg-address">Address</label>
          <input data-testid="reg-address-input" id="reg-address" type="text" v-model="user.address"
            placeholder="e.g., 123 Main St, Anytown" required />
        </div>

        <div class="form-group interests-group">
          <label>Interests</label>
          <div class="checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" value="technology" v-model="user.interests" data-testid="reg-interest-tech" />
              <span class="checkbox-text">Technology</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="design" v-model="user.interests" data-testid="reg-interest-design" />
              <span class="checkbox-text">Design</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" value="music" v-model="user.interests" data-testid="reg-interest-music" />
              <span class="checkbox-text">Music</span>
            </label>
          </div>
        </div>

        <div class="form-group subscription-group">
          <label>Subscription</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" value="monthly" v-model="user.subscription" data-testid="reg-subscription-monthly" />
              <span class="radio-text">Monthly</span>
            </label>
            <label class="radio-label">
              <input type="radio" value="yearly" v-model="user.subscription" data-testid="reg-subscription-yearly" />
              <span class="radio-text">Yearly</span>
            </label>
          </div>
        </div>

        <div class="form-group avatar-group">
          <label for="reg-avatar">Avatar</label>
          <div class="avatar-container">
            <div class="avatar-upload">
              <input type="file" id="reg-avatar" data-testid="reg-avatar-upload" accept="image/*"
                @change="handleFileUpload" />
              <label for="reg-avatar" class="avatar-button">Choose File</label>
              <span class="file-name">{{ user.avatar || 'No file chosen' }}</span>
            </div>
            <div class="avatar-preview" v-if="avatarURL">
              <img :src="avatarURL" alt="Avatar Preview" data-testid="reg-avatar-preview" />
            </div>
          </div>
        </div>
      </div>

      <div class="form-actions">
        <button data-testid="reg-submit-button" type="submit" class="submit-button">Register</button>
      </div>
    </form>

    <div data-testid="reg-result" class="result-card" v-if="registrationComplete">
      <h2>Registration Complete</h2>
      <div class="result-content">
        <div class="result-avatar">
          <img v-if="avatarURL" :src="avatarURL" alt="Avatar" />
          <div v-else class="avatar-placeholder">No Avatar</div>
        </div>
        <div class="result-details">
          <p data-testid="result-name"><strong>Name:</strong> {{ user.name }}</p>
          <p data-testid="result-email"><strong>Email:</strong> {{ user.email }}</p>
          <p data-testid="result-role"><strong>Role:</strong> {{ user.role }}</p>
          <p data-testid="result-interests"><strong>Interests:</strong> {{ user.interests.join(', ') || 'None selected'
          }}</p>
          <p data-testid="result-subscription"><strong>Subscription:</strong> {{ user.subscription || 'Not selected' }}
          </p>
          <p data-testid="result-address"><strong>Address:</strong> {{ user.address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const user = ref({
  name: '',
  email: '',
  role: '',
  interests: [],
  subscription: '',
  avatar: '',
  address: ''
});
const registrationComplete = ref(false);
const avatarURL = ref(null);

function handleRegistration() {
  // For demo purposes, assume registration is successful if all required fields are provided
  if (user.value.name && user.value.email && user.value.role && user.value.address) {
    registrationComplete.value = true;
    // Scroll to the result section
    setTimeout(() => {
      document.querySelector('.result-card')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    avatarURL.value = URL.createObjectURL(file);
    user.value.avatar = file.name; // Store file name for display purposes
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

.registration-container {
  font-family: var(--font-family);
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
  padding: 3rem;
  background-color: var(--surface-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.registration-header {
  text-align: center;
  margin-bottom: 3rem;
}

.registration-header h1 {
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

.registration-form {
  display: flex;
  flex-direction: column;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.75rem 2.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
}

.interests-group,
.subscription-group,
.avatar-group {
  grid-column: 1 / -1;
}

label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
  font-size: 0.9rem;
}

input[type="text"],
input[type="email"],
select {
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

input[type="text"]:focus,
input[type="email"]:focus,
select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 3rem;
}

.checkbox-group,
.radio-group {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.25rem;
}

.checkbox-label,
.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
}

.checkbox-text,
.radio-text {
  margin-left: 0.5rem;
}

input[type="checkbox"],
input[type="radio"] {
  margin: 0;
  width: 1.15em;
  height: 1.15em;
  accent-color: var(--primary-color);
}

.avatar-container {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.avatar-upload {
  flex: 1;
  display: flex;
  align-items: center;
}

.avatar-upload input[type="file"] {
  display: none;
}

.avatar-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #ccc;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.2s;
  margin-right: 1rem;
  font-weight: 500;
}

.avatar-button:hover {
  background-color: #e1e6eb;
}

.file-name {
  color: var(--text-color-light);
  font-size: 0.9rem;
}

.avatar-preview {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--border-color);
}

.avatar-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-actions {
  margin-top: 2.5rem;
  display: flex;
  justify-content: flex-end;
}

.submit-button {
  padding: 0.9rem 2.5rem;
  background-color: var(--primary-color);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  background-color: #333;
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
  margin-top: 3rem;
  padding: 2.5rem;
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  animation: fadeIn 0.5s ease-out;
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
  margin: 0 0 2rem 0;
  text-align: center;
  font-size: 1.75rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1.5rem;
}

.result-content {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.result-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--surface-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.result-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background-color: var(--border-color);
  color: var(--text-color-light);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
}

.result-details {
  flex: 1;
}

.result-details p {
  margin: 0.8rem 0;
  font-size: 1rem;
  color: var(--text-color-light);
  display: flex;
}

.result-details strong {
  color: var(--text-color);
  font-weight: 500;
  width: 120px;
  flex-shrink: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .registration-container {
    padding: 2rem;
    margin: 1rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .result-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .result-details p {
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }
}
</style>
