import React from "react";
import MenuItem from "./MenuItem"

const DirectoryMenu = ({items}) => {
    return (
        <div className="directory-menu">
            {items.map((item, index) => {
                return <MenuItem key={item + index} item={item} />
            })
            }
        </div>
    )
};

export default DirectoryMenu;