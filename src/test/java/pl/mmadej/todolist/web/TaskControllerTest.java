package pl.mmadej.todolist.web;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import pl.mmadej.todolist.domain.Task;
import pl.mmadej.todolist.repository.TaskRepository;

import java.util.List;

import static java.util.Arrays.asList;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.eq;
import static org.mockito.Mockito.verify;
import static pl.mmadej.todolist.domain.Task.builder;

@RunWith(MockitoJUnitRunner.class)
public class TaskControllerTest {

	@InjectMocks TaskController controller;

	@Mock TaskRepository repo;

	@Test
	public void returnAllTasks() {
		Task firstTask = builder().subject("first").content("content").build();
		Task secondTask = builder().subject("second").content("content").build();
		List<Task> tasks = asList(firstTask, secondTask);
		given(repo.findAll()).willReturn(tasks);

		List<Task> result = controller.listTasks();

		assertThat(result).isEqualTo(tasks);
	}

	@Test
	public void deleteTask() {
		controller.deleteTask("id");

		verify(repo).delete("id");
	}

	@Test
	public void createTask() {
		Task task = builder().subject("a task").content("sample content").build();
		given(repo.insert(eq(task))).willReturn(task);

		//Task result = controller.createTask("a task");

		//assertThat(result).isEqualTo(task);
	}

}