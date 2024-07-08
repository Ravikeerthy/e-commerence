import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="bg-dark py-5"  id='banner'>
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-end text-white">
                    <h1 className="display-4 fw-bolder" id='text'>Keerthy's Cosmotics</h1>
                    <p className="lead fw-normal mb-0" id='text'>Feel the beauty</p>
                </div>
            </div>
        </header>
        </div>
    );
};

export default Header;