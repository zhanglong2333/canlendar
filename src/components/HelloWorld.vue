
<template>
  <div class="main">
    <div class="choose_year">
      <div
        class="icon"
        @click="chooseYears(-1)"
      >
       <!-- 此处应该是双箭头  懒得找了 如有需要就自己找找吧 orz~ -->
      <van-icon name="arrow-left" />
      </div>
      <div
        class="icon"
        @click="chooseMonth(-1)"
      ><van-icon name="arrow-left" /></div>
      <div class="date">{{year}}.{{month.toString().padStart(2, '0')}}</div>
      <div
        class="icon"
        @click="chooseMonth(1)"
      ><van-icon name="arrow" /></div>
      <div
        class="icon"
        @click="chooseYears(1)"
      >
      <!-- 此处应该是双箭头  懒得找了 如有需要就自己找找吧 orz~ -->
      <van-icon name="arrow" />
      </div>
    </div>
    <div class="days_area">
      <div
        class="day week"
        v-for="week in weeks"
        :key="week"
      >{{week}}</div>
      <div
        class="day"
        @click="chooseThisDay(day.gregorian)"
        v-for="(day, index) in days"
        :key="index"
        :class="day.gregorian === today ? 'choose_day' : ''"
      >
        <p>{{day.gregorian}}</p>
        <span>{{day.lunar.IDayCn}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {calendarFormatter} from '../assets/js/calendar.js'
export default {
  name: "calendar",
  data() {
    return {
      year: 0,
      month: 0,
      today: 0,
      days: [],
      weeks: ["一", "二", "三", "四", "五", "六", "日"]
    };
  },
  mounted() {
    const now = new Date();
    this.year = now.getFullYear();
    this.month = now.getMonth() + 1;
    this.today = now.getDate();
    this.getDays();
  },
  methods: {
    getDays() {
      // 获取当前月份所有公历日期及其农历日期
      this.days = [];
      const day = new Date();
      day.setFullYear(this.year, this.month - 1, 1); // 此处较之前调整，获取当月第一天
      const month = new Date();
      month.setFullYear(this.year, this.month, 0); // 此处较之前调整，获取当月
      for (let i = 1; i < day.getDay(); i++) {
        // 当月第一天距离所在周周一的空白占位
        this.days.push({ gregorian: "", lunar: "" });
      }
      for (let i = 1; i <= month.getDate(); i++) {
        // 获取当月天数填充日历
        this.days.push({
          gregorian: i,
          lunar: calendarFormatter.solar2lunar(this.year, this.month, i)
        });
      }
    },
    chooseYears(state) {
      // 改变年份
      this.year += state;
      this.today = 1;
      this.getDays();
    },
    chooseMonth(state) {
      // 改变月份
      this.month += state;
      this.today = 1;
      if (this.month < 1) {
        this.month = 12;
        this.chooseYears(-1);
      } else if (this.month > 12) {
        this.month = 1;
        this.chooseYears(1);
      } else {
        this.getDays();
      }
    },
    chooseThisDay(day) {
      // 选择某天，主要是考虑可以当时间选择器用
      if (day > 0) {
        this.today = day;
      }
    }
  }
};
</script>
<style scoped>
.main {
}
.choose_year {
  display: flex;
}
.icon {
  width: 10%;
  height: 8vh;
  line-height: 8vh;
  text-align: center;
}
.date {
  width: 60%;
  text-align: center;
  height: 8vh;
  line-height: 8vh;
  font-size: 1.2rem;
}
.days_area {
  display: flex;
  flex-wrap: wrap;
}
.day {
  width: 14.28%;
  text-align: center;
  padding: 1vh 0;
  margin-top: 1vh;
}
p {
  margin: 0;
  font-size: 6vw;
}
span {
  font-size: 3vw;
}
.week {
  background-color: #F3C082;
  color: #fff;
  font-weight: bold;
  height: 6vh;
  line-height: 4vh;
  margin: 0;
}
.choose_day {
  background-color: #F3C082;
  color: #fff;
  font-weight: bold;
}
</style>
