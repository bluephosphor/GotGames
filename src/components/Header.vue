<template>
    <header>
        <h1>{{title}}</h1>
        <Button 
            v-show="homePage"
            @btn-click="$emit('toggle-game-search')" 
            :text="showGameSearch ? 'Close':'Search'" 
            :color="showGameSearch ? 'red' : 'green'" 
        />
    </header>
</template>

<script>
import Button from './Button'

export default {
    name: 'Header',
    props: {
        title: String,
        showGameSearch: Boolean
    },
    components:{
        Button,
    },
    computed: {
        homePage(){
            return (this.$route.path === '/')
        }
    }
}
</script>


<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>