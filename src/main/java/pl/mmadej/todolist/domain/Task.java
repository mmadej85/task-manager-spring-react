package pl.mmadej.todolist.domain;

import java.util.UUID;

public class Task {
	private String id;
	private String content;

	public Task(String content) {
		this.id = UUID.randomUUID().toString();
		this.content = content;
	}

	public String getContent() {
		return content;
	}

	public String getId() {
		return id;
	}
}
