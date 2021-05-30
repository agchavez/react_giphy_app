import { getGifs } from "../../helpers/getGifs"


describe('Prueba con los getGifs Fetch', () => {
    test('Debe retrnar los 10 elementos', async() => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10)
        
    })

    test('No regresar ningun elemento', async() => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0)
        
    })
    
    
})
