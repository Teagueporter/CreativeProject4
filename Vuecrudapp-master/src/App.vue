<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/tasks" exact class="item">
           <i class="tasks icon"></i> Tasks
          </router-link>
          <router-link to="/tasks/new" class="item">
            <i class="plus circle icon"></i> New
          </router-link>
      
        </div>
      </div>
    </div>

    <div class="ui text container">
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
    <div class="api">
    <div class="container1"><a target="_blank" href="https://github.com/BYUCS260/weather-app-Teagueporter">GitHub</a>
    
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
#app > div.navbar {
  margin-bottom: 1.5em;
}
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50;
  right: 0;
}
input {
  width: 300px;
}
div.label {
  width: 120px;
}
div.input {
  margin-bottom: 10px;
}
button.ui.button {
  margin-top: 15px;
  display: block;
}

.container1{
  background-color: black;
  margin:0;
  padding: 0;
  bottom: 0;
  position: relative;
  text-align: center;

}
.api {
  color: white;
  background-color: black;
  background: var(--bg_main);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0px;
  text-align: bottom;
}

.api a {
  text-decoration: underline;
}

.api a:hover {
  text-decoration: none;
}
</style>