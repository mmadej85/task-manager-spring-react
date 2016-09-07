package pl.mmadej.todolist.api.tasks;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import pl.mmadej.todolist.domain.Task;
import pl.mmadej.todolist.repository.TaskRepository;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

import static java.util.Arrays.asList;
import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class DeleteTaskIntegrationTest {

	@Autowired private TaskRepository repo;

	@Autowired private TestRestTemplate restTemplate;

	private JacksonTester<List<Task>> taskListJson;

	private Task task1 = Task.builder().subject("first task").content("content1").build();
	private Task task2 = Task.builder().subject("second task").content("content2").build();

	@Before
	public void before() {
		ObjectMapper objectMapper = new ObjectMapper();
		JacksonTester.initFields(this, objectMapper);
		repo.insert(task1);
		repo.insert(task2);
	}

	@After
	public void after() {
		repo.deleteAll();
	}

	@Test
	public void deleteTask() throws IOException {
		givenThereAreTwoTasksStored();

		restTemplate.delete("/api/tasks/" + task1.getId());

		thenThereIsOnlySecondTaskStored();
	}

	private void thenThereIsOnlySecondTaskStored() throws IOException {
		ResponseEntity<String> entity = restTemplate.getForEntity("/api/tasks", String.class);
		assertThat(taskListJson.parse(entity.getBody())).isEqualTo(Collections.singletonList(task2));
	}

	private void givenThereAreTwoTasksStored() throws IOException {
		ResponseEntity<String> entity = restTemplate.getForEntity("/api/tasks", String.class);
		assertThat(taskListJson.parse(entity.getBody())).isEqualTo(asList(task1, task2));
	}
}