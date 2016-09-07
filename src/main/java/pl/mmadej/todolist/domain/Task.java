package pl.mmadej.todolist.domain;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

@EqualsAndHashCode(exclude = {"id"})
@Builder
@ToString
public class Task {

	@Id
	@Getter
	@Setter
	private String id;

	@Indexed(unique = true)
	@Getter
	@Setter
	private String subject;

	@Getter
	@Setter
	private String content;

	public Task() {
	}

	public Task(@NonNull String subject, @NonNull String content) {
		this.content = content;
		this.subject = subject;
	}

	public Task(String id, @NonNull String subject, @NonNull String content) {
		this.id = id;
		this.content = content;
		this.subject = subject;
	}
}
