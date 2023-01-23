<script setup>
import { Link } from "@inertiajs/inertia-vue3";

defineProps({
    project: Object
})
</script>

<template>
    <Link :href="project.project_url" class="group flex flex-col items-center text-center cursor-pointer" v-motion
        :initial="{
            opacity: 0,
            y: 100,
        }" :enter="{
    opacity: 1,
    y: 0,
}">
    <div class="mb-6">
        <img class="rounded-lg h-56" :src="project.image" :alt="project.name">
    </div>
    <span class="group-hover:text-blue-700 capitalize text-gray-500 text-sm mb-3"> {{ project.skill.name }}</span>
    <h3 class="group-hover:text-blue-700 text-2x1 front.semibold capitalize mb-3"> {{ project.name }}</h3>
    </Link>
</template> 