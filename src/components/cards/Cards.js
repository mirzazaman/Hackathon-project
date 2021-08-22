import React from 'react'
import './Cards.css'

export default function Cards({ RestaurantList }) {
    return (
        <div>
            <center>

                {
                    RestaurantList.map((item) => {
                        return (
                            <>
                                <div style={{
                                    display: "inline-flex",
                                }}>
                                    <div id="CardsCard" style={{
                                        display: "block",
                                        width: "15rem",
                                        margin: "2rem",
                                    }}>

                                        <center>
                                            <img style={{
                                                width: '100%',
                                                height: '50%',

                                            }} src={item.restImage} />
                                            <div style={{ margin: 10 }}>
                                                <h5 style={{ textAlign: "left" }}>{item.restName}</h5>
                                                <h5 style={{ textAlign: "left" }}>{item.restDesc}</h5>
                                            </div>
                                        </center>

                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </center>
        </div>
    )
}
