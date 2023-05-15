import React from 'react'
import './roadmap.css'
export default function Roadmap() {

    const Initiatives = [
        [
            "Q4 2022",
            "Concept Creation, Research, User Validation",
            "lightblue"
        ],

        [
            "Q1 2023",
            "Team Building, Litepaper Launch, Testnet Launch, Community Building",
            "primaryblue"
        ],

        [
            "Q2 2023",
            "Private Token Offering, MVP Launch",
            "violet"
        ],

        [
            "Q3 2023",
            "DAO transition, Marketplace on-boarding for API",
            "pink"
        ]
    ];

    return (
        <>
            <div className="roadmap">
                <h2 style={{fontFamily: "Inter, Arial",
                fontWeight: "500",
                letterSpacing: "0.2rem",
                fontSize: "2rem",}} >ROADMAP</h2>
                <div class="initiativescontainer">
                    {Initiatives.map((initiative, index) => {
                        return (
                            <div class={"initiativediv  " + initiative[2]}>
                                <div class=" iniiconbox">
                                    <img
                                        src={"/assets/img/roadmapicons/" + (index + 1) + ".png"}
                                        style={{
                                            position: "relative",
                                            transition: "0.5s ease",
                                            width: "100%"
                                        }}
                                        alt=""
                                    />
                                    <div class="shadowdiv"></div>
                                </div>
                                <div class="iniinfo">
                                    <h4>{initiative[0]}</h4>
                                    <p>{initiative[1]}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    )
}
