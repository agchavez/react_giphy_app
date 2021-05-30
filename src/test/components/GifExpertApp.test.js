import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifExpertApp } from '../../GifExpertApp';


describe('Pruebas de con <GifExpertApp/>', () => {
    test('Debe mostrarse el componente completo', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => {
        const categories = ['avengers', 'league of legends'];
        const wrapper = shallow(<GifExpertApp defaultCategories = {categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    
         
    })
    
    
})
