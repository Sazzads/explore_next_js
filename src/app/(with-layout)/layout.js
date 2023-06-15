import Navbar from '@/Components/Navbar';
import React from 'react';

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <footer>
                copyright
            </footer>
        </div>
    );
};

export default WithLayout;