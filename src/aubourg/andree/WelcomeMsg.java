package aubourg.andree;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

public class WelcomeMsg extends HttpServlet {

	private static final long serialVersionUID = 1L;
	public static final String WELCOME_MSG_ENTITY_KEY = "WelcomeMsg";
	public static final String WELCOME_MSG_ENTITY_PROPERTY = "msg";

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		Entity msgW = new Entity(WELCOME_MSG_ENTITY_KEY);
		msgW.setProperty(WELCOME_MSG_ENTITY_PROPERTY, "Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die");

		datastore.put(msgW);
	}

}
