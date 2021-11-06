import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    
    initialState: {
        isSignedIn: false,
        userData: null,
        dashboardData: null,
        profileData: null,
    },
    
    reducers: {
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload
        },

        setUserData: (state, action) => {
            state.userData = action.payload
        },

        setDashboardData: (state, action) => {
            state.dashboardData = action.payload
        },

        setProfileData: (state, action) => {
            state.profileData = action.payload
        }
    }
})

export const { setSignedIn, setUserData, setDashboardData, setProfileData} = userSlice.actions

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectDashboardData = (state) => state.user.dashboardData;
export const selectProfileData = (state) => state.user.profileData;

export default userSlice.reducer;

