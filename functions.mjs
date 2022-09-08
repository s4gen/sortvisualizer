let sleepTime = 50
let ctx = canvas.getContext('2d', { alpha: false })

export let randomArray = []

export async function bubbleSort(array) {
    let n = array.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
                await sleep()
            }
        }
    }
}

export async function heapsort(array) {
    let size = array.length
    buildMaxHeap(array)
    for (let i = array.length - 1; i > 0; i--) {
        swap(array, 0, i)
        size--
        heapify(array, 0, size)
        await sleep(sleepTime)
    }
    return array
}

export async function buildMaxHeap(list) {
    for (let i = Math.floor(list.length / 2); i >= 0; i--) {
        heapify(list, i, list.length)
    }
    return list
}

export async function heapify(list, i, size) {
    let left = 2 * i + 1
    let right = 2 * i + 2
    let max = i

    if (left < size && list[left] > list[max]) {
        max = left
    }

    if (right < size && list[right] > list[max]) {
        max = right
    }

    if (max !== i) {
        swap(list, i, max)
        heapify(list, max, size)
        await sleep(sleepTime)
    }
}

export function generateArray(length) {

    for (let i = 0; i < 800; i++) {
        randomArray.push(Math.floor(Math.random() * 800))
        randomArray.push(Math.floor(Math.random() * 800))
    }
    return randomArray
}

export async function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 800)
        await sleep()
        renderPillar(i, array[i], "white")
    }
    return array
}

export function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j = right; //right pointer
    
    
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swapping two elements
            i++;
            j--;
        }
    }
    return i;
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function quicksort(items, left, right) {
    await sleep(sleepTime)
    let index
    if (items.length > 1) {
        index = partition(items, left, right) //index returned from partition
        await sleep(sleepTime)
        if (left < index - 1) { //more elements on the left side of the pivot
            quicksort(items, left, index - 1)
            await sleep(sleepTime)
        }
        if (index < right) { //more elements on the right side of the pivot
            quicksort(items, index, right)
            await sleep(sleepTime)
        }
    }
    return items
}

export async function swap(list, i, j) {
    let temp = list[i]
    list[i] = list[j]
    list[j] = temp
    renderPillar(i, list[i], "white")
    await sleep(sleepTime)
    renderPillar(j, list[j], "white")
    await sleep(sleepTime)
}

export function renderPillar(x, height, color) {
    ctx.fillStyle = "#222222"
    ctx.fillRect(x, 0, 1, canvas.height)

    ctx.fillStyle = color
    ctx.fillRect(x, canvas.height - height, 1, height)
}

export function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }
    return true
}

export async function insertionsort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1
        let temp = array[i]
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j]
            j--
            await sleep(sleepTime)
        }
        array[j + 1] = temp
    }
    return array
}