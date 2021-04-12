import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getAllUser() {
            // console.log(apiConfigs.apiUrl);
            return fetch(`${apiConfigs.apiUrl}/usersAll`)
            .then(res=>res.json())
        },
        getUser() {
            // console.log(apiConfigs.apiUrl);
            return fetch(`${apiConfigs.apiUrl}/users/${this.$route.params.id}`)
            .then(res=>res.json())
        },
        
    }
}