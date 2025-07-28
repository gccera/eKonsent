import React from 'react';
import RegisterWithGmail from '../components/RegisterWithGmail';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>Please register using your Gmail account:</p>
            <RegisterWithGmail />
        </div>
    );
};

export default Home;