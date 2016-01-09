package aubourg.andree;

import java.io.IOException;

import javax.servlet.http.*;

@SuppressWarnings("serial")
public class ProjGoogleAppEngSportServlet extends HttpServlet {
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, world");
	}
}
