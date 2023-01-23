<script setup>
import Project from '@/Components/Frontend/Project.vue';
import { ref } from 'vue';

const props = defineProps({
    skills: Object,
    projects: Object
});

const filteredProjects = ref(props.projects.data)
const selectedSkill = ref("all")

const filterProjects = (id) => {
    if(id === "all"){
        filteredProjects.value = props.projects.data;
        selectedSkill.value = id;
    } else {
        filteredProjects.value = props.projects.data.filter(project => {
            return project.skill.id === id;
        })
        selectedSkill.value = id;
    }
}
</script>

<template>
    <div class="container mx-auto" 
    v-motion
        :initial="{
            opacity: 0,
            y: 100,
        }"
        :visible="{
            opacity: 1,
            y: 0,
        }">
        <nav class="mb-12 border-b-2 border-gray-100 dark:text-dark-navy-500">
            <ul class="flex flex-col lg:flex-row justify-evenly items-center">
                <li class="cursor-pointer capitalize m-4">
                    <button @click="filterProjects('all')" class="flex text-center px-4 p-2 text-black hover:text-gray-400 dark:text-gray-300" :class="[selectedSkill === 'all' ? 'bg-blue-500 rounded-full' : ' ' ]"> 
                     All
                    </button>
                </li>
                <li class="cursor-pointer capitalize m-4" v-for="projectSkill in skills.data" :key="projectSkill.id">
                    <button @click="filterProjects(projectSkill.id)"  class="flex text-center px-4 p-2 text-black hover:text-gray-400 dark:text-gray-300" :class="[selectedSkill == projectSkill.id ? 'bg-blue-500 rounded-full ' : ' ' ]">
                     {{ projectSkill.name }}
                    </button>
                </li>
            </ul>
        </nav>
        <section class="grid gap-y-12 lg:grid-cols-3 lg:gap-8">
            <Project v-for="project in filteredProjects" :key="project.id" :project="project" />
        </section>
    </div>
</template>