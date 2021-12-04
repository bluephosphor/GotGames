<template>
    <footer>
        <p>Copyright &copy; 2021 Jonny Andino</p>
        <router-link 
            v-show="homePage"
            to="/about">About
        </router-link>
    </footer>
</template>

<style scoped>
    a {
        color: #333
    }

    footer {
        margin-top: 30px;
        text-align: center;
    }
    @media screen and (max-width: 600px){
        footer{
            margin-top: 10px;
        }
    }
</style>

<script>
export default {
    name: 'Footer',
    computed: {
        homePage(){
            return (this.$route.path === '/')
        }
    }
}
</script>