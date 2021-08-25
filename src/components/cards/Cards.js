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
                                            <div>
                                                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                                    <h5>{item.restName}</h5>
                                                    <h5>{item.restCity}</h5>
                                                </div>
                                                <h5 style={{ textAlign: "left", color: 'gray' }}>{item.restDesc}</h5>
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
