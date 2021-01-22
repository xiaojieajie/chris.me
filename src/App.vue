<template>
  <section id="hero"
           class="hero">
    <img src="/@/assets/clouds/cloud-1.png"
         alt=""
         class="cloud cloud-1">
    <img src="/@/assets/clouds/cloud-2.png"
         alt=""
         class="cloud cloud-2">
    <img src="/@/assets/clouds/cloud-3.png"
         alt=""
         class="cloud cloud-3">
    <img src="/@/assets/clouds/cloud-4.png"
         alt=""
         class="cloud cloud-4">
    <img src="/@/assets/clouds/cloud-5.png"
         alt=""
         class="cloud cloud-5">
    <div style="position:absolute;">
      <c-button>asd</c-button>
    </div>
  </section>
  <section id="about"
           class="about">
    <img src="/@/assets/about/about-fish.png"
         alt=""
         class="about-fish">
    <div class="about-jellyfish">
      <img src="/@/assets/about/about-jellyfish.png">
    </div>
    <div class="beams">
      <img src="/@/assets/beams/beam-1.png"
           alt=""
           class="beam beam-1">
      <img src="/@/assets/beams/beam-2.png"
           alt=""
           class="beam beam-2">
      <img src="/@/assets/beams/beam-3.png"
           alt=""
           class="beam beam-3">
      <img src="/@/assets/beams/beam-4.png"
           alt=""
           class="beam beam-4">
      <img src="/@/assets/beams/beam-5.png"
           alt=""
           class="beam beam-5">
      <img src="/@/assets/beams/beam-6.png"
           alt=""
           class="beam beam-6">
      <img src="/@/assets/beams/beam-7.png"
           alt=""
           class="beam beam-7">
    </div>
    <div class="diver diver-1">
      <img src="/@/assets/divers/diver-1.png"
           alt="">
    </div>
    <div class="diver diver-2">
      <img src="/@/assets/divers/diver-2.png"
           alt="">
    </div>
    <div class="about-inside">
      <div class="about-inside-left">
        <h2 class="green">About</h2>
        <h3>The largest Laravel event of the year, streamed directly to you.</h3>
        <p>We’ve put together a full day of talks featuring some of Laravel’s brightest minds, and streaming them
          directly to your home or office.</p>
        <p>These talks are brand new and never before presented at any Laracon, including brand new feature announcements from Taylor Otwell, creator of Laravel. All talks are presented live during the event.</p>
        <p>Tickets are just $29. Don't miss the largest Laravel event ever!</p>
        <!-- <img src="/2020/assets/images/party.jpg"
             style="width:650px;"> -->
        <div style="opacity: 0.7;">Photo by Ruslan. Laracon viewing party in Basel, Switzerland</div>

        <h4>Can’t make it on August 26th?</h4>
        <p>No problem, all talks will be recorded and available online for viewing at your convenience shortly after the
          conference ends.</p>
        <h4>Winter 2017 - Winter 2020 Talks</h4>
        <p>Catch up on 30+ talks from the last 4 editions of Laracon Online.</p>
        <!-- <a href="https://vimeo.com/showcase/laracononline"
           target="laraconvids"
           class="btn btn-green">
          Watch Previous Years Talks
        </a> -->
      </div>
      <div class="about-inside-right">
        <div class="bubble bubble-1"
             style="transform: unset; transition: transform 0.1s ease 0s; will-change: transform;">
          <span class="bubble-1-top">4000+</span>
          <span>Attendees</span>
        </div>
        <div class="bubble bubble-2"
             style="transform: unset; transition: transform 0.1s ease 0s; will-change: transform;">
          <span class="bubble-2-top">100+</span>
          <span>Countries<br>Represented</span>
        </div>
        <div class="bubble bubble-3"
             style="transform: unset; transition: transform 0.1s ease 0s; will-change: transform;">
          <span class="bubble-3-top">1</span>
          <span>Amazing<br>Time</span>
        </div>
        <div class="bubble bubble-4"
             style="transform: unset; transition: transform 0.1s ease 0s; will-change: transform;"></div>
        <div style="transform: unset; transition: transform 0.1s ease 0s; will-change: transform;">
          <img class="element-1 bobbing"
               src="/@/assets/elements/shark.png">
        </div>
      </div>
    </div>
  </section>
  <section id="speakers"
           class="speakers">
    <div class="fullWidth">
      <img src="/@/assets/about/fish-sm.png"
           class="small-fish">
    </div>
    <img class="element-1"
         src="/@/assets/elements/turtle.png"
         style="transform: translate(0px, -17px); transition: transform 0.1s ease 0s; will-change: transform;">
  </section>
  <section id="waves"
           class="schedule">
    <img class="element element-1"
         src="/@/assets/elements/jellies.png"
         style="transform: translate(0px, -78px); transition: transform 0.1s ease 0s; will-change: transform;">
    <img class="element element-2"
         src="/@/assets/about/bubbles.png"
         style="transform: translate(0px, 429px); transition: transform 0.1s ease 0s; will-change: transform;">
    <div style="width:100%;height:500px;"></div>
    <!-- <canvas width="860"
            height="544"
            style="touch-action: auto; transform: scale(1); cursor: inherit;display:none;"></canvas> -->
  </section>
  <section class="partners">
    <div class="submarine">
      <img class="element element-1"
           src="/@/assets/elements/submarine.png"
           style="transform: translate(-76px, 0px); transition: transform 0.1s ease 0s; will-change: transform;">
    </div>
    <img class="element element-2"
         src="/@/assets/about/bubbles.png"
         style="transform: translate(0px, 429px); transition: transform 0.1s ease 0s; will-change: transform;">
    <img class="element element-3"
         src="/@/assets/about/bubbles.png"
         style="transform: translate(0px, 429px); transition: transform 0.1s ease 0s; will-change: transform;">
  </section>
  <section class="mingling-swag">

  </section>
  <section class="footer">
    <div class="angler">
      <img class="element-1"
           src="/@/assets/elements/angler-fish.png">
    </div>
  </section>
