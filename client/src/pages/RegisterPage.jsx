import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('donor'); // Default to 'donor'

    function registerUser(ev) {
        ev.preventDefault();
        try {
            axios.post('/register', {
                name,
                email,
                password,
                userType, // Include userType in the registration data
            });
            alert('Registration successful!');
        } catch (e) {
            alert('Registration Failed!');
        }
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                    User Type:
                    <label className="text-black">
                        
                        <select
                            value={userType}
                            onChange={(ev) => setUserType(ev.target.value)}
                        >
                            <option value="donor">Donor</option>
                            <option value="receiver">Receiver</option>
                        </select>
                    </label>
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member?{' '}
                        <Link className="underline text-white" to={'/login'}>
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
