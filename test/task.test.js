const request = require('supertest')

const { app, mongoose } = require('../app')
const TaskModel = require('../model/taskModel')

const id = new mongoose.Types.ObjectId()
const fakeId = new mongoose.Types.ObjectId()

const task = {
    _id: id,
    description: 'Today i have to clean the house',
    isCompleted: false
}

beforeEach(async () => {
    await TaskModel.deleteMany({})
    await TaskModel.insertOne(task)
})


describe('API task tests', () => {

    test('it should create a new task', async () => {
        const res = await request(app)
            .post('/tasks')
            .send({
                description: 'Do the laundry',
                isCompleted: false
            })
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ message: 'Task has been created' })
    })


    test("it should not create a task", async () => {
        const res = await request(app)
            .post('/task')
            .send({})
        expect(res.statusCode).toBe(404)
    })

    test("it should not create a task with invalid field", async () => {
        const res = await request(app)
            .post('/task')
            .send({
                description: 'Do the laundry',
                isCompleted: 'false'
            })
        expect(res.statusCode).toBe(404)
    })

    test("it should not create a task with empty field", async () => {
        const res = await request(app)
            .post('/task')
            .send({
                description: '',
                isCompleted: 'false'
            })
        expect(res.statusCode).toBe(404)
    })


    test('it should to return all documents', async () => {
        const res = await request(app).get(`/tasks`)
        expect(res.statusCode).toBe(200)
    })

    test('it should to return the document', async () => {
        const res = await request(app).get(`/tasks/${id}`)
        expect(res.statusCode).toBe(200)
        expect(res.body.doc.description).toEqual('today i have to clean the house')
    })

    test('it should not to return the document', async () => {
        const res = await request(app)
            .get(`/tasks/${fakeId}`)
        expect(res.statusCode).toBe(404)
    })


    test('it should to update the doc with fakeId', async () => {
        const res = await request(app)
            .patch(`/tasks/${id}`)
            .send({
                description: "To write a message 2"
            })
        expect(res.statusCode).toBe(200)
        // expect(req.body).toEqual({ description: 'To write a message', isCompleted: false })
    })

    test('it should not to update the doc with fakeId', async () => {
        const res = await request(app)
            .patch(`/tasks/${fakeId}`)
            .send({
                description: "To write a message 2"
            })
        expect(res.statusCode).toBe(404)
        // expect(req.body).toEqual({ description: 'To write a message', isCompleted: false })
    })

    test('it should not to update the doc with non existind doc field', async () => {
        const res = await request(app)
            .patch(`/tasks/${id}`)
            .send({
                descripo: "Clean the house"
            })
        expect(res.statusCode).toBe(404)
    })

    test('it should delete task', async () => {
        const res = await request(app)
            .delete(`/tasks/${id}`)
        expect(res.statusCode).toBe(200)
    })

    test('it should not delete task', async () => {
        const res = await request(app)
            .delete(`/tasks/${fakeId}`)
        expect(res.statusCode).toBe(404)
    })
})


afterAll(async () => {
    await mongoose.connection.close()
})