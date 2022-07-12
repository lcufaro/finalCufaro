import React from 'react';
import { FlatList } from 'react-native';
import { BREADS } from '../../data/breads';
import BreadItem from '../../components/BreadItem';

export default function CategoryBreads({ navigation, route }) {
    const breads = BREADS.filter(bread => bread.category === route.params.categoryID);

    const handleSelected = (item) => {
        navigation.navigate('Detail', {
            bread: item,
            name: item.name,
        });
    }

    const renderItemBread = ({ item }) => (
        <BreadItem item={item} onSelected={handleSelected} />
    )

    return (
        <FlatList
            data={breads}
            keyExtractor={item => item.id}
            renderItem={renderItemBread}
        />
    );
}