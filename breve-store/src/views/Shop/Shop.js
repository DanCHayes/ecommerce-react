import React, {useState, useEffect} from 'react';
import * as api from '../../utils/api';
import './Shop.scss';

import PreviewCollections from '../../components/PreviewCollections/PreviewCollections';

const ShopPage = () => {
    const [shopData, setShopData] = useState();

    useEffect(() => {
        const _shopData = api.getShopItems();
        setShopData(_shopData);
    }, []);

    return (
        <div>
            <h1>Collections</h1>
            <PreviewCollections shopData={shopData} />
        </div>
    );
}

export default ShopPage;