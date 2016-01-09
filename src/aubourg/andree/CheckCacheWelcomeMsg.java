package aubourg.andree;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

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
import com.google.appengine.api.datastore.Query.FilterPredicate;
import com.google.appengine.api.memcache.MemcacheService;
import com.google.appengine.api.memcache.jsr107cache.GCacheFactory;

import net.sf.jsr107cache.Cache;
import net.sf.jsr107cache.CacheException;
import net.sf.jsr107cache.CacheFactory;
import net.sf.jsr107cache.CacheManager;

public class CheckCacheWelcomeMsg extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private final static String MSG_KEY = "msg";

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		System.out.println("CheckServlet !");

		// Recupération du service Datastore
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

		Cache cache = null;
		Map props = new HashMap();
		props.put(GCacheFactory.EXPIRATION_DELTA, 3600);
		props.put(MemcacheService.SetPolicy.ADD_ONLY_IF_NOT_PRESENT, true);
		try {
			// Récupération du Cache
			CacheFactory cacheFactory = CacheManager.getInstance().getCacheFactory();
			// création/récupération du cache suivant des propriétés spécifiques
			cache = cacheFactory.createCache(props);
			// Si aucune propriété n'est spécifiée,
			// créer/récupérer un cache comme ci-dessous
			// cache = cacheFactory.createCache(Collections.emptyMap());
		} catch (CacheException e) {
			// Traitement en cas d'erreur sur la récupération/configuration du
			// cache
		}
		String message = getWelcomeMsg(datastore,cache);
		
		System.out.println(message);
		
		resp.getWriter().println(message);
		}

	private String getWelcomeMsg(DatastoreService datastore, Cache cache) {
		if (cache.get(MSG_KEY) != null) {
			return (String) cache.get(MSG_KEY);
		} else {
			Filter msgWelcomeFilter = new FilterPredicate(WelcomeMsg.WELCOME_MSG_ENTITY_PROPERTY,
					FilterOperator.NOT_EQUAL, null);

			// Use class Query to assemble a query
			Query q = new Query(WelcomeMsg.WELCOME_MSG_ENTITY_KEY).setFilter(msgWelcomeFilter);

			// Use PreparedQuery interface to retrieve results
			PreparedQuery pq = datastore.prepare(q);

			String welcomeString = "";
			for (Entity result : pq.asIterable()) {
				welcomeString = (String) result.getProperty(WelcomeMsg.WELCOME_MSG_ENTITY_PROPERTY);
			}

			cache.put(MSG_KEY, welcomeString);
			return welcomeString;
		}
	}

}
