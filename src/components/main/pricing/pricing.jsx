import React, { useState } from "react";
import "./pricing.css";

export default function Princing() {

    const [price, setprice] = useState({
        prices: [
            {
                name: 'server1',
                price: '10$'
            },
            {
                name: 'server2',
                price: '10$'
            },
            {
                name: 'server3',
                price: '20$'
            },
            {
                name: 'server4',
                price: '30$'
            }
        ]
    })

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
                        <tr>
                            <td>Server</td>
                            <td>Price</td>
                        </tr>
                        {
                            price.prices.map(  e => {
                                return (
                                    <tr id={e.name}>
                                        <td>{e.name}</td>
                                        <td>{e.price} </td>
                                    </tr>
                                );
                            })
                        }
                    </table>
                </div>
            </div>
        </div>

    );
}
