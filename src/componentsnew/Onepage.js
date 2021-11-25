import React from "react";

const OnePage = (props) => (
    <div>
        This is sub-item page {props.match.params.id}
    </div>
    
);

export default OnePage;