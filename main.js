const { createApp } = Vue

createApp({
    data() {
        return {
            product: 'Socks',
            description: "This socks to be wear!",
            image: "./stress.jpg"
        }
    }
}).mount('#app')