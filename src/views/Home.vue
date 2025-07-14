<script setup>
</script>

<template>
  <div class="layout">
    <nav class="navbar">
      <router-link to="/home">Inicio</router-link>
      <router-link to="/calculo-notas">Cálculo de Calificaciones</router-link>
      <router-link to="/registro">Formulario de Registro</router-link>
    </nav>

    <main class="contenido">
      <div class="bienvenida">
        <h1>¡Bienvenido a mi App! 📚</h1>
        <img src="../assets/logo.svg" alt="Vue Logo" class="logo-vue" />
        <p>Explora las secciones para calcular tus calificaciones y registrar tus datos fácilmente. ¡Comencemos! 🚀</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.bienvenida {
  text-align: center;
  margin-top: 2em;
  background-color: #f4f8ff;
  padding: 2em;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.bienvenida h1 {
  font-size: 2em;
  margin-bottom: 1em;
  color: #2c3e50;
}

.logo-vue {
  width: 120px;
  margin: 1em auto;
}

.bienvenida p {
  font-size: 1.2em;
  color: #333;
  margin-top: 1em;
}
</style>


