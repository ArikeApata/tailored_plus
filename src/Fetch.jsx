import { useState, useEffect } from "react";

const useFetch = (url) => {
    // in the Fetch.js file setBlogs was changed to [data, setData]
    // const [blogs, setBlogs] = useState(null);
    const [data, setData] = useState(null);
    const [defaultProducts, setDefaultProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url)
                // the endpoint server was changed so that the reusable Fetch.js can still be used if the endpoint is
                // a different url. it was then imported into the Home.js where the props were called in parenthesis
                // and not arrays so that their sequences does not matter
                // fetch(' http://localhost:8000/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw Error("can't do it");
                    }
                    return res.json();

                })
                .then(data => {
                    // setBlogs(data)
                    setData(data);
                    setDefaultProducts(data);
                    setIsLoading(false);
                    setError(null);


                })
                .catch(error => {
                    // if (error.message !== 'AbortError'){
                    //     console.log('fetch aborted')
                    // }
                    setIsLoading(false)
                    setError(error.message)
                })
        }, 1000);
        // return () => abortCont.abort()
    }, [url]
    );

    return { data, isLoading, error, setData, defaultProducts };
}

export default useFetch;