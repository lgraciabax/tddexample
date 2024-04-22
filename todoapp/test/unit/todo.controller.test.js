const TodoController = require("../../controllers/todo.controller")
const TodoModel = require("../../model/todo.model")

TodoModel.create= jest.fn();

describe("TodoController.createTodo",()=>{
    it("instanciar metodo de controlador",()=>{
        expect(typeof TodoController.createTodo).toBe("function")
    });
    it("debe de llamar al metodo TodoModel.create",()=>{
        TodoController.createTodo();
        expect(TodoModel.create).toBeCalled();
    })
})