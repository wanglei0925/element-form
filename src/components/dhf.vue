<template>
    <div>
{{flag}}
    </div>
</template>
<script>
import {mapActions,mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters(['flag'])
    }
}
</script>

