
import { shallow } from "enzyme";
import React from "react";
import {GifGridItem} from "../../components/GifGridItem";


describe('Pruebas en <GifGidItem />', () => {
    const title = "Este es el titulo";
    const url = "https://localhost/hola.png";
    const wrapper = shallow(<GifGridItem title= {title} url={url}/>)
    

    test('Debe mostrar el componente correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
        
    })

    test('Debe de tener un parafo con el title ', () => {
        const p =  wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('Debe de tener la imagen igual al url y alt de los props ', () => {
        const img = wrapper.find('img');
        const {src, alt } = img.props();
        expect(src).toBe(url);
        expect(alt).toBe(title);

    })

    test('Debe tener la clase animate_fadeIn ', () => {
        const container =  wrapper.find('div');
        const {className} = container.props();
        //Si incluye la palabra 'animate__fadeIn' en lista de clases
        expect(className.includes('animate__fadeIn')).toBe(true)
    })
    
    
    
    
})
