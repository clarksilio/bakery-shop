import {addCategory, isCathegoryExists, removeCategory} from "../src/firebase/firebaseDBService";
import { getApps, deleteApp } from 'firebase/app';

describe('BakeryShopDB', () => {
    afterAll(async () => {
        await Promise.all(getApps().map(deleteApp));
    });
it('category exist', async() =>{
    await expect(isCathegoryExists('bread')).resolves.toBe(true);
    await expect(isCathegoryExists('milk')).resolves.toBeFalsy();
})
    it('add remove category' , async() => {
        const ctgry = 'chairs'
        await removeCategory(ctgry);
        expect(await isCathegoryExists(ctgry)).toBeFalsy()
        await addCategory({category_name: ctgry});
        expect(await isCathegoryExists(ctgry)).toBe(true);
    })
})