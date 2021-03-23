import apiConfigs from '../configs/api.configs';

export default {
	methods: {
		getCategoryAll() {
			// console.log(apiConfigs.apiUrl);
			return fetch(`${apiConfigs.apiUrl}/category/all`).then((res) => res.json());
		},
		getCategoryId(){
			return fetch(`${apiConfigs.apiUrl}/category/`).then((res) => res.json());
		}
	}
};
