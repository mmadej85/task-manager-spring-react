package pl.mmadej.todolist.api.tasks;


import com.fasterxml.jackson.core.JsonProcessingException;
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
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import pl.mmadej.todolist.domain.Task;
import pl.mmadej.todolist.repository.TaskRepository;

import java.io.IOException;
import java.util.List;

import static java.util.Collections.singletonList;
import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class CreateTaskIntegrationTest {

	@Autowired private TaskRepository repo;

	@Autowired private TestRestTemplate restTemplate;

	private JacksonTester<List<Task>> taskListJson;
	private ObjectMapper objectMapper;

	private Task task1 = Task.builder().subject("first task").content("content1").build();
	private Task task2 = Task.builder().subject("second task").content("sample content").build();

	@Before
	public void before() {
		JacksonTester.initFields(this, objectMapper = new ObjectMapper());
		repo.insert(task1);
	}

	@After
	public void after() {
		repo.deleteAll();
	}

	@Test
	public void createNewTask() throws IOException {
		givenThereIsOneTaskStored();
		HttpEntity<String> request = givenRequestWithSecondTaskAsJSON();

		Task result = restTemplate.postForObject("/api/tasks", request, Task.class);

		assertThat(result).isEqualTo(task2);
	}

	private HttpEntity<String> givenRequestWithSecondTaskAsJSON() throws JsonProcessingException {
		HttpHeaders requestHeaders = new HttpHeaders();
		requestHeaders.setContentType(MediaType.APPLICATION_JSON);
		return new HttpEntity<>(objectMapper.writeValueAsString(task2), requestHeaders);

	}

	private void givenThereIsOneTaskStored() throws IOException {
		ResponseEntity<String> entity = restTemplate.getForEntity("/api/tasks", String.class);
		assertThat(taskListJson.parse(entity.getBody())).isEqualTo(singletonList(task1));
	}
}