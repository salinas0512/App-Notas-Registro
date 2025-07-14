
<script setup>
import { ref } from 'vue'

const nota1 = ref(null)
const nota2 = ref(null)
const nota3 = ref(null)
const asistencia = ref(null)
const resultado = ref('')





function calcular() {
  // Validar rangos
  if (
    nota1.value < 10 || nota1.value > 70 ||
    nota2.value < 10 || nota2.value > 70 ||
    nota3.value < 10 || nota3.value > 70 ||
    asistencia.value < 0 || asistencia.value > 100
  ) {
    resultado.value = '⚠️ Verifica que los valores ingresados estén dentro del rango permitido.'
    return
  }

  // Cálculo de notas ponderado
  const promedio = (nota1.value * 0.35) + (nota2.value * 0.35) + (nota3.value * 0.30)

  if (promedio >= 40 && asistencia.value >= 80) {
    resultado.value = `✅ Aprobado con promedio ${promedio.toFixed(2)}`
  } else {
    resultado.value = `❌ Reprobado con promedio ${promedio.toFixed(2)}`
  }
}
</script>

<template>
     <div class="layout">
     <nav class="navbar">
      <router-link to="/home">Inicio</router-link>
      <router-link to="/calculo-notas">Cálculo de Calificaciones</router-link>
      <router-link to="/registro">Formulario de Registro</router-link>
    </nav>
    </div>
  <div class="calculo-container">
    <h2>Cálculo de Calificaciones</h2>

    <form @submit.prevent="calcular">
      <div>
        <label>Nota 1:</label>
        <input v-model.number="nota1" type="number" min="10" max="70" required placeholder="Ingrese la Nota 1" />
      </div>
      <div>
        <label>Nota 2:</label>
        <input v-model.number="nota2" type="number" min="10" max="70" required placeholder="Ingrese la Nota 2" />
      </div>
      <div>
        <label>Nota 3:</label>
        <input v-model.number="nota3" type="number" min="10" max="70" required placeholder="Ingrese la Nota 3" />
      </div>
      <div>
        <label>Asistencia (%):</label>
        <input v-model.number="asistencia" type="number" min="0" max="100" required placeholder="Ingrese la Asistencia" />
      </div>

      <button class="btnCalcular" type="submit">Calcular</button>
      
    </form>

    <div v-if="resultado !== ''" class="resultado">
      <p><strong>Resultado:</strong> {{ resultado }}</p>
    </div>
  </div>
</template>

<style scoped>
.resultado {
  margin-top: 15px;
}
.btnCalcular {
  margin-top: 15px;
  background-color: #1c83f1;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btnCalcular:hover {
  background-color: #4ba0fb;
}
.calculo-container{
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
}
h2 {
  text-align: center;
}

</style>
