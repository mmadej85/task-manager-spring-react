package pl.mmadej.todolist.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.mmadej.todolist.domain.Task;
import pl.mmadej.todolist.repository.TaskRepository;

import java.util.List;

@RestController
public class TaskController {
	@Autowired
	private TaskRepository repo;

	@RequestMapping(value = "api/tasks", produces = "application/json", method = RequestMethod.GET)
	public List<Task> listTasks() {
		return repo.findAll();
	}

	@RequestMapping(value = "api/tasks", produces = "application/json", method = RequestMethod.POST)
	public Task createTask(@RequestBody Task task) {
		return repo.insert(task);
	}

	@RequestMapping(value = "api/tasks/{id}", method = RequestMethod.DELETE)
	public void deleteTask(@PathVariable("id") String id) {
		repo.delete(id);
	}
}
