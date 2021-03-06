import Axios from "axios";
import { useState } from "react";

interface IuseAxios {
    method?: any;
    url?: string;
    data?: {};
    headers?: {};
}

const useAxios = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false)

    const sendRequest = (arg: IuseAxios, apply: (a: any) => void) => {
        setIsLoading(true);
        Axios({
            method: arg.method ? arg.method : "get",
            url: arg.url ? arg.url : "",
            data: arg.data ? arg.data : null,
            headers: arg.headers ? arg.headers : {},
        })
            .then((response) => {
                setHasError(false)
                setIsLoading(false);
                apply(response);
            })
            .catch((err) => {
                setHasError(true)
                setIsLoading(false);
            });
    };

    return {
        sendRequest,
        isLoading,
        hasError,
        setHasError
    };
};

export default useAxios;
