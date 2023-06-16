import getAllCategories from '@/utils/getAllCategories';
import React from 'react';
import SingleCategory from './SingleCategory';

const Categories = async () => {
    const categories = await getAllCategories()
    return (
        <div>
            <h1>categories</h1>
            {
                categories.map((category)=><SingleCategory key={category.id} category={category}></SingleCategory>)
            }
        </div>
    );
};

export default Categories;