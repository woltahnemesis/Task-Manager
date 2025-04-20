require('../src/db/mongoose')
const User = require('../src/models/user')

// 67ee417c96e08d13f21f68bd

// User.findByIdAndUpdate('67ee430d8c56591cab31d691', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('67f1b71c7d444315a60a64d9', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})