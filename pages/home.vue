<template>
  <div class="container">
    <AppDialog :opened="isOpened" @hide="isOpened = false">
      <div>
        <AppInput placeholder="Name" type="text" v-model="name"  @update="name = $event" />
        <div class="button-block">
          <AppButton text="Edit" @click="editProject"></AppButton>
          <AppButton text="Cancel" @click="clearData"></AppButton>
        </div>
      </div>
    </AppDialog>
    <AppHeaderInside />
    <div class="projects">
      <div class="projects-block" v-for="project in computedProjects" @click="startEdit(project.id)">
        <div class="projects-block__item">
          <div class="projects-block__item__title">{{project?.name}}</div>
          <div class="projects-block__item__description"><img v-if="project?.logo_url" :src="project?.logo_url" alt="logo"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
export default defineComponent({
  name: "home",
  async asyncData({ store, redirect }) {
    try{
      const projects = ref(await store.dispatch('projects/getProjects'));
    return {
        projects
      }
    }catch (e: { message: string }){
      if(e.message === "Unauthorized") {
        await redirect('/login');
      }
    }
  },
  data(){
    return {
      name: '',
      isOpened: false,
      editId: 0
    }
  },
  methods:{
    clearData(): void{
      this.name = '';
      this.isOpened = false;
      this.editId = 0;
    },
    async startEdit(id: number): Promise<void>{
      this.isOpened = true;
      this.editId = id;
      if(this.projects?.value) {
        this.name = this.projects?.value?.find((project: any) => project.id === id).name;
      }else {
        this.name = this.projects.find((project: any) => project.id === id).name;
      }
    },
    async editProject(): Promise<void>{
      await this.$store.dispatch('projects/editProject', {id: this.editId, name: this.name})
      this.projects = await this.$store.dispatch('projects/getProjects');
      this.clearData();
    },
  },

  computed: {
    computedProjects(){
      return this.projects?.value ?? this.projects
    }
  },
})
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70vh;
  background: #fff;
}
.projects{
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.projects-block{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0,0,0,.11);
}
.projects-block__item{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.projects-block__item:hover{
  background-color: rgba(0,0,0,.05);
}

.projects-block__item__description{
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.projects-block__item__description img{
  width: 100px;
  height: 100px;
}
.button-block{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>