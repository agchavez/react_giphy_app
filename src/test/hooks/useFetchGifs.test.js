import React from 'react';
import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs';

import { renderHook } from '@testing-library/react-hooks'




describe('Pruebas en el hoo useFetchGifs', () => {
    test('Debe mostrarse el estado inicial', async() => {
        const {result,waitForNextUpdate}= renderHook(()=> useFetchGifs('One Punch'));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe de retornar una lista de imagenes', async() => {
        const {result,waitForNextUpdate}= renderHook(()=> useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });
    
    
})
