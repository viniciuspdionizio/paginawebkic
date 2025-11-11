const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getPosts(amount = 10) {
  const response = await fetch(`${BASE_URL}/posts?limit=${amount}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar posts');
  }
  return response.json().then(posts => posts.slice(0, amount));
}
