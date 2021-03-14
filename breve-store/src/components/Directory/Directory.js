import React, {useEffect, useState} from "react";
import MenuItem from "../MenuItem/MenuItem"

import * as api from '../../utils/api';

import './Directory.scss';

const Directory = () => {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        const _menuData = api.getMenuItems();
        setMenuData(_menuData);
    }, []);

    return (
        <div className="directory-menu">
            {menuData.map((item, index) => {
                return <MenuItem key={item + index} item={item} />
            })
            }
        </div>
    )
};

export default Directory;