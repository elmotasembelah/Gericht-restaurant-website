// import React from "react";

// import "./MenuItem.css";

// const MenuItem = ({ key, title, price, tags }) => {
//     return (
//         <div className="app__menuitem">
//             <div className="app__menuitem-head">
//                 <p
//                     className="p__cormorant app__menuitem-title"
//                     style={{ color: "#DCCA87" }}
//                 >
//                     {title}
//                 </p>
//                 <div className="app__menuitem-dash"></div>
//                 <p className="app__menuitem-price p__cormorant">{price}</p>
//             </div>
//             <p
//                 className="app__menuitem-sub p__opensans"
//                 style={{ color: "#AAA" }}
//             >
//                 {tags}
//             </p>
//         </div>
//     );
// };

// export default MenuItem;

import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
    <div className="app__menuitem">
        <div className="app__menuitem-head">
            <div className="app__menuitem-name">
                <p className="p__cormorant" style={{ color: "#DCCA87" }}>
                    {title}
                </p>
            </div>
            <div className="app__menuitem-dash" />
            <div className="app__menuitem-price">
                <p className="p__cormorant">{price}</p>
            </div>
        </div>

        <div className="app__menuitem-sub">
            <p className="p__opensans" style={{ color: "#AAAAAA" }}>
                {tags}
            </p>
        </div>
    </div>
);

export default MenuItem;
