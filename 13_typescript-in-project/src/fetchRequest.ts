// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const fetchData = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/todo/2';
        const response = await fetch(url);

        if (!response.ok) throw new Error('fetching request failed');

        const res: Todo = await response.json();

        console.log(res);

    } catch (err: unknown) {
        console.log(err);
    }
}

fetchData();