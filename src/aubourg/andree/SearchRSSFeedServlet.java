package aubourg.andree;

import java.io.IOException;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.xml.sax.InputSource;
import org.xml.sax.SAXException;
import org.xml.sax.XMLReader;
import org.xml.sax.helpers.XMLReaderFactory;

import util.SaxHandler;

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
public class SearchRSSFeedServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		
		Query query;
		PreparedQuery pq;
		JSONArray json = new JSONArray();
		
		String searchString = request.getParameter("search");
		

		
				JSONArray jsonRSS = new JSONArray();
		
					
				//get news using RSS
				SaxHandler handler = new SaxHandler();
				URL url = new URL("http://feeds.bbci.co.uk/sport/0/rss.xml");
				
				try {
					XMLReader myReader = XMLReaderFactory.createXMLReader();
					myReader.setContentHandler(handler);	
					myReader.parse(new InputSource(url.openStream()));

				} catch (SAXException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				
				//keep only 3 first news
				JSONArray itemsListJson = handler.getItemsList();
				while(itemsListJson.length() > 3){
			
					itemsListJson.opt(itemsListJson.length() - 1);
				}
				
				
				//add news to response
				jsonRSS.put(itemsListJson);
				
				
		
		//Send back training
		JSONObject responseJson = new JSONObject();
	
		try {
			responseJson.put("data",jsonRSS);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		response.setContentType("application/json");
		response.getOutputStream().print(responseJson.toString());
		response.getOutputStream().flush();
		
		
	}
	
	
	
	
}