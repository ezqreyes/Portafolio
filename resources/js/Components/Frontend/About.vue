<script setup>

</script>

<template>
    <section id="about" class="section bg-light-secondary dark:bg-dark-secondary"
   >
        <div class="container mx-auto" v-motion
        :initial="{
            opacity: 0,
            y: 100,
        }"
        :visible="{
            opacity: 1,
            y: 0,
        }">
            <div class="flex flex-col xl:flex-row gap-24">
                <img class="object-cover h-full w-[290px] opacity-90 md:mx.auto lg:mx-0 rounded-lg"
                    src="/LaravelProjects/portafolio/public/img/foto.jpg" alt="about">
                <div class="flex flex-col items-center lg:items-star lg:text-left">
                   <div class="flex flex-col">
                    <h2 class="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                        About me
                    </h2>
                    <p class="mb-4 text-gray-700"> Backend Web Developer</p>
                    <hr class="mb-8 opacity-90 dark:opacity-5">
                    <p class="mb-8 text-gray-500 dark:text-white"> My name is Ezequiel Reyes, I am 26 years old, I live in Mendoza-Argentina and study analysis and system programming at the Manuel Belgrano Institute. <br/>
                        I consider myself a responsible, committed, dynamic, versatile and creative person, with many goose to work and learn, with initiative to solve problems efficiently and achieve proposed goals. <br/> 
                        My goal is to put into practice all the knowledge acquired during my academic training and to continue growing in this category that I like so much.
                    </p>
                   </div>
                   <a href="#" class="btn btn-md rounded-md bg-blue-600 text-white hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-600">Contact me</a>
                </div>
            </div>
        </div>
    </section>
</template>