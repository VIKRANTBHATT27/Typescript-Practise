// npm i some-library
// and to install it's ts types
// npm i -D @types/some-library
// otherwise create bt self in .d.ts file in dist
import axios from "axios";
import type { AxiosResponse } from "axios";

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

const fetchData = async (): Promise<void> => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const response: AxiosResponse<Todo> = await axios.get(url);

        console.log("Reponse: ", response.data);
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            console.error("Axios Error: ", err.message);
        }
        else console.error(err);
    }
}

// Start the async request and intentionally ignore its returned Promise.
void fetchData();