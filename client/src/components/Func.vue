<template>
    <main>
      <h1 class="title">MEVN CRUD APP</h1>
  
        <form @submit.prevent="addFunc" method="post">
          <input class="input" v-model="usuario" type="text" name="usuario" placeholder="Enter usuario" />
          <input class="input" v-model="senha" type="password" name="senha" placeholder="Enter senha" />
          <button type="submit" class="submit-btn">Add Func</button>
        </form>
        <div class="todo-wrapper">
          <h2 class="caption">Func List</h2>
          <div v-if="funcs.length < 1">Func list is empty</div>
          <ul v-else>
            <li class="todo-item" v-for="(func, i) in funcs" :key="func._id">
              <div class="todo">
                <h3 class="func-usuario">{{ func.usuario }}</h3>
                <span class="func-senha">{{ func.senha }}</span>
              </div>
  
              <div class="update-form" id="updateForm">
                <input type="text" name="updateUsuario" id="updateFunc" v-model="updateUsuario" />
                <br />
                <input type="text" name="updateSenha" id="updateFunc" v-model="updateSenha" />
              </div>
              <div class="todo-btns">
                <button type="button" class="edit-btn" @click="updateFunc($event, func._id, i, func)">
                  Edit
                </button>
                <button type="button" class="del-btn" @click="delFunc(func._id, i)">
                  Delete
                </button>
              </div>
            </li>
          </ul>
        </div>
  
    </main>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Func",
    data() {
      return {
        usuario: "",
        senha: "",
        funcs: [],
        updateUsuario: "",
        updateSenha: "",
      };
    },
    mounted() {
      this.getFuncs();
    },
    methods: {
      async getFuncs() {
        const res = await axios.get("/api/funcList");
        this.funcs = res.data;
      },
  
      async addFunc() {
        const res = await axios.post("api/funcList/", {
          usuario: this.usuario,
          senha: this.senha,
        });
        this.usuario = "";
        this.senha = "";
      },
  
      async delFunc(id) {
        await axios.delete(`api/funcList/${id}`);
      },
  
      async updateFunc(event, id, i, func) {
        const updateForm = document.getElementsByClassName("update-form");
        const updateFormArray = [...updateForm];
        updateFormArray.forEach(async (el) => {
          if (updateFormArray.indexOf(el) === i) {
            if (!el.classList.contains("active")) {
              el.classList.add("active");
              this.updateUsuario = func.usuario;
              this.updateSenha = func.senha;
              event.target.innerHTML = "Save";
            } else {
              const res = await axios.put(`api/funcList/${id}`, {
                usuario: this.updateUsuario,
                senha: this.updateSenha,
              });
              event.target.innerHTML = "Edit";
              el.classList.remove("active");
              this.updateUsuario = "";
              this.updateSenha = "";
            }
          }
        });
      },
    },
    watch: {
      funcs() {
        this.getFuncs(); // Watch funcs list for any change
      },
    },
  };
  </script>
  