</template>

<script>
import CButton from '/@c/Button/index.vue'
import * as PIXI from 'pixi.js'
import { nextTick } from 'vue'
import sbImg from '/@/assets/backgrounds/schedule-bottom.jpg'
import cloud from '/@/assets/about/cloud.jpg'
function initPixi() {
  let image = new PIXI.Sprite.from(sbImg)
  let displacementSprite = new PIXI.Sprite.from(cloud)
  let canvas = document.getElementById('waves')
  let width = window.innerWidth
  let height = width * 0.6333
  let app = new PIXI.Application({
    width: width,
    height: height,
    autoPreventDefault: false
  })

  canvas.height = height
  canvas.appendChild(app.view)

  image.width = width
  image.height = height
  app.stage.addChild(image)

  let displacementFilter = new PIXI.filters.DisplacementFilter(
    displacementSprite
  )
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT
  app.stage.addChild(displacementSprite)
  app.stage.filters = [displacementFilter]

  app.renderer.view.style.transform = 'scale(1)'
  app.renderer.view.style.touchAction = 'auto'
  app.renderer.plugins.interaction.autoPreventDefault = false
  displacementSprite.scale.x = 4
  displacementSprite.scale.y = 3
  animate(displacementSprite)
}
function animate(displacementSprite) {
  displacementSprite.x += 4
  displacementSprite.y += 6
  requestAnimationFrame(() => {
    animate(displacementSprite)
  })
}

