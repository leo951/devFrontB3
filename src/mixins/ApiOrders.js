import apiConfigs from '../configs/api.configs';

export default {
	methods: {
		getOrdersAll() {
			// console.log(apiConfigs.apiUrl);
			return fetch(`${apiConfigs.apiUrl}/orders`).then((res) => res.json());
		},
		getOrdersId(){
			return fetch(`${apiConfigs.apiUrl}/orders/`).then((res) => res.json());
		},
		getOrdersUser(){
			return fetch(`${apiConfigs.apiUrl}//users/`).then((res) => res.json());
		}
	}
};
