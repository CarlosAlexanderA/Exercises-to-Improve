const url2 = 'https://text-translator2.p.rapidapi.com/getLanguages';
const options2 = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2b14b2cc90msh694300594c28095p18a308jsn60543ffafee5',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
  },
};
async function getLengauges() {
  try {
    const response = await fetch(url2, options2);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
getLengauges();
