import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';


export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({userData}, { rejectWithValue }) => {
    try {
      const response = await fetch('https://staging.ardent-training.com/api/student-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "api-key": "eyJpdiI6ImpDdHdQL0NHYzVNQmwwYmE0NFMxbnc9PSIsInZhbHVlIjoiRmZPN2poWjg4OHJkR2xjOGg5SDgwSmg5M0lXMUhXeFhzbUJZZ05hT21MMmd1TUlpUlhEMWo1ekJXU1dTMThnT0szYTlMSlQva3BoODc3cDJhS2sxZE5KMDhyR1U0VlhoSUp1Z3pVSEwydk9KZHpYbWg5SjNjUjdoVFZFem51UFlRK28yemRVZ2NxWVYvVEJTSHZNWEJROXM4NnFubFVaU09UNDZYWSs4REpvYVdjdldaWVFYYlpPZFlpOWc0Z2cvSHA0YXlQMWVJMWlSeEFWakU2TzVyTXljM0xsMmVtMm5lLzMwWlZEbUlCZER3REZMWko0dTNPZGFSak5LRkdFNCIsIm1hYyI6IjIxYzNkNTM3MjVhOGVkN2Q5YjFjMDU2ZjYwM2QzM2MxMzVkYWIzODEwYmEyZDg1ODJiZjViMzUzZmU5NDBmYmIiLCJ0YWciOiIifQ==", 
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data.message)
      if (!response.ok) {
        console.log('Registration failed:', response.status, data);
        Alert.alert('Registration failed')
        const errorMessage = data.message || 'Failed to register';
        return rejectWithValue(errorMessage);
      }

      console.log("Registration successful");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(LOGIN_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'eyJpdiI6ImpDdHdQL0NHYzVNQmwwYmE0NFMxbnc9PSIsInZhbHVlIjoiRmZPN2poWjg4OHJkR2xjOGg5SDgwSmg5M0lXMUhXeFhzbUJZZ05hT21MMmd1TUlpUlhEMWo1ekJXU1dTMThnT0szYTlMSlQva3BoODc3cDJhS2sxZE5KMDhyR1U0VlhoSUp1Z3pVSEwydk9KZHpYbWg5SjNjUjdoVFZFem51UFlRK28yemRVZ2NxWVYvVEJTSHZNWEJROXM4NnFubFVaU09UNDZYWSs4REpvYVdjdldaWVFYYlpPZFlpOWc0Z2cvSHA0YXlQMWVJMWlSeEFWakU2TzVyTXljM0xsMmVtMm5lLzMwWlZEbUlCZER3REZMWko0dTNPZGFSak5LRkdFNCIsIm1hYyI6IjIxYzNkNTM3MjVhOGVkN2Q5YjFjMDU2ZjYwM2QzM2MxMzVkYWIzODEwYmEyZDg1ODJiZjViMzUzZmU5NDBmYmIiLCJ0YWciOiIifQ==', 
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        return rejectWithValue(result.message || 'Login failed');
      }

      // Save token to AsyncStorage
      await AsyncStorage.setItem('token', result.token);

      return result; // You might return user data or token
    } catch (error) {
      return rejectWithValue(error.message || 'An unexpected error occurred');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      // Clear token from AsyncStorage
      await AsyncStorage.removeItem('token');

      return; // No additional data to return
    } catch (error) {
      return rejectWithValue(error.message || 'An unexpected error occurred');
    }
  }
);

export const checkToken = createAsyncThunk(
  'auth/checkToken',
  async (_, { rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('token');

      if (!token) {
        return rejectWithValue('No token found');
      }

      // Optionally verify token with API
      // const response = await fetch('https://staging.ardent-training.com/api/student-verify', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'api-key': 'your-api-key-here'
      //   },
      //   body: JSON.stringify({ token })
      // });
      // const result = await response.json();

      // if (!response.ok) {
      //   return rejectWithValue(result.message || 'Token verification failed');
      // }

      return token; // Or return some user data if token is valid
    } catch (error) {
      return rejectWithValue(error.message || 'An unexpected error occurred');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null
  },
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = 'succeeded';
        state.user = null;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(checkToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkToken.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; // Or handle based on your requirement
        state.error = null;
      })
      .addCase(checkToken.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export default authSlice.reducer;
