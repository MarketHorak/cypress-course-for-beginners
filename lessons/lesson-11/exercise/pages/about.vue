<template>
  <div class="about-container">
    <h1>About Us</h1>

    <section class="mission">
      <h2>Our Mission</h2>
      <p>{{ mission }}</p>
    </section>

    <section class="team">
      <h2>Our Team</h2>
      <div class="team-grid">
        <div v-for="member in team" :key="member.id" class="team-member" :id="`${member.id}`"
          :data-testid="`team-member`">
          <h3 data-testid="member-name">{{ member.name }}</h3>
          <p data-testid="member-role">{{ member.role }}</p>
          <p data-testid="member-description">{{ member.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const mission = ref('We are dedicated to providing high-quality testing education to developers worldwide. Our goal is to make testing accessible, understandable, and enjoyable for everyone.');

const team = ref([
  {
    id: 1,
    name: 'Jane Smith',
    role: 'Lead Instructor',
    description: '10+ years of testing experience, specializing in E2E testing.'
  },
  {
    id: 2,
    name: 'Mike Johnson',
    role: 'Course Developer',
    description: 'Expert in test automation and CI/CD practices.'
  },
  {
    id: 3,
    name: 'Anna Brown',
    role: 'Technical Mentor',
    description: 'Passionate about helping students master testing concepts.'
  }
]);
</script>

<style scoped>
.about-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.mission {
  margin: 2rem 0;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.team-member {
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>