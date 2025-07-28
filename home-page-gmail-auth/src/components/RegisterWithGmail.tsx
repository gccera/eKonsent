import React from 'react';
import { signInWithGmail } from '../services/authService';

const RegisterWithGmail: React.FC = () => {
    const handleRegister = async () => {
        try {
            await signInWithGmail();
            // Handle successful registration (e.g., redirect or show a success message)
        } catch (error) {
            // Handle registration error (e.g., show an error message)
            console.error('Registration failed:', error);
        }
    };

    return (
        <div>
            <h2>Register with Gmail</h2>
            <button onClick={handleRegister}>Register with Gmail</button>
        </div>
    );
};

export default RegisterWithGmail;