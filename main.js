const { createApp } = Vue

createApp({
    data() {
        return {
            product: 'Socks',
            description: "This socks to be wear!",
            image: "./stress.jpg",
            stress_level: 100,
            cars: ["BMW", "Toyota", "Mitsubishi", "BMX"],
            count: 0
        }
    },
    methods: {
        changeImage() {
            if(this.image == "./stress.jpg"){
                this.image = "./woah.jpg"
                this.stress_level = 20;
                this.description = this.count > 1 ? "Oops you found me again!":"Oops you found me!"
            }
            else
            {
                this.image = "./stress.jpg"
                this.stress_level = 100
                this.description = this.count > 10 ? "Stop hovering me" : "Stress again"
            }
            this.count++
        }
    }
}).mount('#app')