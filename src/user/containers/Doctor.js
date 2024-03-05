import React from "react";
import DoctorCard from "../components/DoctorCard";


const doctorData = [
    {
        "id": 1,
        "name": "Meet Mistry",
        "fee": 1200,
        "degree": "MBBS"
      },
      {
        "id": 2,
        "name": "Ronak Rathva",
        "fee": 1100,    
        "degree": "MD"
      },
      {
        "id": 3,
        "name": "Sidharth Parmar",
        "fee": 900,     
        "degree": "BDS"
      },
      {
        "id": 4,
        "name": "Pratik Patel",
        "fee": 1000,       
        "degree": "BAMS"
      }
]

function Doctor (props) {

    return (

        <div>
            {
                doctorData.map((v) => (
                    <DoctorCard d={v}/>
                ))
            }
        </div>
    )
}

export default Doctor;


