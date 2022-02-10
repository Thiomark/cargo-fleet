const state = () => ({
    siteName: 'Business Online Basics',
    siteInfo: [
        { title: 'Service', phone: '+2750 456 1234', email: 'service@businessonlinebasics.co.za' },
        { title: 'Admin', phone: '+2711 456 1234', email: 'admin@businessonlinebasics.co.za' },
        { title: 'Office', phone: '+2712 456 1234', email: 'office@businessonlinebasics.co.za' }
    ],
    isMenuOpen: false,
    hideScrollBar: false,
    alert: null
})
  
const mutations = {
    toggleMenu(state, payload) {
        state.hideScrollBar = payload
        state.isMenuOpen = payload
    },
    SET_ALERT(state, alert){
        state.alert = alert
        setTimeout(() => {
            state.alert = null
        }, 5000);
    }
}

const getters = {
    getSiteName: state => state.siteName,
    getAlert: state => state.alert
}

export default {
    state,
    getters,
    mutations
};