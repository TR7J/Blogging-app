import React from "react";
import { DataSc } from "../datasc";
import './datascience.css'

export default function DataScience() {
    return(
        <div className="container">
            {
                DataSc.map(function (x) {
                    return(
                        <div className="container-data" key={x.id}>
                            <h1>{x.title}</h1>
                            <div className="image-container">
                                <img src={x.Image} alt={x.title} className="img"/>
                            </div>
                            <div className="content">
                                <p>{x.moreDescription}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}