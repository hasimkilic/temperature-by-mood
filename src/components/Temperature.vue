<template>
  <div class="body">
    <div class="container">
    <ul>
      <img class="img" src="@/assets/sunny.png" alt="weather">
      <li>
        <span class="bigTitle">{{this.temp[this.h]}} °C</span>
      </li>
      <li>
        <span class="title yellow">Date Time</span>
        <br>
        <br>
        <span class="subTitle">{{this.hours.time[this.h].toString().split("T").join(" - ")}}</span>
        <br>
      </li>
      <li>
        <span class="title red">By Mood</span>
        <br>
        <br>
        <span class="subTitle">{{this.getWeather(this.temp[this.h])}}</span>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import derece from '@/services/derece'

export default {
  name: 'Temperature',
  data() {
    return {
      hours:[], // hours
      temp: [], // temperatures
      value:null,
      derece : new derece(),
      d : new Date(),
      h : new Date().getHours(),
      m : new Date().getSeconds(),
    }
  },
  created() {
    this.derece.getData().then(res =>{
      this.temp = res.data.hourly.temperature_2m;
      this.hours = res.data.hourly;
      this.getWeather(this.value);
    })
  },
  methods: {
    getWeather(value){
        if (value < 5) {
          return "Sick"
        }
        else if (value < 10) {
          return "Depressed"
        }
        else if (value < 15) {
          return "Low"
        }
        else if (value < 25){
          return "Cheerful"
        }
        else if (value < 30) {
          return "Joyful"
        }
        else if (value < 35) {
          return "Bored"
        }
        else {
          return "Angry"
        }
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400;500&display=swap');
.container{
  width: 80%;
  height: 100vh;
  background-color:#4990E2;
  margin:0 auto;
  font-family: 'Edu VIC WA NT Beginner', cursive;
  font-size: 1.8rem;
  word-spacing: 3px;
  border-radius: 4rem;
  box-shadow: -31px 36px 26px -23px rgba(0,0,0,0.75);
}
.container ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container ul li{
  padding: 1.6rem 0;
  text-align: center;
}
.img{
  width: 200px;
  height: 200px;
}
.bigTitle{
  font-size: 4rem;
  line-height: 1rem;
  font-weight: bold;
}
.title{
  font-size: 2.4rem;
  font-weight: bold;
  text-decoration:underline;
}
.subTitle{
  font-weight: bold;
}
.yellow{
  color: #FFCC00;
}
.red{
  color:red;
}

</style>

