import { useEffect, useState } from 'react';


export default function RenderComponent() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(`http://dev.wildwestrummy-dev.com:8098/sporti/web/home`,{ referrer: "unsafe_url"}).then((response) => response.json())
            .then((data) => setData(data)).catch((error) => { console.log(error.message) }).finally(() => { setLoading(false) });

    },{})


    return (
        <div className="App">
            <h1>API Posts</h1>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <table>
                <thead>
                    <tr>
                        <th>media_id</th>
                        <th>type</th>
                        <th>url</th>
                    </tr>
                </thead>
                <tbody>{data &&
                    data.banners.map(({media_id,type,url}) => {
                        return [
                            <tr>
                                <td key={url}>{media_id}</td>
                                <td>{type}</td>
                                <img src ={url} height="180em" width="320em" ></img>
                            </tr>
                        ]

                    })}</tbody>

            </table>
        </div>

    )

}
