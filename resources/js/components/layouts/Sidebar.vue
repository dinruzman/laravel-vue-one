<template>
    <!-- component -->
    <aside class="w-48 bg-gradient-to-r from-blue-800 to-blue-900 min-h-full h-screen flex flex-col items-center pt-5 pb-2 space-y-7 overflow-y-scroll">
    <!-- menu items -->
        <div class="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
            <div class="font-QuicksandMedium pl-4 text-white text-xs text-[11px] uppercase">Menu</div>

            <div class="w-full flex items-center gap-x-1.5 group select-none">

            </div>

            <router-link to="/" class="w-full flex items-center gap-x-1.5 group select-none">
                <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-0 bg-red-600 transition-all duration-300"></div>
                </div>
                <div class="bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
                    Home
                </div>
            </router-link>

            <router-link to="/dashboard" class="w-full flex items-center gap-x-1.5 group select-none">
                <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
                </div>
                <div class="text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
                    dashboard
                </div>
            </router-link>
        </div>

        <!-- menu items -->
        <div class="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">

            <div class="font-QuicksandMedium pl-4 text-white text-xs text-[11px] uppercase">Profile</div>

            <div class="w-full flex items-center gap-x-1.5 group select-none">
                <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-600 transition-all duration-300"></div>
                </div>
                <div class="text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
                    <span class="font-QuicksandMedium">log out</span>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        name: 'Sidebar'
    }
</script>
