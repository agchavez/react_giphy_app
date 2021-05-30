import { shallow } from "enzyme"
import '@testing-library/jest-dom'
import React from "react";
import { AddCategory } from "../../components/AddCategory"


describe('Pruebas en el componente <AddCategory/>', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories= {setCategories}/>);
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories= {setCategories}/>);
    })

    test('debe de mostratr correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe cambiar la caja ', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
        
    })

    test('No debe de postear la imformacion con el submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
        
    })
    test('Debe llamar el setCategorie y limpiar la caja de texto', () => {
        const value = 'Hola mundo';
        const input = wrapper.find('input');
        // Simular inputChange
        input.simulate('change', {target:{value}});
        //Simular sumit
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        //setcategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);

        
        //El valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
    
    
})
