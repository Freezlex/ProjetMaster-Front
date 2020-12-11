<template>
  <div class="top-frame">
    <h1>Outil de création</h1>
  </div>

  <div v-if="type === null">
    <p>Sélectionnez le type d'élément que vous souhaitez enregistrer. </p>
    <select v-model="type">
      <option disabled value="">Choisissez</option>
      <option>discipline</option>
      <option>spécialiste</option>
      <option>localisation</option>
      <option>document</option>
    </select>
  </div>
<!--  CREATION D'UN ELEMENT DISCIPLINE -->
  <div class="choice" v-else-if="type === 'discipline'">
      <label>Intitulé de la discipline :
        <input type="text" ref="discipline_string"/>
      </label>
    <div class="action-button">
      <button class="btn save" onsubmit="this.event.preventDefault();" @click="saveDiscipline()">Enregistrer</button>
      <button class="btn cancel" @click="cancel">Annuler</button>
    </div>

  </div>

<!--  CREATION D'UN ELEMENT SPECIALISTE -->
  <div class="choice" v-else-if="type === 'spécialiste'">
    <label>Nom du spécialiste : <input type="text" ref="specialist_name"/></label>
    <label>N° de téléphone du spécialiste : <input type="number" ref="specialist_phone"/></label>
    <label>Adresse mail du spécialiste : <input type="email" ref="specialist_email"/></label>
    <label>Discipline
    <select v-model="specialist_discipline" @click="getDisciplines">
      <option disabled value="">Sélectionnez une discipline</option>
      <option v-for="discipline in disciplines" :key="discipline.id" v-bind:value="discipline.id">{{ discipline.intitule }}</option>
    </select></label>
    <div class="action-button">
      <button class="btn save" onsubmit="this.event.preventDefault();" @click="saveSpecialist()">Enregistrer</button>
      <button class="btn cancel" @click="cancel">Annuler</button>
    </div>

  </div>

<!--  CREATION D'UN ELEMENT LOCALISATION -->
  <div class="choice" v-else-if="type === 'localisation'">
    <h2>Enregistrement d'un nouveau centre d'archive</h2>
    <label>Nom du centre d'archive :<input type="text" ref="localisation_name"/></label>
    <label>Ville du centre d'archive :<input type="text" ref="localisation_ville"/></label>
    <label>Code postal du centre d'archive :<input type="number" ref="localisation_code_postal"/></label>
    <label>N° de téléphone du centre d'archive :<input type="text" ref="localisation_telephone"/></label>
    <label>Adresse du centre d'archive :<input type="text" ref="localisation_adresse"/></label>
    <label>Adresse mail du centre d'archive :<input type="text" ref="localisation_email"/></label>
    <div class="action-button">
      <button class="btn save" onsubmit="this.event.preventDefault();" @click="saveLocalisation()">Enregistrer</button>
      <button class="btn cancel" @click="cancel">Annuler</button>
    </div>

  </div>

