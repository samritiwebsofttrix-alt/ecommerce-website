"use client";
import React, { useState } from 'react'
import { register } from "@/services/authService";


const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (
    ) => {
        try {
            const response = await register({
                name,
                email,
                password,
                password_confirmation: password,
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div><form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
                Register
            </button>

        </form></div>
    )
}

export default Page