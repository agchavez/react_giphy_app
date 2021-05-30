import { shallow } from "enzyme"
import '@testing-library/jest-dom'
import React from "react";
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');


describe('Prueba del <GifGrid/>', () => {
    const categorie = "avengers";
    
    
    test('Debe mostarse el componente normal ', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const wrapper = shallow(<GifGrid category = {categorie} />);
        expect(wrapper).toMatchSnapshot();
   });

   test('Debe de mostar items cuando se mandan imagenes del useFetchGefs', () => {
        const gifs = [
            {
                id:'ABC',
                url:'htpps://localhost/cuaqluiercosa/asldkd.gif',
                title:'Cualquier cosa'

            },
            {
                id:'ABCD',
                url:'htpps://localhost/cuaqluiercosa/asldkd.gif',
                title:'Cualquier cosa'

            }
        ]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });

        const wrapper = shallow(<GifGrid category = {categorie} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);


       
   })
   
   


    
})
