<template>
    <div class="main ">
      <input type="checkbox" id="chk" aria-hidden="true">
      <div class="signup">
        <form>
          <label for="chk" aria-hidden="true">Sign up</label>
          <input type="text" name="txt" placeholder="User name" required>
          <input type="email" name="email" placeholder="Email" required>
          <input type="password" name="pswd" placeholder="Password" required>
          <button>Sign up</button>
        </form>
      </div>
      <div class="login">
        <form>
          <label for="chk" aria-hidden="true">Login</label>
          <input type="email" name="email" placeholder="Email" required>
          <input type="password" name="pswd" placeholder="Password" required>
          <button>Login</button>
        </form>
      </div>
    </div>
</template>

<style scoped>


.main {
    width: 350px;
    height: 500px;
    background: red;
    overflow: hidden;
    background-image: linear-gradient(45deg, rgb(73, 160, 30) 0%, rgb(73, 160, 30) 6%, rgb(88, 141, 55) 6%, rgb(88, 141, 55) 11%, rgb(103, 122, 81) 11%, rgb(103, 122, 81) 55%, rgb(118, 103, 106) 55%, rgb(118, 103, 106) 81%, rgb(132, 84, 131) 81%, rgb(132, 84, 131) 83%, rgb(147, 65, 156) 83%, rgb(147, 65, 156) 92%, rgb(162, 46, 182) 92%, rgb(162, 46, 182) 95%, rgb(177, 27, 207) 95%, rgb(177, 27, 207) 100%), linear-gradient(112.5deg, rgb(73, 160, 30) 0%, rgb(73, 160, 30) 6%, rgb(88, 141, 55) 6%, rgb(88, 141, 55) 11%, rgb(103, 122, 81) 11%, rgb(103, 122, 81) 55%, rgb(118, 103, 106) 55%, rgb(118, 103, 106) 81%, rgb(132, 84, 131) 81%, rgb(132, 84, 131) 83%, rgb(147, 65, 156) 83%, rgb(147, 65, 156) 92%, rgb(162, 46, 182) 92%, rgb(162, 46, 182) 95%, rgb(177, 27, 207) 95%, rgb(177, 27, 207) 100%), linear-gradient(67.5deg, rgb(73, 160, 30) 0%, rgb(73, 160, 30) 6%, rgb(88, 141, 55) 6%, rgb(88, 141, 55) 11%, rgb(103, 122, 81) 11%, rgb(103, 122, 81) 55%, rgb(118, 103, 106) 55%, rgb(118, 103, 106) 81%, rgb(132, 84, 131) 81%, rgb(132, 84, 131) 83%, rgb(147, 65, 156) 83%, rgb(147, 65, 156) 92%, rgb(162, 46, 182) 92%, rgb(162, 46, 182) 95%, rgb(177, 27, 207) 95%, rgb(177, 27, 207) 100%), linear-gradient(90deg, rgb(24, 15, 143), rgb(170, 57, 157));
    background-blend-mode: overlay, overlay, overlay, normal;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
}

#chk {
    display: none;
}

.signup {
    position: relative;
    width: 100%;
    height: 100%;
}

label {
    color: #fff;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
}

input {
    width: 60%;
    height: 20px;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
}

button {
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #573b8a;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
}

button:hover {
    background: #6d44b8;
}

.login {
    height: 460px;
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: .8s ease-in-out;
}

.login label {
    color: #573b8a;
    transform: scale(.6);
}

#chk:checked~.login {
    transform: translateY(-500px);
}

#chk:checked~.login label {
    transform: scale(1);
}

#chk:checked~.signup label {
    transform: scale(.6);
}
</style>

<template>

    <SignForm />
</template>

<script>
import SignForm from './components/SignForm.vue'

export default {
    name: 'App',
    components: {
        SignForm
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>