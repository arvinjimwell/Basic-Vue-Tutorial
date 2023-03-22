const { createApp } = Vue

createApp({
    data() {
        return {
            name: "This is a name",
            product: 'Socks',
            description: "This socks to be wear!",
            image: "./stress.jpg",
            stress_level: 100,
            cars: ["BMW", "Toyota", "Mitsubishi", "BMX"],
            count: 0,
            errors: []
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
        },
        onSubmit(){
            let human = {
                name: this.name,
                product: this.product,
                stress_level: this.stress_level
            }
        }
    },
    computed: {
        nameComp() {
            return this.name + " " + this.product
        }
    }
}).mount('#app')