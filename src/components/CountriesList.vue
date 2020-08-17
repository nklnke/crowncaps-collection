<template lang="pug">
    .countries-list
      //-
        <a class="list-inline-item">Германия <span class="badge badge-light">12</span></a>
        <a class="list-inline-item">Китай <span class="badge badge-light">2</span></a>
        регуляркой отсечь всё, что после ` <`
      a.list-inline-item Все
      //- <span class="badge badge-light counter">2</span>
      a.list-inline-item Австралия
      a.list-inline-item Австрия
      a.list-inline-item Армения
      a.list-inline-item Бельгия
      a.list-inline-item Великобритания
      a.list-inline-item Германия
      a.list-inline-item Греция
      a.list-inline-item Грузия
      a.list-inline-item Дания
      a.list-inline-item Индонезия
      a.list-inline-item Испания
      a.list-inline-item Италия
      a.list-inline-item Казахстан
      a.list-inline-item Китай
      a.list-inline-item Латвия
      a.list-inline-item Литва
      a.list-inline-item Мексика
      a.list-inline-item Нидерланды
      a.list-inline-item Польша
      a.list-inline-item Россия
      a.list-inline-item Румыния
      a.list-inline-item СССР
      a.list-inline-item США
      a.list-inline-item Таиланд
      a.list-inline-item Турция
      a.list-inline-item Украина
      a.list-inline-item Финляндия
      a.list-inline-item Франция
      a.list-inline-item Хорватия
      a.list-inline-item Чехия
      a.list-inline-item Юж.Корея
      a.list-inline-item N/A
</template>

<script>
export default {

};
</script>

<style lang="sass" scoped>
.countries-list
  display: flex
  justify-content: center
  flex-wrap: wrap
  width: 100%
  height: 100%

  background: $lightblue

  a
    padding: $padding/1.5 $padding/1.15
    margin: 0
    color: white
    cursor: pointer

    &:hover
      color: white
      background-color: $blue
      text-decoration: none
</style>
