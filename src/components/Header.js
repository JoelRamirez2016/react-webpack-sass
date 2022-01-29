import React from "react";

const Header = ({title}) => {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p>This is a project illustrate  the characters of Rick And Morty</p>
                </div>            
            </div>
        </header>
    );
}

export default Header