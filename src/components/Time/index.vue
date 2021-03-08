<template>
  <div id="time">
    <canvas id="clock" ref="clock" width="200" height="200"></canvas>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'

function draw(ctx: CanvasRenderingContext2D) {
  const circle = {
    x: 100,
    y: 100,
    radius: 70,
    color: 'red', // 刻度颜色
    // color: 'rgba(255, 255, 255)', // 刻度颜色
    outer: {
      lineWidth: 1,
      border: 'red'
    },
    inner: {
      lineWidth: 1,
      border: 'red'
    }
  }
  //   ctx.beginPath()
  //   ctx.strokeStyle = '#eee'
  //   ctx.moveTo(200, 0)
  //   ctx.lineTo(200, 400)
  //   ctx.stroke()
  //   ctx.moveTo(0, 200)
  //   ctx.lineTo(400, 200)
  //   ctx.stroke()
  drawOuterCircle()
  drawInnerCircle()
  drawTicks()

  function drawOuterCircle() {
    ctx.beginPath()
    ctx.lineWidth = circle.outer.lineWidth
    ctx.arc(circle.x, circle.y, circle.radius + 8, 0, Math.PI * 2)
    ctx.strokeStyle = circle.outer.border
    ctx.stroke()
    ctx.save()
  }
  function drawInnerCircle() {
    ctx.beginPath()
    ctx.lineWidth = circle.inner.lineWidth
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
    ctx.strokeStyle = circle.inner.border
    ctx.stroke()
    ctx.save()
  }

  function drawTicks() {
    ctx.save()
    for (let i = 0; i < 12; i++) {
      drawTick((i * Math.PI) / 6, 15, 5, i % 3 === 0 ? String(i + 3) : '')
    }
    ctx.restore()
  }
  function drawTick(
    angle: number,
    tickWidth: number,
    dis: number,
    text: string
  ) {
    ctx.beginPath()
    const aimX1 = circle.x + (circle.radius - tickWidth) * Math.cos(angle)
    const aimY1 = circle.y + (circle.radius - tickWidth) * Math.sin(angle)
    const aimX2 = circle.x + (circle.radius - tickWidth + dis) * Math.cos(angle)
    const aimY2 = circle.y + (circle.radius - tickWidth + dis) * Math.sin(angle)
    if (text) {
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = circle.color
      ctx.font = '14px "微软雅黑"'
      ctx.fillText(text, aimX1, aimY1)
    } else {
      ctx.moveTo(aimX1, aimY1)
      ctx.lineTo(aimX2, aimY2)
    }

    ctx.strokeStyle = circle.color
    ctx.stroke()
  }
}
export default {
  name: 'Time',
  components: {},
  setup() {
    const clock = ref<HTMLCanvasElement | null>(null)
    onMounted(() => {
      if (clock.value) {
        draw(clock.value.getContext('2d') as CanvasRenderingContext2D)
      }
    })
    return { clock }
  }
}
</script>
<style lang="scss" scoped>
#time {
}
</style>
