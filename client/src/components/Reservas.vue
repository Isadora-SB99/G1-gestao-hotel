<template>
  <main>
    <h1 class="title">MEVN CRUD APP</h1>

      <form @submit.prevent="addReserva" method="post">
        <input class="input" v-model="cpfCliente" type="text" name="cpfCliente" placeholder="Enter cpfCliente" />
        <input class="input" v-model="dataCheckin" type="date" name="dataCheckin" placeholder="Enter dataCheckin" />
        <input class="input" v-model="dataCheckout" type="date" name="dataCheckout" placeholder="Enter dataCheckout" />
        <input class="input" v-model="numQuarto" type="text" name="numQuarto" placeholder="Enter numQuarto" />
        <button type="submit" class="submit-btn">Add Reserva</button>
      </form>
      <div class="todo-wrapper">
        <h2 class="caption">Reserva List</h2>
        <div v-if="reservas.length < 1">Reserva list is empty</div>
        <ul v-else>
          <li class="todo-item" v-for="(reserva, i) in reservas" :key="reserva._id">
            <div class="todo">
              <h3 class="reserva-cpfCliente">{{ reserva.cpfCliente }}</h3>
              <span class="reserva-dataCheckin">{{ reserva.dataCheckin }}</span>
              <span class="reserva-dataCheckout">{{ reserva.dataCheckout }}</span>
              <span class="reserva-numQuarto">{{ reserva.numQuarto }}</span>
            </div>

            <div class="update-form" id="updateForm">

              <input type="text" name="updateCpfCliente" id="updateReserva" placeholder="cpfCliente" v-model="updateCpfCliente" /><br />
              <input type="text" name="updateDataCheckin" id="updateReserva" placeholder="dataCheckin" v-model="updateDataCheckin" /><br />
              <input type="text" name="updateDataCheckout" id="updateReserva" placeholder="dataCheckout" v-model="updateDataCheckout" /><br />
              <input type="text" name="updateNumQuarto" id="updateReserva" placeholder="numQuarto" v-model="updateNumQuarto" /><br />

            </div>
            <div class="todo-btns">
              <button type="button" class="edit-btn" @click="updateReserva($event, reserva._id, i, reserva)">
                Edit
              </button>
              <button type="button" class="del-btn" @click="delReserva(reserva._id, i)">
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
  name: "Reserva",
  data() {
    return {
      cpfCliente: "",
      dataCheckin: "",
      dataCheckout: "",
      numQuarto: "",
      reservas: [],
      updateCpfCliente: "",
      updateDataCheckin: "",
      updateDataCheckout: "",
      updateNumQuarto: "",
    };
  },
  mounted() {
    this.getReservas();
  },
  methods: {
    async getReservas() {
      const res = await axios.get("/api/reservaList");
      this.reservas = res.data;
    },

    async addReserva() {
      const res = await axios.post("api/reservaList/", {
        cpfCliente: this.cpfCliente,
        dataCheckin: this.dataCheckin,
        dataCheckout: this.dataCheckout,
        numQuarto: this.numQuarto,
      });
      this.cpfCliente = "";
      this.dataCheckin = "";
      this.dataCheckout = "";
      this.numQuarto = "";
    },

    async delReserva(id) {
      await axios.delete(`api/reservaList/${id}`);
    },

    async updateReserva(event, id, i, reserva) {
      const updateForm = document.getElementsByClassName("update-form");
      const updateFormArray = [...updateForm];
      updateFormArray.forEach(async (el) => {
        if (updateFormArray.indexOf(el) === i) {
          if (!el.classList.contains("active")) {
            el.classList.add("active");
            this.updateCpfCliente = reserva.cpfCliente;
            this.updateDataCheckin = reserva.dataCheckin;
            this.updateDataCheckout = reserva.dataCheckout;
            this.updateNumQuarto = reserva.numQuarto;
            event.target.innerHTML = "Save";
          } else {
            const res = await axios.put(`api/reservaList/${id}`, {
              cpfCliente: this.updateCpfCliente,
              dataCheckin: this.updateDataCheckin,
              dataCheckout: this.updateDataCheckout,
              numQuarto: this.updateNumQuarto,
            });
            event.target.innerHTML = "Edit";
            el.classList.remove("active");
            this.updateCpfCliente = "";
            this.updateDataCheckin = "";
            this.updateDataCheckout = "";
            this.updateNumQuarto = "";
          }
        }
      });
    },
  },
  watch: {
    reservas() {
      this.getReservas(); // Watch reservas list for any change
    },
  },
};
</script>
