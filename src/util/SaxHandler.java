package util;




import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

import com.google.appengine.labs.repackaged.org.json.JSONArray;
import com.google.appengine.labs.repackaged.org.json.JSONException;
import com.google.appengine.labs.repackaged.org.json.JSONObject;


 
public class SaxHandler extends DefaultHandler {
	
	private boolean buildingItem = false;
	private String currentProperty = "";
	private JSONArray itemsList;
	private JSONObject itemJson;
	
	@Override
	public void startDocument(){
		itemsList = new JSONArray();
	}

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes)
            throws SAXException {
    	//System.out.println(qName);
    	currentProperty = qName;
    	
    	if(qName.equals("item")){
    		buildingItem = true;
    		itemJson = new JSONObject();
    	}
    		

    }
 
 
    @Override
    public void endElement(String uri, String localName, String qName) throws SAXException {
    	//System.out.println(qName);
    	if(qName.equals("item")){		
    		itemsList.put(itemJson);
    		buildingItem = false;
    		itemJson = null;
    	}
    }
 
 
    @Override
    public void characters(char ch[], int start, int length) throws SAXException {
    	String data = new String(ch, start, length);
    	
    	try {
			if(itemsList != null && buildingItem && itemJson.get(currentProperty) == null)
			itemJson.put(currentProperty, data);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

    	
    }

	public JSONArray getItemsList() {
		return itemsList;
	}
}