export default {
  name: 'App',
  components: { CButton },
  setup() {
    // const theme =
    //   localStorage.theme === 'dark' ||
    //   (!('theme' in localStorage) &&
    //     window.matchMedia('(prefers-color-scheme: dark)').matches)
    // const html = document.querySelector('html') as HTMLElement
    // html.classList[theme ? 'add' : 'remvoe']('dark')

    nextTick(() => {
      initPixi()
    })
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background-color: #f6ead0;
  background-image: url('./assets/backgrounds/hero-bottom-new.png'),
    url('./assets/backgrounds/hero.jpg');
  background-repeat: no-repeat, no-repeat;
  background-position: bottom center, 50% -100px;
  background-size: 100%, 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1260px;
  margin-bottom: -1px;
  position: relative;

  .cloud {
    position: absolute;
    max-width: 300px;
    animation-iteration-count: infinite;
    &.cloud-1 {
      right: 200px;
      top: 300px;
      animation-name: cloud-right-1;
      animation-duration: 50s;
    }
    &.cloud-2 {
      left: 100px;
      top: 360px;
      animation-name: cloud-left-2;
      animation-duration: 60s;
    }
    &.cloud-3 {
      right: 100px;
      top: 440px;
      animation-name: cloud-right-1;
      animation-duration: 70s;
    }
    &.cloud-4 {
      left: 50px;
      top: 200px;
      animation-name: cloud-left-2;
      animation-duration: 40s;
    }
    &.cloud-5 {
      right: 100px;
      top: 140px;
      animation-name: cloud-right-1;
      animation-duration: 40s;
    }
  }
}
.about {
  background: #054b5d;
  background-image: url(./assets/backgrounds/about-left.png),
    url(./assets/backgrounds/about-right.png),
    url(./assets/backgrounds/about-top.jpg);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: center left, center right, center top;
  background-size: 240px auto, 285px auto, 100% auto;
  display: flex;
  justify-content: center;
  color: #ffffff;
  min-height: 1400px;
  padding-top: 100px;
  position: relative;
  .about-fish {
    position: absolute;
    right: 6vw;
    top: 12vw;
    width: 10vw;
    animation: bobbing 9000ms ease-in-out infinite alternate;
  }
  .about-jellyfish {
    position: absolute;
    right: 6vw;
    top: 79%;
    width: 40px;
    animation: bobbing 6000ms ease-in-out infinite alternate-reverse;
  }
  .beams {
    top: -110px;
    width: 100vw;
    height: 708px;
    position: absolute;
    overflow-x: hidden;
    .beam {
      position: absolute;
      transform: unset;
      transition: transform 0.1s ease 0s;
      will-change: transform;
      &.beam-1 {
        left: 5%;
      }
      &.beam-2 {
        left: 20%;
        top: -140px;
      }
      &.beam-3 {
        left: 30%;
      }
      &.beam-4 {
        left: 45%;
      }
      &.beam-5 {
        left: 60%;
      }
      &.beam-6 {
        left: 80%;
      }
      &.beam-7 {
        left: 90%;
        top: -140px;
      }
    }
  }
  .diver {
    position: absolute;
    &.diver-1 {
      transform: translate(0px, -2px);
      transition: transform 0.1s ease 0s;
      will-change: transform;
      left: 40%;
      top: 22%;
      &::after {
        content: url(./assets/about/bubbles.svg);
        position: absolute;
        bottom: 25%;
        right: 60px;
        width: 40px;
        height: 67px;
        z-index: -1;
        opacity: 0.5;
      }
    }
    &.diver-2 {
      transform: translate(0px, 19px);
      transition: transform 0.1s ease 0s;
      will-change: transform;
      left: 50%;
      top: 15%;
      &::after {
        content: url(./assets/about/bubbles.svg);
        position: absolute;
        bottom: 17%;
        left: 34px;
        width: 30px;
        height: 50px;
        z-index: -1;
        opacity: 0.3;
        transform: rotateY(180deg);
        transform-origin: bottom center;
      }
    }
  }
  .about-inside {
    width: 100%;
    padding: 0 12vw;
    display: flex;
    z-index: 1;
    .about-inside-left {
      width: 50%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
    .about-inside-right {
      width: 50%;
      position: relative;
      .bubble {
        text-transform: uppercase;
        letter-spacing: 2px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        position: absolute;
        &.bubble-1 {
          background-image: url(./assets/about/bubble-1.png);
          width: 242px;
          height: 196px;
          top: 100px;
          left: 120px;
        }
        &.bubble-2 {
          background-image: url(./assets/about/bubble-2.png);
          width: 201px;
          height: 168px;
          top: 320px;
          left: 100px;
          font-size: 12px;
          line-height: 18px;
        }
        &.bubble-3 {
          background-image: url(./assets/about/bubble-3.png);
          width: 123px;
          height: 129px;
          top: 500px;
          left: 200px;
          font-size: 10px;
          line-height: 16px;
        }
        &.bubble-4 {
          background-image: url(./assets/about/bubble-4.png);
          width: 72px;
          height: 102px;
          top: 640px;
          left: 160px;
        }
      }
      .element-1 {
        position: absolute;
        top: 740px;
        left: 160px;
        &.bobbing {
          animation: bobbing 6000ms ease-in-out infinite alternate;
        }
      }
    }
  }
}
.speakers {
  background-color: #001f34;
  background-image: url(./assets/backgrounds/speakers-top.jpg),
    url(./assets/backgrounds/speakers-bottom.jpg);
  background-repeat: no-repeat, no-repeat;
  background-position: top center, bottom center;
  background-size: 100%, 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 1700px;
  padding-top: 300px;
  padding-bottom: 33vw;
  position: relative;
  .fullWidth {
    width: 100vw;
    height: 14vw;
    top: -8vw;
    overflow: hidden;
    position: absolute;
  }
  .small-fish {
    position: absolute;
    right: 16vw;
    top: 6vw;
    width: 7vw;
    transform: perspective(400px) translate(-1200%, 25%) scale(1);
    animation: swimmingFish 24s ease infinite;
  }
  .element-1 {
    position: absolute;
    left: 0;
    top: -80px;
    z-index: 0;
  }
}
.schedule {
  position: relative;
  background-color: #051228;
  background-image: url(./assets/backgrounds/schedule-bottom.jpg);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  // canvas {
  //   margin-top: -20vw;
  //   width: 100vw;
  //   height: calc(100vw * 0.6333);
  //   background-color: #051228;
  // }
  .element {
    position: absolute;
    z-index: 0;
    &.element-1 {
      top: 0;
      right: 20px;
    }
    &.element-2 {
      bottom: 0;
      width: 100%;
    }
  }
}
.partners {
  background-color: #020221;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1000px;
  position: relative;
  .element {
    position: absolute;
    z-index: 0;
    &.element-2 {
      top: 0;
      width: 100%;
    }
    &.element-3 {
      bottom: 0;
      width: 100%;
    }
  }
  .submarine {
    height: 503px;
    width: 70vw;
    position: absolute;
    left: 0;
    top: 40%;
    z-index: 0;
    overflow-x: hidden;
  }
}
.mingling-swag {
  background-color: #020221;
  background-image: url(./assets/backgrounds/partners-bottom.png);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 100%;
  position: relative;
  display: flex;
  color: #ffffff;
  padding: 0 12vw 580px;
}
.footer {
  background: #110c2a;
  background-image: url(./assets/backgrounds/footer-bottom.png);
  background-repeat: no-repeat;
  background-position: bottom center;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 700px;
  position: relative;
  .angler {
    position: absolute;
    right: 0;
    top: -40px;
    &::after {
      content: '';
      background: #57ffe9;
      background: radial-gradient(
        circle,
        rgba(87, 255, 233, 0.8) 0%,
        rgba(122, 202, 196, 0) 30%
      );
      width: 30%;
      height: 30%;
      border-radius: 50%;
      mix-blend-mode: hard-light;
      position: absolute;
      top: 0;
      left: 3%;
      transform: scale(1);
      animation: pulse 2600ms ease-in-out infinite alternate;
    }
  }
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(4.5);
  }
}
@keyframes swimmingFish {
  0% {
    transform: perspective(400px) translate(-1200%, 10%) scale(1);
  }
  10% {
    transform: perspective(400px) translate(-1000%, -45%) scale(0.7);
    opacity: 0.6;
  }
  20% {
    transform: perspective(400px) translate(-700%, 0) scale(1.2);
    opacity: 1;
  }
  30% {
    transform: perspective(400px) translate(-500%, -30%) scale(1);
  }
  40% {
    transform: perspective(400px) translate(-400%, 10%) scale(0.8);
    opacity: 0.85;
  }
  50% {
    transform: perspective(400px) translate(-250%, -10%) scale(1);
    opacity: 1;
  }
  60% {
    transform: perspective(400px) translate(-100%, 35%) scale(0.65);
    opacity: 0.6;
  }
  75% {
    transform: perspective(400px) translate(150%, -15%) scale(0.55);
    opacity: 0.4;
  }
  90% {
    transform: perspective(400px) translate(240%, -40%) scale(0.95);
    opacity: 0.75;
  }
  100% {
    transform: perspective(400px) translate(600%, 100%) scale(0.5);
  }
}

@keyframes bobbing {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes cloud-right-1 {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes cloud-right-2 {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes cloud-left-1 {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes cloud-left-2 {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
