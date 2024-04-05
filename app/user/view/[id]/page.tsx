"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios' //npm install axios https://www.npmjs.com/package/axios
import Link from "next/link";
import { useParams } from 'next/navigation'

export default function ViewUserPage() {
    const {id}=useParams();

    console.log(id);

    const[user,setUser]=useState([]);
 
    useEffect(()=>{
        fetchUser();
    },[id]);
 
    const fetchUser=async()=>{
        try{
        const result=await axios.get("http://127.0.0.1:5000/userdetails/"+id);
        console.log(result.data);
        setUser(result.data)
 
        }catch(err){
            console.log("Something Wrong");
        }
    }

    return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">View User</h1>
      <table className="table table-zebra">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50">
            <tr>
              <th>S No.</th>
              <th>Full Name</th>
              <th>Email</th>             
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
          </tbody>
      </table>
    </div>
  );
}