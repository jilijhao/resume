<template>
    <div id="app">
        <Header />
        <Sidebar />
        <main>
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: {
        Header,
        Sidebar,
        Footer
    }
};
</script>

<style>
#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

main {
    flex: 1;
    display: flex;
    flex-direction: column;
}
</style>
