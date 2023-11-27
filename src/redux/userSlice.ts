import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '../firebase.config'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

interface User {
    email: string | null;
    displayName: string | null;
    photoUrl: string | null;
}

export const loginWithGoogle = createAsyncThunk(
    'userloginWithGoogle',
    async (_, { rejectWithValue }) => {
        try {
            const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        const userData: User = {
           email: result.user.email,
           displayName: result.user.displayName,
           photoUrl: result.user.photoURL
        }

        return userData
        } catch (error) {
            if(error instanceof Error) {
                return rejectWithValue(error.message)
            } else {
                rejectWithValue('My Error Message')
            }
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        error: null,
        profile: null,
    },
    reducers: {},
    extraReducers: {
        [loginWithGoogle.pending as any]: (state) => {
            state.loading = true;
        },
        [loginWithGoogle.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.profile = action.payload;
        },
        [loginWithGoogle.rejected as any]: (state, action) => {
            state.loading = true;
            state.error = action.error.message;
        },
    }
})

export default userSlice.reducer;