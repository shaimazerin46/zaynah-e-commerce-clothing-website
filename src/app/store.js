import { slidersApi } from "@/services/slider";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [slidersApi.reducerPath] : slidersApi.reducer,
    },

    // for caching, invalidation, polling
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(slidersApi.middleware),

});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)