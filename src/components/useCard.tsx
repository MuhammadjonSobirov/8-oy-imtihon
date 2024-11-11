import { useState, useEffect } from "react";
import { request } from "../api/request.js";

interface UseCardResult<T> {
    data: T | undefined;
    loading: boolean;
    error: string | null;
}

const useCard = <T = any>(url: string): UseCardResult<T> => {
    const [data, setData] = useState<T | undefined>(undefined);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await request.get(url);
                if (res.status !== 200) {
                    throw new Error("Failed to fetch posts");
                }
                setData(res.data);
            } catch (err: any) {
                setError(err.message || "Failed to fetch posts");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData(); 

    }, []); 
    console.log(data);
    

    return {
        data,
        loading: isLoading,
        error,
    };
};

export default useCard;
