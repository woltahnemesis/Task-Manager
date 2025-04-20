require('../src/db/mongoose')
const Task = require('../src/models/task')

// 67f1ba92a703e0f25db38808

// Task.findByIdAndDelete('67f1ba92a703e0f25db38808').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('67f1ba48fa8a73046dc90511').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})