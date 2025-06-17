import {useNavigate} from "react-router-dom";
import {Paths} from "../utils/shop-types.ts";
import {useEffect} from "react";

const ErrorPage = () => {

    const navigate = useNavigate();
    useEffect(() => {
        navigate(`/${Paths.ERRORPAGE}`);
    }, [navigate]);



    useEffect(() => {
        if (performance.getEntriesByType("navigation")[0].type === "reload") {
            //if (performance.navigation.type === 1)
            navigate(Paths.HOME);
        }
    }, [navigate]);

    return (
        <div>
            ERROR PAGE /404 NOT FOUND
        </div>
    );
};

export default ErrorPage;