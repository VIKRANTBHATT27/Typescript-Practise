import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error?: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = (await response.json()) as T;

                if (isMounted) {
                    setState({ data: result, loading: false, error: null });
                }
            } catch (error) {
                if (isMounted) {
                    setState({
                        data: null,
                        loading: false,
                        error: error instanceof Error ? error.message : "Something went wrong",
                    });
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url]);

    return state;
}