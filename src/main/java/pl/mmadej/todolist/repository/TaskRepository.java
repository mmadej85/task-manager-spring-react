package pl.mmadej.todolist.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import pl.mmadej.todolist.domain.Task;

public interface TaskRepository extends MongoRepository<Task, String> {
}
