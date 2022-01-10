import {React, useState, useEffect} from 'react'
import axios from 'axios'
import styles from '../styles/Courses.module.css'
import Image from 'next/image'
import Link from 'next/link'

function CheckoutButton({filterTerm}) {

    const [courseData, setCoursedata] = useState([]);

     useEffect(()=>{
        axios.get('http://localhost:8000/courses')
        .then(res =>{
            console.log(res)
            setCoursedata(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]) 
    ;
    const button = document.querySelector("button")

    button.addEventListener("click", () => {
    fetch("http://localhost:3000//api/checkout_sessions", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            items: [
              { id: courseData.stripeid},
              { id: 2, quantity: 1 },
            ],
          }),
        })
        .then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        })
        .then(({ url }) => {
        window.location = url
        })
        .catch(e => {
        console.error(e.error)
        })
    })
    ;
}

export default CheckoutButton;