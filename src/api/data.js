const baseURL = 'https://api.weatherapi.com/v1/current.json?key=eacd977fa4a541ca83105900240603';
// &q=London&aqi=no

export const fetchDataFromAPI = async(city)=>{
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json()
}
