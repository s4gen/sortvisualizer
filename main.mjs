// Other
let sleepTime = 50

// Importing all sorting related functions.
import { heapsort, buildMaxHeap, heapify, generateArray, shuffleArray, randomArray, renderPillar, partition, sleep, quicksort, swap, isSorted, bubbleSort, insertionsort} from './functions.mjs'

// Functions.
function renderCanvas() {
    for (let i = 0; i < pillars.length; i++) {
        renderPillar(i, pillars[i], "white")
    }
}

// Rendering canvas.
const canvas = document.getElementById('canvas')
const shuffle = document.getElementById('shuffle')
const sort = document.getElementById('sort')
const SCALING_FACTOR = 8
let action = false
let ctx = canvas.getContext('2d', { alpha: false })
ctx.canvas.width = SCALING_FACTOR * canvas.width
ctx.canvas.height = SCALING_FACTOR * canvas.height

// Render canvas background.
ctx.fillStyle = "#222222"
ctx.fillRect(0, 0, canvas.width, canvas.height)

// Generating the pillars.
let pillars = generateArray(canvas.width)
renderCanvas()

// Event listeners.
shuffle.addEventListener('click', function () {
    if (action) {
        return
    } else {
        action = true
        shuffleArray(pillars).then(() => {
            action = false
        })
    }
})

sort.addEventListener('click', async function () {
    if (action) {
        return
    } else {
        action = true
        if (!(isSorted(pillars))) {
            quicksort(pillars, 0, pillars.length - 1)
        }
        while (true) {
            await sleep(100)
            if (isSorted(pillars)) {
                action = false
                break
            }
        }
    }
})
