package aubourg.andree;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.labs.repackaged.org.json.JSONArray;
import com.google.appengine.labs.repackaged.org.json.JSONException;
import com.google.appengine.labs.repackaged.org.json.JSONObject;

import com.google.gson.Gson;
import com.parseData.ParseData;





@SuppressWarnings("serial")
public class AddTrainingServlet extends HttpServlet  {
	


	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
	//TODO
	System.out.println("POST");

	InputStreamReader isr = new InputStreamReader(req.getInputStream());
	BufferedReader in = new BufferedReader(isr);
	String line = in.readLine();
	 
	JSONObject json;
	
	try {
		json = new JSONObject(line);
	  
				    //Connect/create Datastore
					DatastoreService datastore = DatastoreServiceFactory
							.getDatastoreService();
					
					//Recovery of Task Queue 
					Queue queue = QueueFactory.getDefaultQueue();
			
					// Create new training
					Entity training = new Entity("Training");
					training.setProperty("title", json.get("title"));
					training.setProperty("description", json.get("description"));
					training.setProperty("domain", json.get("domaine"));
					
					//put it in datastore and get its key for training  
					Key trainingKey = datastore.put(training);
					
					//Go throw exercice array
				    JSONArray jsonArray = json.getJSONArray("exercices");
				    for (int i = 0; i < jsonArray.length(); i++) {
				        JSONObject explrObject = jsonArray.getJSONObject(i);
					    
				        //Create/add new exercice entity to datastore 
					    Entity exercice = new Entity("Exercice", trainingKey);
					    exercice.setProperty("titleExe", explrObject.get("title"));
					    exercice.setProperty("descriptionExe", explrObject.get("description"));
					    exercice.setProperty("timeExe", explrObject.get("time"));
					    exercice.setProperty("parentTitle",  json.get("title"));
						datastore.put(exercice);
				    } 
	} catch (JSONException e1) {
		// TODO Auto-generated catch block
		e1.printStackTrace();
	} 
	    }
	}
