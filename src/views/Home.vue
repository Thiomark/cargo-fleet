<template>
    <container-screen >
        <landing-component class=""/>
        <div style="min-height: 70vh;" class="bg-gray-100 hidden"></div>
        <information-component />
        <div class="hidden lg:flex mx-auto container justify-center items-center">
            <hr class="w-full mt-16 border-2 max-w-2xl">
            <hr class="w-4 ml-1 mt-16 rounded-ful border-4">
            <hr class="w-8 ml-5 mt-16 rounded-ful border-2">
            <hr class="w-10 ml-5 mt-16 border max-w-2xl">
        </div>
        <group-four-temp-component />
        <information-two-component />
        <div class="w-full hidden bg-center bg-cover h-96" style="background-image: url(https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000);">
            <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"></div>
        </div>
        <our-services-component />
        <news-letter-component />
        <sponsorship-component />
    </container-screen>
</template>

<script>
    import GroupFourTempComponent from '../components/_home/GroupFourTempComponent.vue'
    import OurServicesComponent from '../components/_home/OurServicesComponent.vue'
    import InformationComponent from '../components/_home/InformationComponent.vue'
    import InformationTwoComponent from '../components/_home/InformationTwoComponent.vue'
    import LandingComponent from '../components/_home/LandingComponent.vue'
    import NewsLetterComponent from '../components/_home/NewsLetterComponent.vue'
    import SponsorshipComponent from '../components/_home/SponsorshipComponent.vue'
    import ContainerScreen from '../templates/ContainerScreen.vue'
    export default {
        name: 'Home',
        components: { 
            ContainerScreen,
            OurServicesComponent,
            NewsLetterComponent,
            SponsorshipComponent,
            LandingComponent,
            InformationTwoComponent,
            InformationComponent, 
            GroupFourTempComponent
        },
    }
</script>
,