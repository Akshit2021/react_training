import React from "react";
import {Link} from "react-router-dom";

const edit = () => (
        <div>
            This is edit page
            <Link to="/edit/1">Item One</Link>
            <Link to="/edit/2">Item two</Link>
        </div>
    
);

export default edit;