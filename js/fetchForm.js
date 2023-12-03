
const URL = 'http://localhost:5000'

const fetchForm = async (formFields) => {
    try {
        const requestInit = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(formFields),
            Accept: 'application/json',
        }
    
        const response = await fetch(URL, requestInit)
        return response.json()
    } catch(e) {
        alert('ОШИБКА ПРИ ОТПРАВКЕ ФОРМЫ')
        throw new Error(e)
    }
}
