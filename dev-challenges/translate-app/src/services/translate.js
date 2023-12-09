const url = 'https://text-translator2.p.rapidapi.com/translate'
export async function translateText({
  text,
  sourceLan = 'en',
  targetLan = 'es',
}) {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '2b14b2cc90msh694300594c28095p18a308jsn60543ffafee5',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
    },
    body: new URLSearchParams({
      source_language: sourceLan,
      target_language: targetLan,
      text: text,
    }),
  }
  try {
    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json)
    // console.log(json.data.translatedText);
    return json.data.translatedText
  } catch (error) {
    throw new Error('Error')
  }
}
