import React, { useState , useEffect} from "react";
import axios from 'axios';
import "./pricing.css";

export default function Princing() {

    const [price, setprice] = useState({
        prices: []
    });

    useEffect(() => {
        const fetchdata = async() => axios({
            method: 'post',
            url: 'http://localhost:3500/graphql',
            headers: {
                'Content-Type': 'application/graphql'
            },
            data: 'query { servers(type: "A") { name, price } }\n\n'
        }).then( response  => {
                setprice({
                    prices: response.data.data.servers
                })
        }).catch( error => {
                console.log(error);
        });
        fetchdata();
    }, []);
    

    document.title = 'TableX charts | princing';
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Princing</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Server</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                price.prices.map(e => {
                                    return (
                                        <tr key={e.name}>
                                            <td>{e.name}</td>
                                            <td>{e.price} </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}
