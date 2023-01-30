import { createSlice } from '@reduxjs/toolkit';

const MaterialSlice = createSlice({
    name: "Material",
    initialState: {
        sku: '',
        titre: "ddd",
        description: '',
        tags:[],
        images:[],
        departement:'informatique',
        quantite:0,
        disponible:true
    },
    reducers: {
        updateSku: (state, action) => {
            
            state.sku = action.payload;           
        },
        updateTitre: (state, action) => {
            
            state.titre = action.payload;           
        },
        updateTags: (state, action) => {
            
            state.tags = action.payload;           
        },
        updateDescription: (state, action) => {
            
            state.description = action.payload;           
        },
        updateCount: (state, action) => {
            
            state.quantite = action.payload;           
        },
        updateDepartement: (state, action) => {
            
            state.departement = action.payload;           
        },
        updateImages: (state, action) => {
            
            state.images= action.payload;           
        }
    }
});

export const { updateTitre,updateSku,updateImages,updateDepartement,updateDescription,updateTags,updateCount } = MaterialSlice.actions;

export default MaterialSlice.reducer;