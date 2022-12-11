import {ref} from 'vue'

export const getData = ({url}) => {
		const data = ref([])
		const error = ref(null)

		const load = async () => {
			try{
				let dataLoaded = await fetch(url)
				console.log(dataLoaded)
				if(!dataLoaded.ok) throw Error('na data available')	
				data.value = await dataLoaded.json()
				console.log(data.value.photos[0])
			}catch(err){
				error.value = err.message
			}
		}
		return {data, error, load}
}