<!--  CREATION D'UN ELEMENT DOCUMENT -->
  <div class="choice" v-else-if="type === 'document'">
    <label>Sujet :
    <input placeholder="Sujet du document" type="text" ref="document_sujet"/></label>
    <label>Auteur :
    <input placeholder="Auteur du document" type="text" ref="document_auteur"/></label>
    <label>Type :
    <input placeholder="Type du document" type="text" ref="document_type"/></label>
    <label>Date
    <input placeholder="Date du document" type="number" ref="document_date"/></label>
    <label>Date max
    <input placeholder="Date max du document" type="number" ref="document_date_max"/></label>
    <label>Discipline principale de l'œuvre <select v-model="document.discipline" @click="getDisciplines">
      <option disabled value="">Sélectionnez une discipline</option>
      <option v-for="discipline in disciplines" :key="discipline.id" v-bind:value="discipline.id">{{ discipline.intitule }}</option>
    </select></label>
    <label>Localisation de l'œuvre <select v-model="document.localisation" @click="getLocalisations">
      <option disabled value="">Sélectionnez une localisation</option>
      <option v-for="localisation in localisations" :key="localisation.id" v-bind:value="localisation.id">{{ localisation.intitule }}</option>
    </select></label>
    <label>Spécialiste de l'œuvre <select v-model="document.specialist" @click="getSpecialists">
      <option disabled value="">Sélectionnez une localisation</option>
      <option v-for="specialist in specialists" :key="specialist.id" v-bind:value="specialist.id">{{ specialist.nom }}</option>
    </select></label>
    <div class="action-button">
      <button class="btn save" onsubmit="this.event.preventDefault();" @click="saveDocument()">Enregistrer</button>
      <button class="btn cancel" @click="cancel">Annuler</button>
    </div>

  </div>

  <div style="padding-top: 40px">
    <button @click="home" class="btn btn-back">Accueil</button>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Create",
  data() {
    return{
      type: null,
      specialist_discipline: null,
      document: {
        discipline: null,
        localisation: null,
        specialist: null
      },
      disciplines: {},
      specialists: {},
      localisations: {}
    }
  },
  mounted() {
    this.getDisciplines();
    this.getSpecialists();
    this.getLocalisations();
  },
  methods: {
    async getDisciplines(){
      axios.get('http://localhost:4500/disciplines')
          .then(r => {
            return this.disciplines = r.data.res;
          })
    },
    async getLocalisations(){
      axios.get('http://localhost:4500/localisations')
          .then(r => {
            return this.localisations = r.data.res;
          })
    },
    async getSpecialists(){
      axios.get('http://localhost:4500/specialists')
          .then(r => {
            return this.specialists = r.data.res;
          })
    },
    async saveDiscipline(){
      axios.post('http://localhost:4500/discipline',{
        "intitule": await this.$refs.discipline_string.value
      }).then(r => {
        console.log(r.data);
      });
    },
    async saveSpecialist(){
      axios.post('http://localhost:4500/specialiste', {
        "nom": await this.$refs.specialist_name.value,
        "telephone": await this.$refs.specialist_phone.value,
        "email": await this.$refs.specialist_email.value,
        "discipline_id": await this.specialist_discipline,
      }).then(async r => {
        console.log(r.data)
      })
    },
    async saveLocalisation(){
      axios.post('http://localhost:4500/localisation', {
        "intitule": await this.$refs.localisation_name.value,
        "ville": await this.$refs.localisation_ville.value,
        "code_postal": await parseInt(this.$refs.localisation_code_postal.value),
        "telephone": await this.$refs.localisation_telephone.value,
        "adresse": await this.$refs.localisation_adresse.value,
        "email": await this.$refs.localisation_email.value
      }).then(r => {
        console.log(r.data);
      })
    },
    async saveDocument() {
      axios.post('http://localhost:4500/document', {
        "sujet": await this.$refs.document_sujet.value,
        "auteur": await this.$refs.document_auteur.value,
        "type": await this.$refs.document_type.value,
        "date": await parseInt(this.$refs.document_date.value, 10),
        "date-max": await parseInt(this.$refs.document_date_max.value, 10),
        "discipline_id": await this.document.discipline,
        "specialiste_id": await this.document.specialist,
        "localisation_id": await this.document.localisation
      }).then(r => {
        console.log(r.data);
      })
    },
    async cancel(){
      return this.type = null;
    },
    async home(){
      await this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
.choice{
  display: flex;
  flex-flow: column;
  align-items: center;
}

select {
  margin-bottom: 1em;
  padding: .25em;
  border: 0;
  border-bottom: 2px solid currentcolor;
  border-radius: 0;
}

input{
  border: none;
  border: 2px solid gray;
  max-width: 500px;
}

action-button{
  display: flex;
  flex-flow: row;
}

.btn{
  margin: 30px;
}

.cancel{
  background-color: #ff1515;
  color: white;
}

.save{
  background-color: #42b983;
  color: white;
}

.btn-back{
  background-color: #068af1;
  color: white;
}

.top-frame{
  height: 100px;
  background-color: black;
  color: white;
  margin-bottom: 20px;
}
</style>
