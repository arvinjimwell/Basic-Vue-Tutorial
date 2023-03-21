const { createApp } = Vue

createApp({
    data() {
        return {
            product: 'Socks',
            description: "This socks to be wear!",
            image: "./stress.jpg",
            stress_level: 100,
            cars: ["BMW", "Toyota", "Mitsubishi", "BMX"]
        }
    }
}).mount('#app')