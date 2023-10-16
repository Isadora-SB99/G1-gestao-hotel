<template>
    <main>
        <h1 class="title">QUARTOS CRUD APP</h1>

        <form @submit.prevent="addQuarto" method="post">
            <input class="input" v-model="numero" type="text" name="numero" placeholder="Enter numero quarto" />
            <input class="input" v-model="maxPessoas" type="text" name="maxPessoas" placeholder="Enter maxPessoas" />
            <input class="input" v-model="camasCasal" type="text" name="camasCasal" placeholder="Enter camasCasal" />
            <input class="input" v-model="camasSolteiro" type="text" name="camasSolteiro"
                placeholder="Enter camasSolteiro" />
            <input class="input" v-model="tamanho" type="text" name="tamanho" placeholder="Enter tamanho" />
            <input class="input" v-model="arCondicionado" type="text" name="arCondicionado"
                placeholder="Enter arCondicionado" />
            <input class="input" v-model="wifi" type="text" name="wifi" placeholder="Enter wifi" />
            <input class="input" v-model="banheira" type="text" name="banheira" placeholder="Enter banheira" />
            <input class="input" v-model="secadorCabelo" type="text" name="secadorCabelo"
                placeholder="Enter secadorCabelo" />
            <input class="input" v-model="frigobar" type="text" name="frigobar" placeholder="Enter frigobar" />
            <button type="submit" class="submit-btn">Add Quarto</button>
        </form>

        <div class="todo-wrapper">
            <h2 class="caption">Quarto List</h2>
            <div v-if="quartos.length < 1">Quarto list is empty</div>
            <ul v-else>
                <li class="todo-item" v-for="(quarto, i) in quartos" :key="quarto._id">
                    <div class="todo">
                        <h3 class="quarto-numero">{{ quarto.numero }}</h3>
                        <span class="quarto-maxPessoas">{{ quarto.maxPessoas }}</span>
                        <span class="quarto-camasCasal">{{ quarto.camasCasal }}</span>
                        <span class="quarto-camasSolteiro">{{ quarto.camasSolteiro }}</span>
                        <span class="quarto-tamanho">{{ quarto.tamanho }}</span>
                        <span class="quarto-arCondicionado">{{ quarto.arCondicionado }}</span>
                        <span class="quarto-wifi">{{ quarto.wifi }}</span>
                        <span class="quarto-banheira">{{ quarto.banheira }}</span>
                        <span class="quarto-secadorCabelo">{{ quarto.secadorCabelo }}</span>
                        <span class="quarto-frigobar">{{ quarto.frigobar }}</span>
                    </div>

                    <div class="update-form" id="updateForm">
                        <input type="text" name="updateNumero" id="updateQuarto" v-model="updateNumero" /><br />
                        <input type="text" name="updateMaxPessoas" id="updateQuarto" v-model="updateMaxPessoas" /><br />
                        <input type="text" name="updateCamasCasal" id="updateQuarto" v-model="updateCamasCasal" /><br />
                        <input type="text" name="updateCamasSolteiro" id="updateQuarto"
                            v-model="updateCamasSolteiro" /><br />
                        <input type="text" name="updateTamanho" id="updateQuarto" v-model="updateTamanho" /><br />
                        <input type="text" name="updateArCondicionado" id="updateQuarto"
                            v-model="updateArCondicionado" /><br />
                        <input type="text" name="updateWifi" id="updateQuarto" v-model="updateWifi" /><br />
                        <input type="text" name="updateBanheira" id="updateQuarto" v-model="updateBanheira" /><br />
                        <input type="text" name="updateSecadorCabelo" id="updateQuarto"
                            v-model="updateSecadorCabelo" /><br />
                        <input type="text" name="updateFrigobar" id="updateQuarto" v-model="updateFrigobar" /><br />
                    </div>

                    <div class="todo-btns">
                        <button type="button" class="edit-btn" @click="updateQuarto($event, quarto._id, i, quarto)">
                            Edit
                        </button>
                        <button type="button" class="del-btn" @click="delQuarto(quarto._id, i)">
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
    name: "Quarto",
    data() {
        return {
            numero: "",
            maxPessoas: "",
            camasCasal: "",
            camasSolteiro: "",
            tamanho: "",
            arCondicionado: "",
            wifi: "",
            banheira: "",
            secadorCabelo: "",
            frigobar: "",
            quartos: [],
            updateNumero: "",
            updateMaxPessoas: "",
            updateCamasCasal: "",
            updateCamasSolteiro: "",
            updateTamanho: "",
            updateArCondicionado: "",
            updateWifi: "",
            updateBanheira: "",
            updateSecadorCabelo: "",
            updateFrigobar: "",
        };
    },
    mounted() {
        this.getQuartos();
    },
    methods: {
        async getQuartos() {
            const res = await axios.get("/api/quartoList");
            this.quartos = res.data;
        },

        async addQuarto() {
            const res = await axios.post("api/quartoList/", {
                numero: this.numero,
                maxPessoas: this.maxPessoas,
                camasCasal: this.camasCasal,
                camasSolteiro: this.camasSolteiro,
                tamanho: this.tamanho,
                arCondicionado: this.arCondicionado,
                wifi: this.wifi,
                banheira: this.banheira,
                secadorCabelo: this.secadorCabelo,
                frigobar: this.frigobar,
            });
            this.numero = "";
            this.maxPessoas = "";
            this.camasCasal = "";
            this.camasSolteiro = "";
            this.tamanho = "";
            this.arCondicionado = "";
            this.wifi = "";
            this.banheira = "";
            this.secadorCabelo = "";
            this.frigobar = "";
        },

        async delQuarto(id) {
            await axios.delete(`api/quartoList/${id}`);
        },

        async updateQuarto(event, id, i, quarto) {
            const updateForm = document.getElementsByClassName("update-form");
            const updateFormArray = [...updateForm];
            updateFormArray.forEach(async (el) => {
                if (updateFormArray.indexOf(el) === i) {
                    if (!el.classList.contains("active")) {
                        el.classList.add("active");
                        this.updateNumero = quarto.numero;
                        this.updateMaxPessoas = quarto.maxPessoas;
                        this.updateCamasCasal = quarto.camasCasal;
                        this.updateCamasSolteiro = quarto.camasSolteiro;
                        this.updateTamanho = quarto.tamanho;
                        this.updateArCondicionado = quarto.arCondicionado;
                        this.updateWifi = quarto.wifi;
                        this.updateBanheira = quarto.banheira;
                        this.updateSecadorCabelo = quarto.secadorCabelo;
                        this.updateFrigobar = quarto.frigobar;
                        event.target.innerHTML = "Save";
                    } else {
                        const res = await axios.put(`api/quartoList/${id}`, {
                            numero: this.updateNumero,
                            maxPessoas: this.updateMaxPessoas,
                            camasCasal: this.updateCamasCasal,
                            camasSolteiro: this.updateCamasSolteiro,
                            tamanho: this.updateTamanho,
                            arCondicionado: this.updateArCondicionado,
                            wifi: this.updateWifi,
                            banheira: this.updateBanheira,
                            secadorCabelo: this.updateSecadorCabelo,
                            frigobar: this.updateFrigobar,
                        });
                        event.target.innerHTML = "Edit";
                        el.classList.remove("active");
                        this.updateNumero = "";
                        this.updateMaxPessoas = "";
                        this.updateCamasCasal = "";
                        this.updateCamasSolteiro = "";
                        this.updateTamanho = "";
                        this.updateArCondicionado = "";
                        this.updateWifi = "";
                        this.updateBanheira = "";
                        this.updateSecadorCabelo = "";
                        this.updateFrigobar = "";
                    }
                }
            });
        },
    },
    watch: {
        quartos() {
            this.getQuartos(); // Watch quartos list for any change
        },
    },
};
</script>