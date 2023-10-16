<template>
    <main>
        <h1 class="title">MEVN CRUD APP</h1>
  
        <form @submit.prevent="addCliente" method="post">
            <input class="input" v-model="nome" type="text" name="nome" placeholder="Enter nome" />
            <input class="input" v-model="email" type="text" name="email" placeholder="Enter email" />
            <input class="input" v-model="cpf" type="text" name="cpf" placeholder="Enter cpf" />
            <input class="input" v-model="rg" type="text" name="rg" placeholder="Enter rg" />
            <input class="input" v-model="telefone" type="text" name="telefone" placeholder="Enter telefone" />
            <input class="input" v-model="infoAdicionais" type="text" name="infosAdicionais" placeholder="Enter infosAdicionais" />
            <button type="submit" class="submit-btn">Add Cliente</button>
        </form>
        <div class="todo-wrapper">
            <h2 class="caption">Cliente List</h2>
            <div v-if="clientes.length < 1">Cliente list is empty</div>
            <ul v-else>
                <li class="todo-item" v-for="(cliente, i) in clientes" :key="cliente._id">
                    <div class="todo">
                        <h3 class="cliente-nome">{{ cliente.nome }}</h3>
                        <span class="cliente-email">{{ cliente.email }}</span>
                        <span class="cliente-cpf">{{ cliente.cpf }}</span>
                        <span class="cliente-rg">{{ cliente.rg }}</span>
                        <span class="cliente-telefone">{{ cliente.telefone }}</span>
                        <span class="cliente-infosAdicionais">{{ cliente.infosAdicionais }}</span>
                    </div>
  
                    <div class="update-form" id="updateForm">
                        <input type="text" name="updateNome" id="updateCliente" v-model="updateNome" /><br />
                        <input type="text" name="updateEmail" id="updateCliente" v-model="updateEmail" /><br />
                        <input type="text" name="updateCpf" id="updateCliente" v-model="updateCpf" /><br />
                        <input type="text" name="updateRg" id="updateCliente" v-model="updateRg" /><br />
                        <input type="text" name="updateTelefone" id="updateCliente" v-model="updateTelefone" /><br />
                        <input type="text" name="updateInfoAdicionais" id="updateCliente" v-model="updateInfoAdicionais" /><br />
                    </div>
                    <div class="todo-btns">
                        <button type="button" class="edit-btn" @click="updateCliente($event, cliente._id, i, cliente)">
                            Edit
                        </button>
                        <button type="button" class="del-btn" @click="delCliente(cliente._id, i)">
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
    name: "Cadastro",
    data() {
        return {
            nome: "",
            email: "",
            cpf: "",
            rg: "",
            telefone: "",
            infoAdicionais: "",
            clientes: [],
            updateNome: "",
            updateEmail: "",
            updateCpf: "",
            updateRg: "",
            updateTelefone: "",
            updateInfosAdicionais: "",
        };
    },
    mounted() {
        this.getClientes();
    },
    methods: {
        async getClientes() {
            const res = await axios.get("/api/clienteList");
            this.clientes = res.data;
        },
  
        async addCliente() {
            const res = await axios.post("api/clienteList/", {
                nome: this.nome,
                email: this.email,
                cpf: this.cpf,
                rg: this.rg,
                telefone: this.telefone,
                infosAdicionais: this.infosAdicionais,
            });
            this.nome = "";
            this.email = "";
            this.cpf = "";
            this.rg = "";
            this.telefone = "";
            this.infosAdicionais = "";
        },
  
        async delCliente(id) {
            await axios.delete(`api/clienteList/${id}`);
        },
  
        async updateCliente(event, id, i, cliente) {
            const updateForm = document.getElementsByClassName("update-form");
            const updateFormArray = [...updateForm];
            updateFormArray.forEach(async (el) => {
                if (updateFormArray.indexOf(el) === i) {
                    if (!el.classList.contains("active")) {
                        el.classList.add("active");
                        this.updateNome = cliente.nome;
                        this.updateEmail = cliente.email;
                        this.updateCpf = cliente.cpf;
                        this.updateRg = cliente.rg;
                        this.updateTelefone = cliente.telefone;
                        this.updateInfosAdicionais = cliente.infosAdicionais;
                        event.target.innerHTML = "Save";
                    } else {
                        const res = await axios.put(`api/clienteList/${id}`, {
                            nome: this.updateNome,
                            email: this.updateEmail,
                            cpf: this.updateCpf,
                            rg: this.updateRg,
                            telefone: this.updateTelefone,
                            infosAdicionais: this.updateInfosAdicionais,
                        });
                        event.target.innerHTML = "Edit";
                        el.classList.remove("active");
                        this.updateNome = "";
                        this.updateEmail = "";
                        this.updateCpf = "";
                        this.updateRg = "";
                        this.updateTelefone = "";
                        this.updateInfosAdicionais = "";
                    }
                }
            });
        },
    },
    watch: {
        clientes() {
            this.getClientes(); // Watch clientes list for any change
        },
    },
  };
  </script>
  