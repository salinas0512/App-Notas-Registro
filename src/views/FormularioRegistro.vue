<script setup>
import { ref } from 'vue'

const nombre = ref('')
const correo = ref('')
const contrasena = ref('')
const repetirContrasena = ref('')

const errorNombre = ref('')
const errorCorreo = ref('')
const errorContrasena = ref('')
const errorRepetirContrasena = ref('')
const mensajeError = ref('')

function validarNombre() {
  if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.value)) {
    errorNombre.value = 'El nombre debe ser de tipo texto.'
  } else {
    errorNombre.value = ''
  }
}

function validarCorreo() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(correo.value)) {
    errorCorreo.value = 'Por favor, ingresa un correo válido.'
  } else {
    errorCorreo.value = ''
  }
}

function validarContrasena() {
  errorContrasena.value = ''
}

function validarRepetirContrasena() {
  if (repetirContrasena.value !== contrasena.value) {
    errorRepetirContrasena.value = 'Las contraseñas no coinciden.'
  } else {
    errorRepetirContrasena.value = ''
  }
}

function registrar() {
  errorNombre.value = ''
  errorCorreo.value = ''
  errorContrasena.value = ''
  errorRepetirContrasena.value = ''
  mensajeError.value = ''

  if (!nombre.value || !correo.value || !contrasena.value || !repetirContrasena.value) {
    mensajeError.value = 'Por favor, completa todos los campos.'
    return
  }

  if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.value)) {
    errorNombre.value = 'El nombre debe ser de tipo texto.'
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(correo.value)) {
    errorCorreo.value = 'Por favor, ingresa un correo válido.'
    return
  }

  if (contrasena.value !== repetirContrasena.value) {
    errorRepetirContrasena.value = 'Las contraseñas no coinciden.'
    return
  }

  alert('El registro se ha realizado correctamente.')

  nombre.value = ''
  correo.value = ''
  contrasena.value = ''
  repetirContrasena.value = ''
  errorNombre.value = ''
  errorCorreo.value = ''
  errorContrasena.value = ''
  errorRepetirContrasena.value = ''
  mensajeError.value = ''
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
      <h2>Formulario de Registro</h2>
      <form @submit.prevent="registrar">
        <div>
          <label>Nombre:</label>
          <input v-model="nombre" type="text" required @input="validarNombre" placeholder="Ej: Christopher" />
          <p v-if="errorNombre" style="color: red;">{{ errorNombre }}</p>
        </div>
        <div>
          <label>Correo:</label>
          <input v-model="correo" type="email" required @input="validarCorreo" placeholder="Ej: correo@ejemplo.com" />
          <p v-if="errorCorreo" style="color: red;">{{ errorCorreo }}</p>
        </div>
        <div>
          <label>Contraseña:</label>
          <input v-model="contrasena" type="password" required @input="validarContrasena" placeholder="Ingrese su contraseña" />
          <p v-if="errorContrasena" style="color: red;">{{ errorContrasena }}</p>
        </div>
        <div>
          <label>Repetir Contraseña:</label>
          <input v-model="repetirContrasena" type="password" required @input="validarRepetirContrasena" placeholder="Repita su contraseña" />
          <p v-if="errorRepetirContrasena" style="color: red;">{{ errorRepetirContrasena }}</p>
        </div>
        <button class="btnRegistrar" type="submit">Enviar</button>

      </form>
    </div>
</template>

<style scoped>
.btnRegistrar {
  margin-top: 15px;
  background-color: #3bbc8d;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
.btnRegistrar:hover {
  background-color: #4ed0a0;
}
.calculo-container{
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
}
</style>

