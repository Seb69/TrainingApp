package aubourg.andree;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.labs.repackaged.org.json.JSONArray;
import com.google.appengine.labs.repackaged.org.json.JSONException;
import com.google.appengine.labs.repackaged.org.json.JSONObject;

@SuppressWarnings("serial")
public class GetAllTrainings extends HttpServlet
{

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {


		

		DatastoreService datastore = DatastoreServiceFactory
				.getDatastoreService();
		
		Query query;
		PreparedQuery pq;
		JSONArray json = new JSONArray();
		
		
		

		
		//Search training
				JSONArray jsonTrainings = new JSONArray();
				query = new Query("Training");
				pq = datastore.prepare(query);		
				
				try {
					
				for (Entity result : pq.asIterable()) {
					// create training object
					JSONObject jsonObj = new JSONObject();
						
							//Receive entity property 
							jsonObj.put("title", result.getProperty("title").toString());
							jsonObj.put("description", result.getProperty("description").toString());
							jsonObj.put("domain", result.getProperty("domain").toString());
							json.put(jsonObj);
														}
					
				
				
	
		
		//Send back training
		JSONObject responseJson = new JSONObject();
	
		responseJson.put("data",json);

		response.setContentType("application/json");
		response.getOutputStream().print(responseJson.toString());
		response.getOutputStream().flush();
		
				} catch (JSONException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		
		
		
	}
	
	
	
	
}