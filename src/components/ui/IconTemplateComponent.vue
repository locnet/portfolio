<template>
    <font-awesome-icon :icon="iconClass" size="2xl"></font-awesome-icon>
</template>

<script setup>
    import { defineProps, ref } from 'vue';
     // font awesome 
    /* import the fontawesome core */
    import { library } from '@fortawesome/fontawesome-svg-core'

    /* import font awesome icon component */
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    /* import specific icons */
    import { faRotate, faHeart, faCode, faLayerGroup, faGear, faObjectGroup, faGraduationCap} from '@fortawesome/free-solid-svg-icons';

    /* add icons to the library */
    library.add(faRotate, faHeart, faCode, faLayerGroup, faGear, faObjectGroup,faGraduationCap);

    // props
    const props = defineProps(['iconName']);
    
    const iconClass = ref("fa_solid " + props.iconName);
</script>