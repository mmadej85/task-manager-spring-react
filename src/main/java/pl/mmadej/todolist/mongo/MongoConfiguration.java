package pl.mmadej.todolist.mongo;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

@Configuration
@Profile("production")
public class MongoConfiguration extends AbstractMongoConfiguration {

	@Value("${spring.data.mongodb.host}")
	private String host;

	@Value("${spring.data.mongodb.port}")
	private int port;

	@Value("${todolist.dbname}")
	private String dbName;


	@Override
	protected String getDatabaseName() {
		return dbName;
	}

	@Override
	public Mongo mongo() throws Exception {
		return new MongoClient(host, port);
	}
}
