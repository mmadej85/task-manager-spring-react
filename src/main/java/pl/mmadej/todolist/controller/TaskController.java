package pl.mmadej.todolist.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.mmadej.todolist.domain.Task;

import java.util.List;

import static java.util.stream.Collectors.toList;
import static java.util.stream.Stream.of;

@RestController
public class TaskController {
	@RequestMapping(value = "api/tasks", produces = "application/json")
	public List<Task> listTasks() {
		return of(new Task("First task"), new Task("Second task")).collect(toList());
	}
}
